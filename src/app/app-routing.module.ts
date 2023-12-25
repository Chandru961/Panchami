import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FacilitesComponent } from './facilites/facilites.component';
import { GalleryComponent } from './gallery/gallery.component'; 
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LuxuryComponent } from './luxury/luxury.component';
import { DeluxeComponent } from './deluxe/deluxe.component';
import { StandardComponent } from './standard/standard.component';


const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'rooms' , component:RoomsComponent},
  {path:'facilities' , component:FacilitesComponent},
  {path:'gallery' , component:GalleryComponent},
  {path:'contact-us' , component:ContactUsComponent},
  {path:'luxury' , component:LuxuryComponent},
  {path:'deluxe' , component:DeluxeComponent},
  {path:'standard' , component:StandardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
