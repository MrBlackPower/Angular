import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [CardComponent,DatePipe]
})
export class TaskComponent {
  @Input() task! : Task | undefined;
  private taskService : TaskService;

  constructor(taskService : TaskService){
    this.taskService = taskService
  }

  onFinishTask() {
    if(this.task)
      this.taskService.removeTask(this.task.id);
  }
}

export type Task = {
  id: string,
  userID: string,
  title: string,
  summary: string,
  dueDate: Date
}
