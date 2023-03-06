import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { ProductDeleteComponent } from './pages/product-delete/product-delete.component';
import { ProductListCheckedComponent } from './pages/product-list-checked/product-list-checked.component';
import { ProductListChecked2Component } from './pages/product-list-checked2/product-list-checked2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProductListCheckedComponent,
    ProductListChecked2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
