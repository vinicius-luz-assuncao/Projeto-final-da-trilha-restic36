import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../../interfaces/video';
import { VideoService } from '../../services/video.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  video?: Video;
  safeUrl?: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService) { }

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
    });
  }


}
