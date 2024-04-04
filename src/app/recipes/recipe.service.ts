import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Una ricetta test',
      'test',
      'https://www.misya.info/wp-content/uploads/2015/06/Pancakes-alla-nutella3.jpg'
    ),
    new Recipe(
      'Un test diverso',
      'BLABLABLABLA',
      'https://www.misya.info/wp-content/uploads/2015/06/Pancakes-alla-nutella3.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
