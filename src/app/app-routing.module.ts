import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { ProfileComponent } from './components/profile/profile.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { NotFoundComponent } from './modules/auth/not-found/not-found.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { DashboardComponent } from './modules/shared/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    pathMatch: 'full'
  },
  {
    path:'main-nav',
    component: MainNavComponent,
    children: [
      { path: 'profile', component:ProfileComponent }
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '**', 
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
