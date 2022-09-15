import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesserviceService } from './../moviesservice.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  constructor(private movieService:MoviesserviceService,private route:ActivatedRoute) { }
  movie!:any;

  ngOnInit(): void {
    let id=Number(this.route.snapshot.paramMap.get('id'))
    this.movieService.getMovieData(id).subscribe({next:(movie)=>{
      this.movie = movie;
      console.log(this.movie)
    }})
  }

}
