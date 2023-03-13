import { Component, OnInit } from '@angular/core';
import { Subject } from '@microsoft/signalr';
import { Pagination } from '@shared/api-responses/pagination';
import { Friend } from '@shared/models/friend';
import { PaginationParameters } from '@shared/models/pagination-parameters';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { FriendService } from 'src/app/modules/friends/services/friends.service';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.scss'],
})
export class SearchFriendsComponent implements OnInit {
  paginationParameters = new PaginationParameters({
    pageIndex: 1,
    pageSize: 20,
  });
  pagination = new Pagination<Friend>();
  searchTerm = undefined;
  loading: boolean = false;
  $search: BehaviorSubject<Pagination<Friend> | undefined>;

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.$search = new BehaviorSubject<Pagination<Friend> | undefined>(
      undefined
    );

    this.$search
      .pipe(
        debounceTime(500),
        switchMap((a) => {
          return this.friendService.searchFriends(this.paginationParameters);
        })
      )
      .subscribe((pagination) => {
        this.pagination = pagination;
        this.loading = false;
      });
  }

  search(e: any) {
    this.loading = true;
    this.searchTerm = e;
    this.paginationParameters.search = e;
    this.$search.next(this.searchTerm);
  }
}
