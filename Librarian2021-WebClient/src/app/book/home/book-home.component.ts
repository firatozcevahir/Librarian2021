import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { IBookModel } from '@app/shared/models/book.model';

import { DataService } from '@app/shared/services/data.service';
import { finalize } from 'rxjs/operators';
import { SubSink } from '@app/shared/subsink';
import { CustomEventService } from '@app/shared/services/custom-event.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditBookComponent } from '@app/book/edit/edit-book.component';

@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.scss']
})
export class BookHomeComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public dataSource!: MatTableDataSource<IBookModel>;

  public isRequesting = false;
  public displayedColumns: string[] = ['title', 'author', 'occupied', 'person', 'recordState', 'updatedAt', 'id'];

  private subs = new SubSink();

  public bookList: IBookModel[] = [];

  constructor(
    private dataService: DataService,
    private customEventService: CustomEventService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadData();

    this.subs.add(
      this.customEventService
        .on('book-updated')
        .subscribe(() => this.loadData())
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public loadData(): void {
    this.isRequesting = true;
    this.subs.add(
      this.dataService.getAny('/api/book')
        .pipe(
          finalize(() => {
            this.isRequesting = false;
          })
        )
        .subscribe((response: IBookModel[]) => {
          this.bookList = response;
          this.dataSource = new MatTableDataSource<IBookModel>(this.bookList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.bookList);
        }, (error: HttpErrorResponse) => {
          // TODO: HANDLE ERRORS
        })
    );
  }


  public editBook(id?: string, edit = false): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      itemId: id,
      editMode: edit
    }
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog
      .open(EditBookComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
      });
  }

  public editPerson(id: string): void {

  }

}
