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
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
      'https://media-assets.lacucinaitaliana.it/photos/6346d938953caa47f945423d/master/pass/310958501_6187723337922695_6308212975480260815_n.jpeg',
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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
