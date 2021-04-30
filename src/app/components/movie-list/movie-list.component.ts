import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Array<any> = [];
  type: string = "";
  criteria: string = "";
  page: number = 1;

  

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovie(this.criteria);
  }

  incrementPageNumber(index: number){

  }

}



