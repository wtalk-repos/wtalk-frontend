import { HttpParams } from '@angular/common/http';

export class PaginationParameters {
  constructor(init?: Partial<PaginationParameters>) {
    Object.assign(this, init);
  }
  pageIndex: number = 1;
  pageSize: number;
  search: string|undefined = undefined;
  sort: string|undefined = undefined;
  getHttpParams(): HttpParams {
    let httpParams = new HttpParams();

    // Delete undefined or null properties
    Object.keys(this).forEach((key) => {
      // @ts-ignore: Unreachable code error
      if (this[(key)] != undefined && this[key] != null) {
        // @ts-ignore: Unreachable code error
        httpParams=httpParams.set(key, this[key].toString());
      }
    });
    return httpParams;
  }
}
