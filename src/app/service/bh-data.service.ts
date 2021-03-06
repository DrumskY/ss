import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BHDataService {
  private url: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get(this.url + '/order/items');
  }

  getById(id: string) {
    return this.http.get(this.url + '/order/items/' + id);
  }
}
