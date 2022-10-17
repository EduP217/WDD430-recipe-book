import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.Ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe(
        (Ingredients: Ingredient[]) => {
          this.Ingredients = Ingredients;
        }
      )
  }

}
