import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TaskbarComponent } from "./shared/components/taskbar/taskbar.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from "./shared/components/card/card.component";
import { AuthService } from '@auth0/auth0-angular';
import { AvatarComponent } from "./shared/components/avatar/avatar.component";
import { UserprofileComponent } from "./shared/components/userprofile/userprofile.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskbarComponent, MatIconModule, MatIconModule, MatButtonModule, MatInputModule, CardComponent, AvatarComponent, UserprofileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'absolute-cinema-project';
  tela: any;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      }
    });
  }







}
