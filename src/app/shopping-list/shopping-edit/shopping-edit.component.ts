import {
  Component,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('quantityInput', { static: false }) quantityInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingQuantity = this.quantityInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingQuantity);
    this.ingredientAdded.emit(newIngredient);
  }
}
