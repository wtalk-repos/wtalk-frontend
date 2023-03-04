import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pagination } from '@shared/api-responses/pagination';
import { SearchFriendsComponent } from '@shared/components/search-friends/search-friends.component';
import { Friend } from '@shared/models/friend';
import { PaginationParameters } from '@shared/models/pagination-parameters';
import { FriendService } from '../services/friends.service';

@Component({
    selector: 'app-friends-list',
    templateUrl: './friend-list.component.html',
    styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {
    paginationFriends: Pagination<Friend>;
    paginationParameters: PaginationParameters = new PaginationParameters({
        pageSize: 100,
    })
    selectedFriend: Friend;

    constructor(
        private friendService: FriendService,
        private matDialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.friendService.getFriendsList(this.paginationParameters).subscribe(pagination => {
            this.paginationFriends = pagination;
        });
    }
    selectFriendFromList(friend: Friend) {
        this.selectedFriend = friend;
        this.friendService.selectedFriend.next(friend);
    }
    openSearchFriendsComponent() {
        this.matDialog.open(SearchFriendsComponent, {
            width: '50vw',
            height: '50vh',
        });
    }
}
