import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectStatuses : string[] = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];
  projectForm : FormGroup;

  ngOnInit() : void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null,[Validators.required,this.forbiddenProjectName.bind(this)],[this.forbiddenAsyncProjectName]),
      email : new FormControl(null,[Validators.required,Validators.email]),
      projectStatus: new FormControl('Stable',[Validators.required])
    });
  }

  forbiddenProjectName(control : FormControl) : { [s:string] : boolean }{
    if(this.forbiddenProjectNames.indexOf(control.value) !== -1){
      return { projectNameIsForbidden : true };
    }
    return null;
  }

  forbiddenAsyncProjectName(control : FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(this.forbiddenProjectNames.indexOf(control.value) !== -1){
          resolve ( { projectNameIsForbidden : true } );
        }
        resolve( null );
      },1500);
    });
    return promise;
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }
}
