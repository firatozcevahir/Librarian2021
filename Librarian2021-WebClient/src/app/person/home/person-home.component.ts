import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { IPersonModel } from '@app/shared/models/person.model';

import { DataService } from '@app/shared/services/data.service';
import { finalize } from 'rxjs/operators';
import { SubSink } from '@app/shared/subsink';
import { CustomEventService } from '@app/shared/services/custom-event.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditPersonComponent } from '@app/person/edit/edit-person.component';
import { IBookModel } from '@app/shared/models/book.model';

@Component({
  selector: 'app-person-home',
  templateUrl: './person-home.component.html',
  styleUrls: ['./person-home.component.scss']
})
export class PersonHomeComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public dataSource = new MatTableDataSource<IPersonModel>();

  public isRequesting = false;
  public displayedColumns: string[] = ['name', 'phoneNumber', 'address', 'books', 'recordState', 'updatedAt', 'id'];

  private subs = new SubSink();

  public personList: IPersonModel[] = [];
  public searchTerm = '';

  constructor(
    private dataService: DataService,
    private customEventService: CustomEventService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadData();

    this.subs.add(
      this.customEventService
        .on('person-updated')
        .subscribe(() => this.loadData()),

      this.dataService.broadcastSearchTerms.subscribe(data => {
        this.searchTerm = data;
        this.applyFilter();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public loadData(): void {
    this.isRequesting = true;
    this.subs.add(
      this.dataService.getAny('/api/person')
        .pipe(
          finalize(() => {
            this.isRequesting = false;
          })
        )
        .subscribe((response: IPersonModel[]) => {
          this.personList = response;
          this.dataSource.data = this.personList;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.personList);
        }, (error: HttpErrorResponse) => {
          // TODO: HANDLE ERRORS
        })
    );
  }


  public editPerson(id?: string, edit = false): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      itemId: id,
      editMode: edit
    }
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog
      .open(EditPersonComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
      });
  }

  public getBookNames(books: IBookModel[]): string {
    if(!books){
      return '';
    }
    return books.map((i) => i.title).join(', ');
  }

  public applyFilter(): void {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }
}
