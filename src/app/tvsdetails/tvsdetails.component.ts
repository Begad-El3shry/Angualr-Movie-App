import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesserviceService } from './../moviesservice.service';

@Component({
  selector: 'app-tvsdetails',
  templateUrl: './tvsdetails.component.html',
  styleUrls: ['./tvsdetails.component.css']
})
export class TvsdetailsComponent implements OnInit {
  constructor(private movieService:MoviesserviceService,private route:ActivatedRoute) { }
  tv!:any;

  ngOnInit(): void {
    let id=Number(this.route.snapshot.paramMap.get('id'))
    this.movieService.getTvsDetail(id).subscribe({next:(tv)=>{
      this.tv = tv;
      console.log(this.tv)
    }})
  }

}
