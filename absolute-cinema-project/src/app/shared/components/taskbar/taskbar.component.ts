import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from "../login/login.component";


@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [MatIconModule, LoginComponent],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss'
})
export class TaskbarComponent {

}

