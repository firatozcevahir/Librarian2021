import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Librarian2021-WebClient';
  public DEFAULT_LOCALE: any;

  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.initTranslate();
  }

  private initTranslate(): void {
    this.translateService.addLangs(['tr', 'en']);
    this.translateService.setDefaultLang('tr');

    const browserLang = this.translateService.getBrowserLang() || 'tr';

    const browserCultureLang = this.translateService.getBrowserCultureLang();
    let DEF_LOCALE: any = 'tr';

    if (browserLang) {
      this.translateService.setDefaultLang(browserLang);
      this.translateService.use(browserLang);
      this.DEFAULT_LOCALE = browserCultureLang || 'tr-TR';

      DEF_LOCALE = browserLang;
    } else {
      this.translateService.use(DEF_LOCALE);
    }
  }
}
