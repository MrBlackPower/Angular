import { Component, EventEmitter, Output } from '@angular/core';
import { Task, TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  imports: [ FormsModule, TaskComponent ],
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  task: Task = {
    id: '',
    userID: '',
    title: '',
    summary: '',
    dueDate: new Date()
  };
  @Output() add : EventEmitter<Task> = new EventEmitter<Task>();
  @Output() cancel : EventEmitter<void> = new EventEmitter();

  onSubmit(){
    if(typeof this.task.dueDate != Date()){
      this.task.dueDate = new Date(this.task.dueDate);
    }
    this.add.emit(this.task);
  }

  onCancelTask(){
    this.cancel.emit();
  }
}
