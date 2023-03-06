import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationService } from '@core/services/configuration/configuration.service';
import { Pagination } from '@shared/api-responses/pagination';
import { Friend } from '@shared/models/friend';
import { PaginationParameters } from '@shared/models/pagination-parameters';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  selectedFriend: BehaviorSubject<Friend> = new BehaviorSubject<Friend>(undefined as any);

  constructor(
    private _http: HttpClient,
    private _configuration: ConfigurationService
  ) { }

  getFriendsList(paginationParameters: PaginationParameters): Observable<Pagination<Friend>> {
    return this._http
      .get(this._configuration.apiUrl + 'user/friends/list', { params: paginationParameters?.getHttpParams() })
      .pipe(
        map((data: any) => {
          let pagination = data.pagination as Pagination<Friend>;
          pagination.items = pagination.items.map((item) =>
            Object.assign(new Friend(), item)
          );
          return data.pagination;
        })
      ) as Observable<Pagination<Friend>>;
  }
  searchFriends(paginationParameters: PaginationParameters) {
    return this._http
      .get(this._configuration.apiUrl + 'user/search', { params: paginationParameters?.getHttpParams() })
      .pipe(
        map((data: any) => {
          let pagination = data.pagination as Pagination<Friend>;
          pagination.items = pagination.items.map((item) =>
            Object.assign(new Friend(), item)
          );
          return data.pagination;
        })
      ) as Observable<Pagination<Friend>>;
  }
}
