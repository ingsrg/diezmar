import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Movie } from "../models/movie";
import { Configuration } from "../app.constants";

@Injectable()
export class MovieService {
    constructor(private _http: Http, private _configuration: Configuration) {
    }

    public getAll(): Observable<Movie[]> {
        return this._http.get(this._configuration.ServerWithApiUrl)
            .map(data => data.json());
    }
}


/*
import {Injectable} from '@angular/core';
import { Movie } from '../models/movie';
import { MOVIES } from '../models//mock-movies';

@Injectable()
export class MovieService {
    getMovies(): Promise<Movie[]> {
        return Promise.resolve(MOVIES);
    }
*/

    /*
    http: Http;
    baseURL: string;
    baseRequestOptions: BaseRequestOptions;

    constructor(@Inject(Http) http, @Inject(BaseRequestOptions) baseRequestOptions) {
        this.http = http;
        this.baseURL = '/api/books';
        this.baseRequestOptions = baseRequestOptions;
    }
    */
/*
    _callAPI(url:string, method:string, data:any) {
        return window.fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    getBooks() {
        return this.http.get(this.baseURL);
    }

    getBook(id:string) {
        return this.http.get(this.baseURL + '/' + id);
    }

    updateBook(id:string, data:any) {
        return this._callAPI(this.baseURL + '/' + id, 'PUT', data);
    }

    createBook(data:any) {
        return this._callAPI(this.baseURL, 'POST', data);
    }

    deleteBook(id:string) {
        return this.http.delete(this.baseURL + '/' + id);
    }
    */


    /*
}
*/
