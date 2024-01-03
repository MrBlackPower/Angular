import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private statusService : StatusService){

  }

  ngOnInit(): void {
    this.users = this.statusService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.statusService.onSetToInactive(id);
  }
}
