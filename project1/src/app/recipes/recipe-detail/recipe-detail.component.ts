import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id : number;
  router : Router;

  constructor(private recipeService : RecipeService,
              private route: ActivatedRoute){
    
  }

  ngOnInit(){
    const id = this.route.params.subscribe( (params : Params) =>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'] , {relativeTo : this.route});
  }

  onEditRecipe(){
    this.router.navigate(['edit'] , {relativeTo : this.route});
  }
}
