import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListMoviesComponent } from './pages/list/list-movies.component';
import { EditMovieComponent } from './pages/edit/edit-movie.component';
import { DeleteMovieComponent } from './pages/delete/delete-movie.component';
import { MovieService } from './services/movie.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './pages/add/add-movie.component';
import { MaterialModule } from '@angular/material';
import { Configuration } from './app.constants';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    EditMovieComponent,
    DeleteMovieComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/list-movies', pathMatch: 'full' },   
      { path: 'list-movies',  component: ListMoviesComponent },         
      { path: 'edit', component: EditMovieComponent },
      { path: 'delete', component: DeleteMovieComponent },
      { path: 'add', component: AddMovieComponent }
    ])
  ],
  providers: [MovieService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
