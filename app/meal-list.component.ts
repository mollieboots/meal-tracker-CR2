import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { HealthyPipe } from './healthy.pipe';
import { MealDetailComponent } from './meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, EditMealComponent, NewMealComponent, MealDetailComponent],
  template: `
    <div class="row">
      <div class="col-md-9">
        <div class="col-sm-7">
          <select (change)="onChange($event.target.value)" class="filter">
            <option value="all" selected="selected">Show All</option>
            <option value="healthy">Show Healthy</option>
            <option value="notHealthy">Show Unhealthy</option>
          </select>

          <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
          (click)="mealClicked(currentMeal)"
          [class.selected]="currentMeal === selectedMeal"
          [meal]="currentMeal">
          </meal-display>
        </div>
        <div class="col-sm-5">
        <meal-details *ngIf="selectedMeal" [meal]="selectedMeal" [class.hidden]="!selectedMeal"></meal-details>

        <hr>
        <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
        </div>
      </div>

      <div class="col-md-3">
        <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
      </div>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(
      new Meal(newMeal.name, newMeal.details, newMeal.calories)
    );
    console.log(newMeal);
  }
  mealClicked(clickedMeal: Meal):void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
    console.log(this.filterHealthy);
  }
}
