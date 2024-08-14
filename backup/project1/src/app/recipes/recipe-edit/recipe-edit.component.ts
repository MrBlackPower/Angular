import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent {
  id : number;
  editMode : boolean = false;
  recipeForm : FormGroup;

  constructor(private recipeService: RecipeService, private router : Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe( (params : Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm(){
    let recipe : Recipe = (this.editMode) ? this.recipeService.getRecipe(this.id) : null;
    let recipeIngredients = new FormArray([]);

    if(!recipe){
      //Creates FormGroup
      this.recipeForm = new FormGroup({
        'name': new FormControl(null,[Validators.required]),
        'imagePath':new FormControl(null,[Validators.required]),
        'description':new FormControl(null,[Validators.required]),
        'ingredients' : recipeIngredients
      });
    } else {
      //Adds ingredients controls
      if(recipe['ingredients']){
        for(let i of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(i.name,[Validators.required]),
              'amount': new FormControl(i.amount,[Validators.required,Validators.min(1)])
            })
          );
        }
      }

      //Creates FormGroup
      this.recipeForm = new FormGroup({
        'name': new FormControl(recipe.name,[Validators.required]),
        'imagePath':new FormControl(recipe.imagePath,[Validators.required]),
        'description':new FormControl(recipe.description,[Validators.required]),
        'ingredients' : recipeIngredients
      });
    }
  }

  onSubmit() : void {
    let recipe : Recipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }
    this.router.navigate(['../'] , {relativeTo : this.route});
  }

  onCancel(){
    this.router.navigate(['../'] , {relativeTo : this.route});
  }

  onAddIngredient() : void {
    let control : FormGroup = new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'amount': new FormControl(null,[Validators.required,Validators.min(1)])
    });
    let array : FormArray = (<FormArray>this.recipeForm.get('ingredients'));
    array.push(control);
  }

  onDeleteIngredient(id : number) : void {
    let array : FormArray = (<FormArray>this.recipeForm.get('ingredients'));
    array.removeAt(id);
  }
  
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
