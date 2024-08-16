import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [CardComponent,DatePipe]
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
