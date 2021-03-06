import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomEventService {
  private subjects: Subject<any>[] = [];

  // tslint:disable-next-line: typedef
  publish(eventName: any) {
    this.subjects[eventName] = this.subjects[eventName] || new Subject<any>();
    this.subjects[eventName].next();
  }

  on(eventName: any): Observable<any> {
    this.subjects[eventName] = this.subjects[eventName] || new Subject<any>();
    return this.subjects[eventName].asObservable();
  }

}
