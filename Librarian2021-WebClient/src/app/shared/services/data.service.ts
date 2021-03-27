import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  catchError,
  map,
  publishReplay,
  refCount,
  retry,
  shareReplay
} from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { TranslatorService } from './translator.service';
import { BaseService } from '@app/shared/services/base.service';

@Injectable({ providedIn: 'root' })

export class DataService extends BaseService {

  public globalSearchTerms: BehaviorSubject<string> = new BehaviorSubject('');
  public broadcastSearchTerms = this.globalSearchTerms.asObservable();

  constructor(
    private http: HttpClient,
    private translateService: TranslateService,
    private translatorService: TranslatorService

  ) { super();}


  public getAny<T>(service: string): any {
    const url = `${environment.api}${service}`;
    return this.http.get<T>(url).pipe(
      shareReplay(),
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public getById<T>(service: string, Id: string): Observable<T> {
    const url = `${environment.api}${service}/${Id}`;
    return this.http.get<T>(url).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public post<T>(service: string, data?: any): Observable<T> {
    const url = `${environment.api}${service}`;
    return this.http.post<T>(url, data).pipe(
      catchError((error) => {
        return this.handleError(error);
      })
    );
  }

  public put<T>(service: string, data?: any, params?: any): Observable<T> {
    const url = `${environment.api}${service}`;
    return this.http.put<T>(url, data).pipe(retry(3));
  }

  public delete<T>(service: string): Observable<T> {
    const url = `${environment.api}${service}`;
    return this.http.delete<T>(url).pipe(retry(3));
  }
}
