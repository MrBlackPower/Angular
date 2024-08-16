import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  imports: [ FormsModule, TaskComponent ],
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Input() userID! : string;
  @Output() close : EventEmitter<void> = new EventEmitter();
  private taskService : TaskService;
  task: Task = {
    id: '',
    userID: '',
    title: '',
    summary: '',
    dueDate: new Date()
  };

  constructor(taskService : TaskService){
    this.taskService = taskService;
  }

  onSubmit(){
    if(typeof this.task.dueDate != Date()){
      this.task.dueDate = new Date(this.task.dueDate);
    }
    this.task.userID = this.userID;
    this.task.id = Math.floor(Math.random() * 100).toString();
    
    this.taskService.addTask(this.task);
    this.close.emit();
  }

  onCancelTask(){
    this.close.emit();
  }
}
