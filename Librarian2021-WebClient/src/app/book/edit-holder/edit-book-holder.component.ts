import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomEventService } from '@app/shared/services/custom-event.service';
import { DataService } from '@app/shared/services/data.service';

import { TranslatorService } from '@app/shared/services/translator.service';
import { SubSink } from '@app/shared/subsink';
import { finalize } from 'rxjs/operators';

import { IBookModel } from '@app/shared/models/book.model';
import { IPersonModel } from '@app/shared/models/person.model';

import { IEditDialogModel } from '@app/shared/models/edit-dialog.model';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-book-holder',
  templateUrl: './edit-book-holder.component.html',
  styleUrls: ['./edit-book-holder.component.scss']
})
export class EditBookHolderComponent implements OnInit, OnDestroy {

  public book!: IBookModel;
  public dataFRM!: FormGroup;

  public isRequesting = false;
  public personList: IPersonModel[] = [];

  private subs = new SubSink();
  private data: IEditDialogModel;

  public minDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<EditBookHolderComponent>,
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
    this.getRecordById();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private loadData(): void {
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
          console.log(this.personList);
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
          this.handleHolderChange(this.book.personId);
          console.log(this.dataFRM.value);
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
    const end = this.adjustDateForTimeOffset(this.dataFRM.controls.endDate.value);
    const start = this.adjustDateForTimeOffset(this.dataFRM.controls.startDate.value);

    this.dataFRM.controls.endDate.setValue(end);
    this.dataFRM.controls.startDate.setValue(start);
    console.log(this.dataFRM.value);

    this.dataService.put('/api/book', this.dataFRM.value)
      .pipe(
        finalize(() => {
          this.isRequesting = false;
        })
      )
      .subscribe(response => {
        if (response) {
          this.customEventService.publish('book-updated');
          this.onClose();
        }
      });
  }


  public handleHolderChange(id: number | null | undefined): void {
    console.log(id);
    if (!id) {
      this.dataFRM.controls.startDate.disable();
      this.dataFRM.controls.endDate.disable();
      this.dataFRM.controls.startDate.setValue(null);
      this.dataFRM.controls.endDate.setValue(null);
      return;
    }
    this.dataFRM.controls.endDate.enable();
    this.dataFRM.controls.startDate.enable();
  }


  public adjustDateForTimeOffset(dateToAdjust: Date): Date | null {
    if(!dateToAdjust) {
      return null;
    }
    var offsetMs = dateToAdjust.getTimezoneOffset() * 60000;
    return new Date(dateToAdjust.getTime() - offsetMs);
  }
}
