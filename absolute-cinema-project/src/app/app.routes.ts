import { RouterOutlet, Routes } from '@angular/router';
import { AuthGuard, authGuardFn } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { UserprofileComponent } from './shared/components/userprofile/userprofile.component';
import { userprofileGuard } from './guards/userprofile.guard';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },

    {
        path: 'home',
        component: HomepageComponent,
    },

    { path: '', redirectTo: 'home03', pathMatch: 'full' },
    { path: 'home02', component: HomepageComponent, canActivate: [authGuardFn] },

    {
        path: 'userprofile',

        component: UserprofileComponent,

        canActivate: [userprofileGuard, authGuardFn],
    },
]