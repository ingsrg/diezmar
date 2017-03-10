// Angular 2
import { Component, ViewContainerRef } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { OnInit } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { EditMovieComponent } from '../edit/edit-movie.component';
import { AddMovieComponent } from '../add/add-movie.component';

const dialogsMap = {'add': AddMovieComponent, 'edit': EditMovieComponent}

@Component({
    selector: 'list-movies',
    templateUrl: './list-movies.component.html'
})

export class ListMoviesComponent {
    movies: Movie[];
    dialogRef: MdDialogRef<any>;

    constructor(
        private movieService: MovieService,
        public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef) {
        this.getMovies();
    }

    open(key) {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(dialogsMap[key], config);

        this.dialogRef.afterClosed().subscribe(result => {
        this.dialogRef = null;
        });
    }

    ngOnInit(): void {
        this.getMovies();
    }

    getMovies(): void {
        this.movieService.getMovies().then(movies => this.movies = movies);
        
        /*
        this.bookService.getBooks()
            .map(res => res.json())
            .subscribe(res => this.books = res);*/
    }
/*
    viewBook(book) {
        this.router.parent.navigate('/view/' + book.isbn);
    }

    editBook(book) {
        this.router.parent.navigate('/edit/' + book.isbn);
    }

    deleteBook(book) {
        this.bookService.deleteBook(book.isbn)
            .subscribe(res => this.getBooks());
    }
    */
}
