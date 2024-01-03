import { Component } from '@angular/core';
import { HeaderPage } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  headerPage:HeaderPage = HeaderPage.RECIPES;

  updateCurrentHeaderPage(page : HeaderPage) {
    this.headerPage = page;
  }
  
  title = 'project1';
}
