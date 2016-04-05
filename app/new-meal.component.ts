import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
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
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    var newFood = new Meal(newName.value, newDetails.value, newCalories.valueAsNumber);
    this.onSubmitNewMeal.emit(newFood);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
