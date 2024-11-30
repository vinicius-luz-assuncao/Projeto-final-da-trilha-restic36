import { Component, Input, Inject } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { NgIf, DOCUMENT } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    NgIf,
    MatMenuModule
  ],
  template: ``,
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() size: string = '40px';
  @Input() showMenu: boolean = true;

  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    private router: Router
  ) { }

  profile?: User | undefined | null;

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    })
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
  }

  redirectToProfile() {
    this.router.navigate(['profile']);
  }
}