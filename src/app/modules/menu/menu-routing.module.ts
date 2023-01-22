import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@shared/directives/auth.guard';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [{
  path: '',
  component: MenuComponent,
  children: [
    {
      path: '',
      redirectTo: 'chat',
      pathMatch: 'relative'
    },
    {
      path: 'chat',
      loadChildren: () => import('src/app/modules/chat/chat.module').then(m => m.ChatModule),
      canActivate: [AuthGuardService]
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
