import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Una ricetta test',
      'test',
      'https://www.misya.info/wp-content/uploads/2015/06/Pancakes-alla-nutella3.jpg'
    ),
  ];
}
