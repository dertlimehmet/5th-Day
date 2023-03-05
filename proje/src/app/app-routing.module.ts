import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminPostComponent } from './pages/admin-post/admin-post.component';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { VisitorComponent } from './pages/visitor/visitor.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'visitor',component:VisitorComponent}
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'home',component:AdminHomeComponent},
    {path:'post',component:AdminPostComponent},
    {path:'user',component:AdminUserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
