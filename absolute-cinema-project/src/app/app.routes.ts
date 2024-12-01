import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';
import { UserprofileComponent } from './shared/components/userprofile/userprofile.component';
import { userprofileGuard } from './guards/userprofile.guard';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TelaComponent } from './shared/components/tela/tela.component';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },


    { path: 'home', component: HomepageComponent, canActivate: [authGuardFn] },


    { path: 'video/:id', component: TelaComponent },

    { path: 'userprofile', component: UserprofileComponent },

    { path: '**', redirectTo: 'login' },


    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },

    {
        path: 'userprofile',

        component: UserprofileComponent,

        canActivate: [userprofileGuard, authGuardFn],
    },
]