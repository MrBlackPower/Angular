import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: User;

  get imagePath(){
    return 'assets/users/' + this.user.avatar ;
  }

  get imageAlt(){
    return 'Das ist ein Photo von ' + this.user.name + '.';
  }

  onSelectUser() {
    //console.log("CLICK!");
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.user = DUMMY_USERS[randomIndex];
  }
}

type User = {
  id:string,
  name:string,
  avatar:string
}
