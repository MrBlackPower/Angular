import { Component, Input } from '@angular/core';
import { User } from '../user/user.component';
import { Task, TaskComponent } from "./task/task.component";
import { AddTaskComponent } from './add-task/add-task.component';
import { NgFor, NgIf } from '@angular/common';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ TaskComponent, AddTaskComponent, NgFor, NgIf ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  @Input() user! : User | undefined;
  showAddTask: boolean = false;
  private taskService : TaskService;
  
  constructor(taskService : TaskService) {
    this.taskService = taskService;
  }

  get selectedUser() : User {
    if(this.user){
      return this.user;
    }

    return {name:"",id:"",avatar:""};
  }

  get selectedUserTasks() : Task[] {
    if(!this.user)
      return [];

    return this.taskService.selectedUserTasks(this.user.id);
  }

  onAddTask() {
    this.showAddTask = !this.showAddTask;
  }
  
  closeAddTask() {
    this.showAddTask = false;
  }
}
