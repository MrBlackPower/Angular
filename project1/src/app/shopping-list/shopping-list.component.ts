import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent {
  ingredients : Ingredient[] = [
    new Ingredient("Käse",4),
    new Ingredient("Tomaten",4),
    new Ingredient("Fleisch",2)
  ];
  
  constructor(){

  }

  ngOnInit(){

  }

  onIngredientAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }
}
