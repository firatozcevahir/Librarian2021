import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseService } from '@app/shared/services/base.service';


@Injectable({
  providedIn: 'root'
})

export class TranslatorService extends BaseService {

  constructor(
    private transService: TranslateService
  ) { super(); }

  public getTranslated(terms: string): any {
    let translateResults: any;
    this.transService.get(terms).subscribe((results: string) => {
      translateResults = results;
    });
    return translateResults;
  }

}
