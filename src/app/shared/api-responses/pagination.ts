export class Pagination<T>{
    items:Array<T>=new Array<T>();
    pageIndex:number;
    pageSize:number;
    count:number;
    totalPages:number;
}