import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: any [] = [];
  criteria: string = "";



  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovie(this.criteria);
  }

}