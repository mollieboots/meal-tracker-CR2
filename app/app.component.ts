import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="jumbotron">
    <div class="container">
      <h1>Meal Tracker</h1>
    </div>
  </div>
  <div clss="container">
    <meal-list [mealList]="meals"></meal-list>
  </div>
  `
})

export class AppComponent {
  public meal: Meal;
  constructor(){
    this.meals = [
      new Meal("Pizza", "homemade!", 600),
      new Meal("Beer", "burp", 400),
      new Meal("Gelato", "salted peanuts and caramel", 300)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
