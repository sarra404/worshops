import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencedetailsComponent } from './Residences/residencedetails/residencedetails.component';
import { AddAppartmentComponent } from './appartment/add-appartment/add-appartment.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'residence',component:ResidencesComponent},
  {path:'details/:id',component:ResidencedetailsComponent},

  {path:'home',component:HomeComponent},
  {path:'AddApart',component:AddAppartmentComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
