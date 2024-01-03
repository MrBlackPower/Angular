import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Apfel",5),
    new Ingredient("Tomaten",10)
  ];
}
