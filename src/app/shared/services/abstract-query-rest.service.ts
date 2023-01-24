import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagination } from '../api-responses/pagination';
import { PaginationParameters } from '../models/pagination-parameters';
import { map } from 'rxjs/operators';
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

    get(paginationParameters?: PaginationParameters): Observable<Pagination<T>> {
        // Return an observable that initiates a HTTP request to the REST API server
        return this._http
            .get(this.url + '/list', { params: paginationParameters?.getHttpParams() })
            .pipe(
                map((data: any) => {
                    let pagination = data.pagination as Pagination<T>;
                    pagination.items = pagination.items.map((item) =>
                        Object.assign(this.getInstanceOfEntityType(), item)
                    );
                    return data.pagination;
                })
            ) as Observable<Pagination<T>>;
    }

    getOne(id: string | number, httpParams?: HttpParams | {}): Observable<T> {
        return this._http.get(`${this.url}/${id}`, { params: httpParams }).pipe(
            map((item) => {
                return Object.assign(this.getInstanceOfEntityType(), item);
            })
        ) as Observable<T>;
    }

    getAll() {
        return this._http.get(this.url + '/all').pipe(
            map((items: any) => {
                let newItems: any[] = [];
                items.forEach((item: any) => {
                    newItems.push(Object.assign(this.getInstanceOfEntityType(), item));
                });
                return newItems;
            })
        );
    }
}