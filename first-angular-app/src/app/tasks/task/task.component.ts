import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [ ]
})
export class TaskComponent {
  @Input() task! : Task | undefined;
  @Output() finished : EventEmitter<Task> = new EventEmitter<Task>()

  onFinishTask() {
    this.finished.emit(this.task);
  }
}

export type Task = {
  id: string,
  userID: string,
  title: string,
  summary: string,
  dueDate: Date
}
