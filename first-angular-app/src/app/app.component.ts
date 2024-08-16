import { Component } from '@angular/core';

import { DUMMY_USERS } from './user/dummy-user';
import { User } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selected : User | undefined;
  dum = DUMMY_USERS;
  title = 'first-angular-app';

  onSelectUser(user: User){
    this.selected = user;
    console.log(user.id);
  }
}
