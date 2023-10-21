import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string
  constructor(private httpClient: HttpClient) {
    this.url = `${environment.gateway_API}/api/item`;
  }

  createItem(item: any) {
    return this.httpClient.post(`${this.url}`, item);
  }
  updateItem(id: any, item: any) {
    return this.httpClient.put(`${this.url}/${id}`, item);
  }
  getAll() {
    return this.httpClient.get(`${this.url}/all`);
  }
  getItemm(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
  deleteItem(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
