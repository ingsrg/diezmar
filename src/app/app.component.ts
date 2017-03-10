import { Component } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {NgModule, ViewContainerRef} from '@angular/core'
import { EditMovieComponent} from './pages/edit/edit-movie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Dream App';





  dialogRef: MdDialogRef<any>;

  constructor(
      public dialog: MdDialog,
      public viewContainerRef: ViewContainerRef) { }

  open() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(EditMovieComponent, config);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }
}
