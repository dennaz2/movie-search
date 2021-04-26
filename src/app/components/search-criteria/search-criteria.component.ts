import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  backgroundImage: boolean = true;
  moviesArr: any = [];

  constructor(private movieService: MovieService, private router: Router) {}
  
  doSearch(form: any){
    this.movieService.getMovie(form.search).subscribe(data => {
      this.moviesArr = data.results;

      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
