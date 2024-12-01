import { Component, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { NgIf } from '@angular/common';
import { Video } from '../../../interfaces/video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-tela',
  standalone: true,
  imports: [NgIf,],
  templateUrl: './tela.component.html',
  styleUrl: './tela.component.scss'
})
export class TelaComponent {
  video?: Video;
  safeUrl?: SafeResourceUrl;


  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // Inicializa o primeiro vídeo
    this.route.paramMap.subscribe((params) => {
      const videoId = params.get('id');
      if (videoId) {
        this.loadVideo(videoId);
      }
    });
  }

  loadVideo(id: string): void {
    this.videoService.getVideoById(id).subscribe((video) => {
      this.video = video;
      // Extraí o ID do vídeo no URL do YouTube e cria o link de embed
      const videoIdMatch = video.url.match(/v=([^&]+)/);
      const embedUrl = videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : video.url;

      // Usa o DomSanitizer para garantir a segurança da URL
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      console.log(embedUrl);  // Para depuração
    });
  }
}