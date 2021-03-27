import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomEventService } from '@app/shared/services/custom-event.service';
import { DataService } from '@app/shared/services/data.service';

import { TranslatorService } from '@app/shared/services/translator.service';
import { SubSink } from '@app/shared/subsink';
import { finalize } from 'rxjs/operators';

import { IBookModel } from '@app/shared/models/book.model';
import { IAuthorModel } from '@app/shared/models/author.model';

import { IEditDialogModel } from '@app/shared/models/edit-dialog.model';

import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit, OnDestroy {

  public book!: IBookModel;
  public dataFRM!: FormGroup;

  public isRequesting = false;
  public authorList: IAuthorModel[] = [];

  private subs = new SubSink();
  private data: IEditDialogModel;

  constructor(
    public dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) data: IEditDialogModel,
    private dataService: DataService,
    private translatorService: TranslatorService,
    private customEventService: CustomEventService,
    private fb: FormBuilder,
  ) {
    this.data = data;
    console.log(this.data);
    this.loadData();
    this.createEmptyForm();

    if (this.data.editMode) {
      this.getRecordById();
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private loadData(): void {
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
          console.log(this.authorList);
        }, (error: HttpErrorResponse) => {
          // TODO: HANDLE ERRORS
        })
    );
  }

  private createEmptyForm(): any {
    this.dataFRM = this.fb.group({
      id: 0,
      title: [null, Validators.compose([Validators.required, Validators.maxLength(64)])],
      publishYear: [null, Validators.compose([Validators.required])],
      genre: [null, Validators.compose([Validators.required, Validators.maxLength(40)])],
      authorId: [null, [Validators.required]],
      startDate: null,
      endDate: null,
      isOccupied: false,
      personId: null
    });
  }

  private getRecordById(): void {
    this.isRequesting = true;
    this.subs.add(
      this.dataService.getAny(`/api/book/${this.data.itemId}`)
        .pipe(
          finalize(() => {
            this.isRequesting = false;
          })
        )
        .subscribe((response: IBookModel) => {
          this.book = response;
          this.dataFRM.patchValue(this.book);

        }, (error: HttpErrorResponse) => {
          // TODO: HANDLE ERRORS
        })
    );
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.dataFRM.controls[controlName].hasError(errorName);
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  public saveData(): void {
    console.log(this.dataFRM.value);
    const request =
    this.data.editMode
      ? this.dataService.put('/api/book', this.dataFRM.value)
      : this.dataService.post('/api/book', this.dataFRM.value);

      request
      .pipe(
        finalize(() => {
          this.isRequesting = false;
        })
      )
      .subscribe(response =>{
        if(response){
          this.customEventService.publish('book-updated');
          this.onClose();
        }
      });
  }
}
