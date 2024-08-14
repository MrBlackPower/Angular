import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipesChanged : Subject<Recipe[]> = new Subject<Recipe[]>();
    recipes: Recipe[] = [
        new Recipe("A Test Recipe",
        "Nur einen Test",
        "https://comidinhasdochef.com/wp-content/uploads/2016/06/Receita-de-Almoc%CC%A7o-em-12-minutos-00.png",
        [new Ingredient("Fleisch",2),
        new Ingredient("Pommes",2)]),
        new Recipe("A Test Recipe",
        "Nur andere Test",
        "https://comidinhasdochef.com/wp-content/uploads/2016/06/Receita-de-Almoc%CC%A7o-em-12-minutos-00.png",
        [new Ingredient("Fleisch",2),
        new Ingredient("Brot",2)])
    ];

    constructor(private shoppingListService : ShoppingListService){

    }

    addIngredientToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id : number){
        return this.recipes.slice()[id];
    }

    addRecipe(recipe : Recipe) : void {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(id : number, recipe : Recipe) : void {
        this.recipes[id] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(id : number) : void {
        this.recipes.splice(id,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}