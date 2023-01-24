import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagination } from '../api-responses/pagination';
import { ParameterHelper } from '../helpers/parameters-helper';
import { PaginationParameters } from '../models/pagination-parameters';
import { map } from 'rxjs/operators';
import { Type } from '@angular/compiler';
import { NewIdResponse } from '@shared/api-responses/new-id-response';
import { ConfigurationService } from 'src/app/core/services/configuration/configuration.service';

export abstract class AbstractCrudRestService<T> {
  url: string;
  constructor(
    protected _http: HttpClient,
    protected configuration: ConfigurationService,
    protected entityName: string,
    protected entityType: any
  ) {
    this.entityName = entityName.toLowerCase();
    this.url = `${this.configuration.apiUrl}${this.entityName}`;
  }

  private getInstanceOfEntityType() {
    return new this.entityType();
  }

  addOne(data: T): Observable<NewIdResponse> {
    return this._http.post(this.url, data) as Observable<NewIdResponse>;
  }


  deleteOne(id: string | number): Observable<T> {
    return this._http.delete(`${this.url}/${id}`) as Observable<T>;
  }

  updateOne(data: T): Observable<T> {
    return this._http.put(`${this.url}`, data) as Observable<T>;
  }
}
