import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { ParkingReservationComponent } from './parking-reservation/parking-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },

      { path: 'parking', component: ParkingComponent },
      { path: 'parking/add', component: ParkingFormComponent },
      { path: 'parking/update/:id', component: ParkingFormComponent },
      { path: 'parkingres', component: ParkingReservationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
