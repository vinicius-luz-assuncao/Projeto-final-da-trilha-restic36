import { RouterOutlet, Routes } from '@angular/router';
import { AuthGuard, authGuardFn } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { UserprofileComponent } from './shared/components/userprofile/userprofile.component';
import { userprofileGuard } from './guards/userprofile.guard';

export const routes: Routes = [


    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home02', component: AppComponent, canActivate: [authGuardFn] },

    {
        path: 'userprofile',

        component: UserprofileComponent,

        canActivate: [userprofileGuard, authGuardFn],
    }
]