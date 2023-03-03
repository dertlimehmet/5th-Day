import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './default/home/home.component';
import { GalleryComponent } from './default/gallery/gallery.component';
import { ContactComponent } from './default/contact/contact.component';
import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './default/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
