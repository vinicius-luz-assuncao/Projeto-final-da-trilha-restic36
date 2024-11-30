import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService, User } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule,
    MatIconModule, CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  profile!: User | null | undefined;




  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: { returnTo: this.doc.location.origin },
    });
  }

}
