import { inject, Injectable } from '@angular/core';
import { StoreArticle } from '../Interface/store-article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  http: HttpClient = inject(HttpClient);

  constructor() { }

  getArticulosApiRest(): Observable<Array<StoreArticle>> {

    return this.http.get<Array<StoreArticle>>(environment.url);

  }

}
