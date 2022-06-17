import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../shared/chat/chat.component';
import { AuthGuard } from '../shared/directives/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      redirectTo: 'chat',
      pathMatch: 'relative'
    },
    {
      path: 'chat',
      loadChildren: () => import('src/app/modules/chat/chat.module').then(m => m.ChatModule),
      canActivate: [AuthGuard]
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
