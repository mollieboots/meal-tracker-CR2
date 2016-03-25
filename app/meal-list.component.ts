import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { HealthyPipe } from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, EditMealComponent, NewMealComponent],
  template: `
    <div class="row">
      <div class="col-md-8">
        <select (change)="onChange($event.target.value)">
          <option value="all">Show All</option>
          <option value="healthy">Show Healthy</option>
          <option value="notHealthy" selected="selected">Show Not Healthy</option>
        </select>
        <meal-display *ngFor="#currentMeal of mealList"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal">
        </meal-display>
        <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
      </div>
      <div class="col-md-4">
        <new-meal onSubmitNewMeal="createMeal($event)"></new-meal>
      </div>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  createMeal(values) {
    var newMeal = new Meal(values[0], values[1], values[2]);
    this.mealList.push(newMeal);
    console.log(newMeal);
  }
  mealClicked(clickedMeal: Meal):void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
