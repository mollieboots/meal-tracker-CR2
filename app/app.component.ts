import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
    <div class="container">
      <h1>Skeleton Angular2 App!</h1>
    </div>
  </div>
  `
})

export class AppComponent {
  public meal: Meal;
  constructor(){

  }
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number) {

  }
}
