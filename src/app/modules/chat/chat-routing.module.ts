import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@shared/directives/auth.guard';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [{
    path: '',
    component: ChatComponent,
    canActivate: [AuthGuardService],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
