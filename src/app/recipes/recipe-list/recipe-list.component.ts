import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html"
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a test",
      "https://food-images.files.bbci.co.uk/food/recipes/how_to_cook_chicken_67752_16x9.jpg"
    ),
    new Recipe(
      "Another Test Recipe",
      "This is another test",
      "https://food-images.files.bbci.co.uk/food/recipes/how_to_cook_chicken_67752_16x9.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
