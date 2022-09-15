import { Component, OnInit } from '@angular/core';
import { MoviesserviceService } from '../moviesservice.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {

  constructor(private movieService:MoviesserviceService){}

  title = 'first-app';
  tvsList:any[] = [];
  pageSize:number =20;
  allMovies!:number ;
  allPages!:number ;

  currentPage!:number;

  ngOnInit(): void {
    this.movieService.getTvsData(this.currentPage).subscribe({next:(tvs)=>{
      this.tvsList = tvs.results;
      this.allPages = tvs.total_pages;
      this.allMovies = tvs.total_results;
      console.log(this.tvsList)
   }});
  }

  toggleDetails(id:number){
    this.tvsList.filter(function(tv){
      if (tv.id === id) {
        tv.isVisible =! tv.isVisible ;
      }
    })
  }

  onPageChange(pageData:PageEvent){
    this.currentPage = pageData.pageIndex+1;
    
    this.movieService.getTvsData(this.currentPage).subscribe({next:(tvs)=>{
      this.tvsList = tvs.results;
      this.allPages = tvs.total_pages;
      this.allMovies = tvs.total_results;
   }});
  }

}
