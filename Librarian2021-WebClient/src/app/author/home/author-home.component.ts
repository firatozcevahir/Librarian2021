import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { IAuthorModel } from '@app/shared/models/author.model';

import { DataService } from '@app/shared/services/data.service';
import { finalize } from 'rxjs/operators';
import { SubSink } from '@app/shared/subsink';
import { CustomEventService } from '@app/shared/services/custom-event.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditAuthorComponent } from '@app/author/edit/edit-author.component';

@Component({
  selector: 'app-author-home',
  templateUrl: './author-home.component.html',
  styleUrls: ['./author-home.component.scss']
})
export class AuthorHomeComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public dataSource!: MatTableDataSource<IAuthorModel>;

  public isRequesting = false;
  public displayedColumns: string[] = ['name', 'books', 'recordState', 'updatedAt', 'id'];

  private subs = new SubSink();

  public authorList: IAuthorModel[] = [];

  constructor(
    private dataService: DataService,
    private customEventService: CustomEventService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadData();

    this.subs.add(
      this.customEventService
        .on('author-updated')
        .subscribe(() => this.loadData())
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public loadData(): void {
    this.isRequesting = true;
    this.subs.add(
      this.dataService.getAny('/api/author')
        .pipe(
          finalize(() => {
            this.isRequesting = false;
          })
        )
        .subscribe((response: IAuthorModel[]) => {
          this.authorList = response;
          this.dataSource = new MatTableDataSource<IAuthorModel>(this.authorList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.authorList);
        }, (error: HttpErrorResponse) => {
          // TODO: HANDLE ERRORS
        })
    );
  }


  public editAuthor(id?: string, edit = false): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      itemId: id,
      editMode: edit
    }
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog
      .open(EditAuthorComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
      });
  }
}
