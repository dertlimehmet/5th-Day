import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from './admin/visitor/visitor.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [

  {
    path: '', component: MainLayoutComponent, children: [
      { path: 'anasayfa', component: HomeComponent },
      { path: 'urunler', component: ProductsComponent },
      { path: 'iletisim', component: ContactComponent }

    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [

      { path: 'ziyaretci', component: VisitorComponent }


    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
