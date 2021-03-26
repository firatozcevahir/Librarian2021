import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  public setLanguage(code: string): void {
    this.translateService.use(code);
  }


  public isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

}
