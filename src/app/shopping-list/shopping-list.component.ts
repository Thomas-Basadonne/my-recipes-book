import { Component } from '@angular/core';
import { Ingridient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingridient[] = [
    new Ingridient('Mele', 10),
    new Ingridient('Pere', 3),
  ];
}
