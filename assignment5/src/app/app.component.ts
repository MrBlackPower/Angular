import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StatusService]
})

export class AppComponent implements OnInit {
  activeUsers : string[];
  inactiveUsers : string[];
  
  constructor (private statusService : StatusService){

  }

  ngOnInit() {
    this.activeUsers = this.statusService.activeUsers;
    this.inactiveUsers = this.statusService.inactiveUsers;
  }
}
