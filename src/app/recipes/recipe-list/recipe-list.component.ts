import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
