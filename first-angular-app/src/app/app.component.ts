import { Component } from '@angular/core';

import { DUMMY_USERS } from './user/dummy-user';
import { User, UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent,TasksComponent,UserComponent,NgFor,NgIf]
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
