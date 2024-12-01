import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TaskbarComponent } from './shared/components/taskbar/taskbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "./shared/components/menu/menu.component";


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
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'absolute-cinema-project';

  constructor(private readonly auth: AuthService, private readonly router: Router) { }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      }
    });
  }
}
