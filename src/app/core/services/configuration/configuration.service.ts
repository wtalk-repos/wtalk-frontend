import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  public get apiUrl(){
    return environment.apiUrl;
  }
}
