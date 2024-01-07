import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientUpdate = new EventEmitter<Ingredient[]>();
    ingredients : Ingredient[] = [
      new Ingredient("Käse",4),
      new Ingredient("Tomaten",4),
      new Ingredient("Fleisch",2)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientUpdate.emit(this.ingredients);
    }

    addIngredients(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientUpdate.emit(this.ingredients);
    }
}