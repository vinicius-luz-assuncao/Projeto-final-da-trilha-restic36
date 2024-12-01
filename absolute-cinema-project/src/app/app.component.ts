import { Component, Inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TaskbarComponent } from './shared/components/taskbar/taskbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './shared/components/card/card.component';
import { AuthService } from '@auth0/auth0-angular';
import { AvatarComponent } from './shared/components/avatar/avatar.component';
import { UserprofileComponent } from './shared/components/userprofile/userprofile.component';
import { CommonModule } from '@angular/common';
import { Video } from './interfaces/video';
import { VideoService } from './shared/services/video.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TaskbarComponent,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    CardComponent,
    AvatarComponent,
    UserprofileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'absolute-cinema-project';
  videos: Video[] = []; // Declarar a variável fora do ngOnInit

  constructor(
    private auth: AuthService,
    private router: Router,
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      }
    });

    this.videoService.getVideos().subscribe((data) => {
      this.videos = data; // Populando a lista de vídeos
    });
  }
}
