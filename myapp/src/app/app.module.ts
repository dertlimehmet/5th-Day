import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { PostComponent } from './component/post/post.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostSearchComponent } from './component/post-search/post-search.component';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
