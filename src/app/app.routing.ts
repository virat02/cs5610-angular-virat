import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { WebsiteNavigatorComponent } from './website-navigator/website-navigator.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'websites', component: WebsiteNavigatorComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile/:userId', component: ProfileComponent},
  { path: '**', component: LoginComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
