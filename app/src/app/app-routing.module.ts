import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './default/home/home.component';
import { GalleryComponent } from './default/gallery/gallery.component';
import { ContactComponent } from './default/contact/contact.component';
import { MainLayoutComponent } from './default/main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',component:HomeComponent},
    {path:'anasayfa',component:HomeComponent},
    {path:'galeri',component:GalleryComponent},
    {path:'iletisim',component:ContactComponent}
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'anasayfa',component:AdminHomeComponent},
    {path:'galeri',component:AdminGalleryComponent},
    {path:'iletisim',component:AdminContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
