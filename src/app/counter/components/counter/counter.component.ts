import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(1)" class="btn btn-primary mx-1">+1</button>
  <button (click)="resetCounter()" class="btn btn-success mx-1">Reset</button>
  <button (click)="decrementBy(1)" class="btn btn-danger mx-1">-1</button>`
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter +=value
  }
  resetCounter():void{
    this.counter = 10
  }

  decrementBy(value:number):void{
    this.counter -=value
  }

}
