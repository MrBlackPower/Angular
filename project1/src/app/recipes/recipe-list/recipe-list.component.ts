import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService:RecipeService) {

  }

  ngOnInit() : void{
    this.recipes = this.recipeService.getRecipes();

    this.subscription = this.recipeService.recipesChanged.subscribe((recipes : Recipe[]) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
  }
}
