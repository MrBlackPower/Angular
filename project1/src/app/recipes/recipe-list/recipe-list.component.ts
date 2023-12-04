import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe",
    "Nur einen Test",
    "https://comidinhasdochef.com/wp-content/uploads/2016/06/Receita-de-Almoc%CC%A7o-em-12-minutos-00.png"),
    new Recipe("A Test Recipe",
    "Nur einen Test",
    "https://comidinhasdochef.com/wp-content/uploads/2016/06/Receita-de-Almoc%CC%A7o-em-12-minutos-00.png")
  ];

  constructor() {

  }

  ngOnInit(){

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
