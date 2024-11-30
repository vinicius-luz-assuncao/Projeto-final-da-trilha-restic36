import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { NgIf } from '@angular/common';
import { Video } from '../../../interfaces/video';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-tela',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tela.component.html',
  styleUrl: './tela.component.scss'
})
export class TelaComponent {
  video?: Video;
  safeUrl?: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,

  ) { }

  ngOnInit(): void {
    // Inicializa o primeiro vídeo
    this.route.paramMap.subscribe((params) => {
      const videoId = params.get('id');
      if (videoId) {
        this.loadVideo(videoId);
      }
    });
  } loadVideo(videoId: string) {
    throw new Error('Method not implemented.');
  }
}
