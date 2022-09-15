import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TvsComponent } from './tvs/tvs.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PostsComponent } from './posts/posts.component';
import { PageEvent } from '@angular/material/paginator';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { TvsdetailsComponent } from './tvsdetails/tvsdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvsComponent,
    FooterComponent,
    NavbarComponent,
    SidemenuComponent,
    PostsComponent,
    ItemdetailsComponent,
    TvsdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
