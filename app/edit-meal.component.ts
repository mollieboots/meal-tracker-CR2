import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h4>Edit Food:</h4>
      <input [(ngModel)]="meal.name" class="input-lg col-sm-8"/>
      <input [(ngModel)]="meal.details" class="input-lg col-sm-8"/>
      <input [(ngModel)]="meal.calories" class="input-lg col-sm-8"/>
    </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
