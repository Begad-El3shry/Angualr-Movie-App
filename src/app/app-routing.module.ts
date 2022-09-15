import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { MoviesComponent } from './movies/movies.component';
import { PostsComponent } from './posts/posts.component';
import { TvsComponent } from './tvs/tvs.component';
import { TvsdetailsComponent } from './tvsdetails/tvsdetails.component';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'tvs',component:TvsComponent},
  {path:'posts',component:PostsComponent},
  {path:'movies/:id',component:ItemdetailsComponent},
  {path:'tvs/:id',component:TvsdetailsComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
