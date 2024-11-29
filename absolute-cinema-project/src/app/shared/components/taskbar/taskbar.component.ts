import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent {

}

