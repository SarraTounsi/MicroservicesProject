import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { MyParkingResComponent } from './parking/MyParkingReservations/my-parking-res/my-parking-res.component';
import { AddParkingResComponent } from './parking/AddParkingReservations/add-parking-res/add-parking-res.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservationComponent } from './reservation/reservation.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FrontofficeComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MyParkingResComponent,
    AddParkingResComponent,,
    RoomsComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,,
    FormsModule

  ],
})
export class FrontofficeModule {}
