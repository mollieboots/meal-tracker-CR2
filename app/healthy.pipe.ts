import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "findHealthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  trasform(input: Meal[], args) {
    var desiredState = args[2]
    if(desiredState === "all") {
      return input;
    } else if (desiredState === "healthy") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if (desiredState === "notHealthy") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
