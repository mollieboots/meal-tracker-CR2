import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
    <div class="mealDetails">
      <h4>{{ meal.name }} Details:</h4>
      <h5>{{ meal.details }}</h5>
      <h5>{{ meal.calories }}</h5>
    </div>
  `
})

export class MealDetailComponent {
  public meal: Meal;
}
