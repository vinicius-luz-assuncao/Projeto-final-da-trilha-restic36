import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Video } from '../../../interfaces/video';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIcon, CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() video!: Video;
  video$: Observable<unknown> | Subscribable<unknown> | Promise<unknown> | undefined;

  constructor(private readonly router: Router) { }

  redirectToVideo(): void {
    this.router.navigate(['/video', this.video.id]);
  }
}

