import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SearchCriteriaComponent } from './components/search-criteria/search-criteria.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

const routes: Routes = [
  {path: "search-criteria", component: SearchCriteriaComponent},
  {path: "watch-list", component: WatchListComponent},
  {path: "movie-list", component: MovieListComponent},
  { path: "", redirectTo: "/search-criteria", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
