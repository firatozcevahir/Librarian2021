import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomEventService } from '@app/shared/services/custom-event.service';
import { DataService } from '@app/shared/services/data.service';

import { TranslatorService } from '@app/shared/services/translator.service';
import { SubSink } from '@app/shared/subsink';
import { finalize } from 'rxjs/operators';

import { IAuthorModel } from '@app/shared/models/author.model';

import { IEditDialogModel } from '@app/shared/models/edit-dialog.model';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit, OnDestroy {

  public author!: IAuthorModel;
  public dataFRM!: FormGroup;

  public isRequesting = false;

  private subs = new SubSink();
  public data: IEditDialogModel;

  constructor(
    public dialogRef: MatDialogRef<EditAuthorComponent>,
    @Inject(MAT_DIALOG_DATA) data: IEditDialogModel,
    private dataService: DataService,
    private translatorService: TranslatorService,
    private customEventService: CustomEventService,
    private fb: FormBuilder,
  ) {
    this.data = data;
    console.log(this.data);
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

  private createEmptyForm(): any {
    this.dataFRM = this.fb.group({
      id: 0,
      name: [null, Validators.compose([Validators.required, Validators.maxLength(64)])],
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(64)])]
    });
  }

  private getRecordById(): void {
    this.isRequesting = true;
    this.subs.add(
      this.dataService.getAny(`/api/author/${this.data.itemId}`)
        .pipe(
          finalize(() => {
            this.isRequesting = false;
          })
        )
        .subscribe((response: IAuthorModel) => {
          this.author = response;
          this.dataFRM.patchValue(this.author);

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
      ? this.dataService.put('/api/author', this.dataFRM.value)
      : this.dataService.post('/api/author', this.dataFRM.value);

      request
      .pipe(
        finalize(() => {
          this.isRequesting = false;
        })
      )
      .subscribe(response =>{
        if(response){
          this.customEventService.publish('author-updated');
          this.onClose();
        }
      });
  }
}
