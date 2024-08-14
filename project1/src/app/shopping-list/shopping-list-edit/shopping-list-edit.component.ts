import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.sass']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') shoppingListForm : NgForm;
  subscription : Subscription;
  editMode : boolean = false;
  editIndex : number = null;
  editItem : Ingredient = null;
  
  constructor(private shoppingListService : ShoppingListService){
    
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((id : number) => {
      this.editMode = true;
      this.editIndex = id;
      this.editItem = this.shoppingListService.getIngredient(id);
      console.log(this.shoppingListForm);
      this.shoppingListForm.setValue({
        "name" : this.editItem.name,
        "amount" : this.editItem.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  onSubmit(form : NgForm){
    const value = form.value;
    if(!this.editMode){
      this.shoppingListService.addIngredient(new Ingredient(value.name,value.amount));
    } else {
      this.shoppingListService.updateIngredient(this.editIndex,new Ingredient(value.name,value.amount));
      
      this.editMode = false;
      this.editIndex = null;
      this.editItem = null;
    }
    this.shoppingListForm.reset();
  }

  onUnselect() : void {
    if(this.editMode){
      this.editMode = false;
      this.editIndex = null;
      this.editItem = null;
      this.shoppingListForm.reset();
    }
  }

  onClear() : void {
    this.shoppingListForm.reset();
  }

  onDelete() : void {
    if(this.editMode){
      this.shoppingListService.deleteIngredient(this.editIndex);
      this.editMode = false;
      this.editIndex = null;
      this.editItem = null;
      this.shoppingListForm.reset();
    }
  }
}
