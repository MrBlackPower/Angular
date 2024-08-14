import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private statusService: StatusService){

  }

  ngOnInit(): void {
    this.users = this.statusService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.statusService.onSetToActive(id);
  }
}
