import { Injectable } from "@angular/core";

@Injectable()
export class DataStorageService {
    constructor(
    ) {

    }

    clearAllData() {
        localStorage.clear();
    }
}