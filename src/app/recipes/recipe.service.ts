import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hamburger',
      'Un hamburger così non lo hai mangiato!',
      'https://www.misya.info/wp-content/uploads/2015/06/Pancakes-alla-nutella3.jpg',
      [
        new Ingredient('Pane', 1),
        new Ingredient('Pomodoro', 2),
        new Ingredient('Cipolla', 2),
        new Ingredient('Carne', 1),
      ]
    ),
    new Recipe(
      'Carbonara',
      'BLABLABLABLA',
      'https://www.misya.info/wp-content/uploads/2015/06/Pancakes-alla-nutella3.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Uova', 2),
        new Ingredient('Guanciale', 1),
        new Ingredient('Pecorino', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
