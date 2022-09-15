import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesserviceService {

  constructor(private http:HttpClient) { }
  
  getData(page:number =1):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?
api_key=dc6d500d3a2fe12c724521a9ca5e67ea&language=en-US&page=${page}`);
  }
  
  getTvsData(page:number =1):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?
api_key=dc6d500d3a2fe12c724521a9ca5e67ea&language=en-US&page=${page}`);
  }
  getMovieData(movieId:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dc6d500d3a2fe12c724521a9ca5e67ea&language=en-US`)
  }
  getTvsDetail(tvId:number){
    return this.http.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=dc6d500d3a2fe12c724521a9ca5e67ea&language=en-US`)
  }
}
