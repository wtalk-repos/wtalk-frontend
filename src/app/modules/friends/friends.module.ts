import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FriendListComponent } from './components/friend-list-component';
import { FriendService } from './services/friends.service';

@NgModule({
    imports: [SharedModule],
    declarations: [FriendListComponent],
    exports: [FriendListComponent],
    providers: [FriendService]
})
export class FriendsModule { }