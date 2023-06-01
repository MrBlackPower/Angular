import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {
  recipes: Recipe[] = [new Recipe("A Test Recipe","Nur einen Test","https://comidinhasdochef.com/wp-content/uploads/2016/06/Receita-de-Almoc%CC%A7o-em-12-minutos-00.png")];

  constructor() {}

  ngOnInit(){

  }
}
