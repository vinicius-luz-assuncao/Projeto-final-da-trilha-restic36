import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Video } from '../../../interfaces/video';
import { switchMap } from 'rxjs/operators';
import { NgIf } from '@angular/common';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-tela',
  standalone: true,
  imports: [NgIf, CardComponent],
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.scss']
})
export class TelaComponent implements OnInit {

  // Observable para vídeos, se necessário para a lista de vídeos
  videos$!: Observable<Video[]>;

  // A variável que armazena o vídeo atual
  video!: Video;

  // A URL segura para o embed do vídeo
  safeUrl!: SafeResourceUrl;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // Obtém os vídeos, se necessário
    this.videos$ = this.videoService.getVideos();

    // Usa o ActivatedRoute para capturar o ID do vídeo da URL e carregar o vídeo específico
    this.route.paramMap.pipe(
      switchMap(params => {
        const videoId = params.get('id');
        if (videoId) {
          return this.videoService.getVideoById(videoId); // Retorna o Observable do vídeo
        }
        throw new Error('Video ID not found in route parameters');
      })
    ).subscribe({
      next: (video) => {
        this.video = video;

        // Extraí o ID do vídeo no URL do YouTube e cria o link de embed
        const videoIdMatch = video.url.match(/v=([^&]+)/);
        const embedUrl = videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : video.url;

        // Usa o DomSanitizer para garantir a segurança da URL
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
        console.log('Embed URL:', embedUrl);  // Para depuração
      },
      error: (err) => {
        console.error('Erro ao carregar vídeo:', err);
      }
    });
  }
}
