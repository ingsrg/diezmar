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

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    EditMovieComponent,
    DeleteMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/list-movies', pathMatch: 'full' },   
      { path: 'list-movies',  component: ListMoviesComponent },         
      { path: 'edit', component: EditMovieComponent },
      { path: 'delete', component: DeleteMovieComponent }
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
