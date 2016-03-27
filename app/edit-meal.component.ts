import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h4>Edit Food:</h4>
      <input [(ngModel)]="meal.name"/>
      <input [(ngModel)]="meal.details"/>
      <input [(ngModel)]="meal.calories"/>
    </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
