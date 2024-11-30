import { Component } from '@angular/core';
import { AvatarComponent } from "../../shared/components/avatar/avatar.component";
import { TaskbarComponent } from "../../shared/components/taskbar/taskbar.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AvatarComponent, TaskbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
