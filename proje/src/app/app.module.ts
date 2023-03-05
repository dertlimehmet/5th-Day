import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminPostComponent } from './pages/admin-post/admin-post.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent,
    AdminHomeComponent,
    AdminPostComponent,
    AdminUserComponent,
    VisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
