import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe("A Test Recipe",
        "Nur einen Test",
        "https://comidinhasdochef.com/wp-content/uploads/2016/06/Receita-de-Almoc%CC%A7o-em-12-minutos-00.png"),
        new Recipe("A Test Recipe",
        "Nur andere Test",
        "https://comidinhasdochef.com/wp-content/uploads/2016/06/Receita-de-Almoc%CC%A7o-em-12-minutos-00.png")
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}