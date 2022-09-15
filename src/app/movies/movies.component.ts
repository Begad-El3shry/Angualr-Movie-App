import { Component, OnInit } from '@angular/core';
import { MoviesserviceService } from '../moviesservice.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService:MoviesserviceService){}

  title = 'first-app';
  moviesList:any[] = [];
  pageSize:number =20;
  allMovies!:number ;
  allPages!:number ;

  currentPage!:number;

  ngOnInit(): void {
    this.movieService.getData(this.currentPage).subscribe({next:(movies)=>{
      this.moviesList = movies.results;
      this.allPages = movies.total_pages;
      this.allMovies = movies.total_results;
   }});
  }

  toggleDetails(id:number){
    this.moviesList.filter(function(movie){
      if (movie.id === id) {
        movie.isVisible =! movie.isVisible ;
      }
    })
  }

  onPageChange(pageData:PageEvent){
    this.currentPage = pageData.pageIndex+1;
     
    this.movieService.getData(this.currentPage).subscribe({next:(movies)=>{
      this.moviesList = movies.results;
      console.log(movies);
      this.allPages = movies.total_pages;
      this.allMovies = movies.total_results;
   }});
  }
}



