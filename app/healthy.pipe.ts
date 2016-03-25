import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "findHealthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  trasform(input: Meal[], args) {
    if(args[2] > 300) {
      return input;
    } else {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    }
  }
}
