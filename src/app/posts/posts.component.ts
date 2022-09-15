import { Component, OnInit } from '@angular/core';
import { PostsserviceService } from '../postsservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postsService:PostsserviceService) { }

  postsList:any[]=[];

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({next:(posts)=>{
      this.postsList = posts;
      console.log(posts)
      console.log(this.postsList)
   }});
  }

}
