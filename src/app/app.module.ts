import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
