import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['newMeal'],
  template: `
    <div class="meal-form">
      <input placeholder="Name: ex Pizza, Brussel Sprouts, etc" type="text" #newName required>
      <input placeholder="Details about Food" type="text" #newDetails required>
      <input placeholder="Calories" type="number" required #newCalories>
      <button type="button" class="btn btn-success" (click)="addMeal(newName, newDetails, newCalories)">Log Food</button>
    </div>
  `
})

export class NewMealComponent {
  public newMeal: EventEmitter<Object[]>;
  constructor() {
    this.newMeal = new EventEmitter();
  }
  addMeal(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement) {
    this.newMeal.emit([name.value, details.value, calories.value]);
    name.value = "";
    details.value = "";
    calories.value = "";
  }
}
