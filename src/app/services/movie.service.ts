import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_KEY = "1b249e120afcdb86b8e62c19f68ee123";
// const APP_ID = "";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //https://api.themoviedb.org/3/movie/550?api_key=
  constructor(private http: HttpClient) { }

  getMovie(criteria: string){
    return this.http.get("https://api.themoviedb.org/3/search/movie?", {
      params: {
        api_key: API_KEY,
        query: criteria
      }
    })
  }
}
