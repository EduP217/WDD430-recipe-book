import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private Ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]

  constructor() { }

  getIngredients() {
    return this.Ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.Ingredients.push(ingredient);
    this.ingredientsChanged.next(this.Ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    /*for (let ingredient of ingredients){
      this.addIngredient(ingredient);
    }*/
    this.Ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.Ingredients.slice());
  }
}
