import { Component } from '@angular/core';

import { DUMMY_USERS } from './user/dummy-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dum = DUMMY_USERS;
  title = 'first-angular-app';
}
