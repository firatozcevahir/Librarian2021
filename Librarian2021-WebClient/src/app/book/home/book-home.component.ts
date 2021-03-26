
import { Component, OnInit } from '@angular/core';
import { IBookModel } from '@app/shared/models/book.model';
import { DataService } from '@app/shared/services/data.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.scss']
})
export class BookHomeComponent implements OnInit {

  public isRequesting = false;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }


  public loadData(): void {
    this.isRequesting = true;
    this.dataService.getAny('/api/book')
    .pipe(
      finalize(() => {
        this.isRequesting = false;
      })
    )
    .subscribe((response: IBookModel[]) => {
      console.log(response);
    });
  }

}
