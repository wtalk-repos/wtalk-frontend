import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectAuthorizedUser } from '@shared/guards/redirect-authorized-user.guard';
import { SignInComponent } from './components/signin/signin.component';
import { SingUpComponent } from './components/signup/signup.component';
import { LandingComponent } from './pages/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
    canActivate: [RedirectAuthorizedUser]
  },
  { path: 'signin', component: SignInComponent, canActivate: [RedirectAuthorizedUser] },
  { path: 'signup', component: SingUpComponent, canActivate: [RedirectAuthorizedUser] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
