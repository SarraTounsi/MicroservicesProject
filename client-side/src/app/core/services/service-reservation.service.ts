import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceReservation } from './../models/serviceReservation.model';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ServiceReservationService {

    private baseUrl = `${environment.gateway_API}/msauxiliaryservices`; // Replace with your Spring Boot backend URL

    constructor(private http: HttpClient) {}

    getServiceReservationById(id: number): Observable<ServiceReservation> {
      return this.http.get<ServiceReservation>(`${this.baseUrl}/controllerServiceReservation/${id}`);
    }

    createServiceReservation(serviceReservation: ServiceReservation): Observable<ServiceReservation> {
      return this.http.post<ServiceReservation>(`${this.baseUrl}/controllerServiceReservation`, serviceReservation);
    }

    updateServiceReservation(id: number, updatedServiceReservation: ServiceReservation): Observable<ServiceReservation> {
      return this.http.put<ServiceReservation>(`${this.baseUrl}/controllerServiceReservation/${id}`, updatedServiceReservation);
    }
    deleteServiceReservation(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/controllerServiceReservation/${id}`);
    }

    getServiceReservationsByAuxiliaryServiceId(auxiliaryServiceId: number): Observable<ServiceReservation[]> {
      return this.http.get<ServiceReservation[]>(`${this.baseUrl}/controllerServiceReservation/byAuxiliaryServiceId/${auxiliaryServiceId}`);
    }
    getAllServiceReservations(): Observable<ServiceReservation[]> {
      return this.http.get<ServiceReservation[]>(`${this.baseUrl}/controllerServiceReservation/all`);
    }
}
