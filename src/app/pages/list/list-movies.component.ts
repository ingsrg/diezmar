// Angular 2
import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'list-movies',
    templateUrl: './list-movies.component.html'
})

export class ListMoviesComponent {
    movies: Movie[];

    constructor(private movieService: MovieService) {
        this.getMovies();
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
