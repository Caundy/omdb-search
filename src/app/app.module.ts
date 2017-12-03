import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ResultsComponent } from './components/results/results.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieComponent } from './components/movie/movie.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeriesComponent } from './components/series/series.component';
import { EpisodeComponent } from './components/episode/episode.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    HeaderComponent,
    MovieComponent,
    NotFoundComponent,
    FooterComponent,
    SeriesComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
