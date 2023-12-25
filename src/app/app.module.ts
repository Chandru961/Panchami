import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FacilitesComponent } from './facilites/facilites.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LuxuryComponent } from './luxury/luxury.component';
import { DeluxeComponent } from './deluxe/deluxe.component';
import { StandardComponent } from './standard/standard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    FacilitesComponent,
    GalleryComponent,
    ContactUsComponent,
    LuxuryComponent,
    DeluxeComponent,
    StandardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
