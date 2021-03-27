import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from '@app/shared/services/data.service';
import { fromEvent, Subject } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
  takeUntil,
} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('searchBar', { static: true }) searchBar: any;

  public searchTerm: string = '';

  private _unsubscribeAll: Subject<any>;

  constructor(private dataService: DataService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.dataService.broadcastSearchTerms
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        this.searchTerm = data;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  ngAfterViewInit() {
    fromEvent(this.searchBar.nativeElement, 'keyup')
      .pipe(
        filter(Boolean), //value => this.searchBar.nativeElement.value.length > 2
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => {
          this.searchTerm = this.searchBar.nativeElement.value;
          this.applyFilter(this.searchBar.nativeElement.value);
        })
      )
      .subscribe();
  }

  public applyFilter(searchText: string): void {
    this.dataService.globalSearchTerms.next(searchText.trim().toLowerCase());
  }
}
