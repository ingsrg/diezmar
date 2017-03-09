import {Component} from '@angular/core';

// Simple component
@Component({
    selector: 'delete-movie',
    templateUrl: './delete-movie.component.html'
})

export class DeleteMovieComponent {
    /*
    editBookForm: ControlGroup;
    titleInput: Control;
    authorInput: Control;
    publicationDateInput: Control;

    book: Book;

    canShowUpdateSuccessMsg: boolean;
    canShowUpdateFailedMsg: boolean;
    updateFailedMsg: string;

    constructor(@Inject(RouteParams) params, public bookService:BookService, public formBuilder: FormBuilder) {
        this.book = new Book();
        this.canShowUpdateFailedMsg = false;
        this.canShowUpdateSuccessMsg = false;
        this.updateFailedMsg = null;

        this.getBook(params.get('id'));

        this.editBookForm = <ControlGroup>formBuilder.group({
            'title': ['', Validators.required],
            'author': [''],
            'publicationDate': ['']
        });

        this.titleInput = this.editBookForm.controls.title;
        this.authorInput = this.editBookForm.controls.author;
        this.publicationDateInput = this.editBookForm.controls.publicationDate;
    }

    getBook(id:string) {
        this.bookService.getBook(id)
            .map(res => res.json())
            .subscribe(res => this.book = Book.fromJSON(res));
    }

    updateBook_successHandler(response) {
        if (response.status !== 200) {
            this.canShowUpdateFailedMsg = true;
            this.updateFailedMsg = 'Update has failed';
        }

        response.json().then(data => {
            this.canShowUpdateSuccessMsg = true;
            this.book = Book.fromJSON(data);
        });
    }

    updateBook_errorHandler(error) {
        this.updateFailedMsg = error;
    }

    updateBook() {
        this.canShowUpdateSuccessMsg = false;
        this.canShowUpdateFailedMsg = false;

        this.bookService.updateBook(this.book.isbn, this.book.toJSON())
            .then(response => this.updateBook_successHandler(response))
            .catch(error => this.updateBook_errorHandler(error));
    }
    */
}
