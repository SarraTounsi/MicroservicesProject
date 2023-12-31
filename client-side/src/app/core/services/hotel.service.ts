import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  url: string
  constructor(private httpClient: HttpClient) {
    this.url = `${environment.gateway_API}/reservation/api/hotel`;
  }

  createHotel(hotel: any) {
    return this.httpClient.post(`${this.url}/add`, hotel);
  }
  updateHotel(id: any, hotel: any) {
    return this.httpClient.post(`${this.url}/update/${id}`, hotel);
  }
  getAll() {
    return this.httpClient.get(`${this.url}/getAll`);
  }
  getByCountry(country: string){
    return this.httpClient.get(`${this.url}/getByCountry/${country}`);
  }
  getById(id:number){
    return this.httpClient.get(`${this.url}/getById/${id}`);
  }
  deleteHotel(id: number) {
    return this.httpClient.delete(`${this.url}/delete/${id}`);
  }

}
