import { Component, Input } from '@angular/core';
import { User } from '../user/user.component';
import { Task, TaskComponent } from "./task/task.component";
import { AddTaskComponent } from './add-task/add-task.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ TaskComponent, AddTaskComponent, NgFor, NgIf ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  @Input() user! : User | undefined;

  ipsum : Task[] = [
    {
      id: "t1",
      userID: "u1",
      title: "XIU PIXAU",
      summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
      dueDate: new Date("2024-05-31")
    },{
      id: "t2",
      userID: "u2",
      title: "XIU PIXAU",
      summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
      dueDate: new Date("2024-05-31")
    },{
      id: "t3",
      userID: "u3",
      title: "XIU PIXAU",
      summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
      dueDate: new Date("2024-05-24")
    },{
      id: "t4",
      userID: "u4",
      title: "XIU PIXAU",
      summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
      dueDate: new Date("2024-02-31")
    },{
      id: "t5",
      userID: "u5",
      title: "XIU PIXAU",
      summary: "pinxiling binxqao hao, hatakakari, mussará tarafadorti!",
      dueDate: new Date("2024-05-01")
    }
  ];
  showAddTask: boolean = false;

  get selectedUser() : User {
    if(this.user){
      return this.user;
    }

    return {name:"",id:"",avatar:""};
  }

  get selectedUserTasks() : Task[] {
    return this.ipsum.filter((task) => {
      return task.userID === this.user?.id
    });
  }

  onFinishedTask(t : Task) {
    this.ipsum = this.ipsum.filter((task) => { return task.id != t.id});
  }

  onAddTask() {
    this.showAddTask = !this.showAddTask;
  }
  
  addTask(t : Task) {
    this.ipsum.unshift({
      id: Math.floor(Math.random() * 100).toString(),
      userID: this.selectedUser.id,
      title: t.title,
      summary: t.summary,
      dueDate: t.dueDate
    });
    console.log(this.ipsum);
    this.showAddTask = false;
  }
  
  cancelAddTask() {
    this.showAddTask = false;
  }
}
