import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="jumbotron">
    <div class="container">
      <h1>Meal Tracker</h1>
    </div>
  </div>
  <div class="col-md-2"></div>
  <div class="col-md-8">
    <meal-list [mealList]="meals"></meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Pizza", "homemade!", 600),
      new Meal("Beer", "burp", 400),
      new Meal("Breakfast Burrito", "eggs and cheese and beans, oh my!", 600),
      new Meal("Dark Chocolate", "with alomnds", 200),
      new Meal("Coffee", "with cream, no sugar", 293),
      new Meal("Grilled Cheese", "god's food", 550),
      new Meal("Gelato", "salted peanuts and caramel", 250)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
