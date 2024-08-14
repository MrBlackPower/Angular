import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientUpdate = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients : Ingredient[] = [
      new Ingredient("Käse",4),
      new Ingredient("Tomaten",4),
      new Ingredient("Fleisch",2)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(id : number) : Ingredient {
        return this.ingredients[id];
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientUpdate.next(this.ingredients);
    }

    addIngredients(ingredients : Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientUpdate.next(this.ingredients);
    }

    updateIngredient(index : number, ingredient : Ingredient) : void {
        this.ingredients[index] = ingredient;
        this.ingredientUpdate.next(this.ingredients);
    }

    deleteIngredient(index : number) : void {
        this.ingredients.splice(index,1);
        this.ingredientUpdate.next(this.ingredients);
    }
}