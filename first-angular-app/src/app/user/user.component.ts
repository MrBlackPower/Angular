import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [ CardComponent ],
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: User;
  @Input() selected!:boolean;
  @Output() select = new EventEmitter<User>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar ;
  }

  get imageAlt(){
    return 'Das ist ein Photo von ' + this.user.name + '.';
  }

  onSelectUser() {
    this.select.emit(this.user);
  }
}

export type User = {
  id:string,
  name:string,
  avatar:string
}
