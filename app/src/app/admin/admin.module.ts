import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminGalleryComponent } from './admin-gallery/admin-gallery.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AdminContactComponent,
    AdminGalleryComponent,
    AdminHomeComponent,
    AdminLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
