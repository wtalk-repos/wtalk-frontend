import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthGuard } from '../shared/directives/auth.guard';

const routes: Routes = [{
    path: '',
    component: ChatComponent,
    canActivate: [AuthGuard],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
