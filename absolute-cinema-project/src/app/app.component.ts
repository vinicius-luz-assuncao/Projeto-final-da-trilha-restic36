import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskbarComponent } from "./shared/components/taskbar/taskbar.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskbarComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'absolute-cinema-project';
}
