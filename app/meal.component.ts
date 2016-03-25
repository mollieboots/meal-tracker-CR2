import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  outputs: ['onMealSelect'],
  template: `
    <div (click)="mealClicked(meal)">
      <h4>{{ meal.name }}</h4>
      <h5>{{ meal.details }}</h5>
      <p>{{ meal.calories }}</p>
    </div>
  `
})

export class MealComponent {
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(meal: Meal) {
    this.onMealSelect.emit(meal);
  }
}
