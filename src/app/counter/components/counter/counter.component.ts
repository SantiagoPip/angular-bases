
import { Component } from '@angular/core';
@Component({
  selector:'app-center',
  template:`<h3>Counter :{{counter}}</h3>
  <button (click)="increaseBy(2)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decrementBy(2)">-1</button>`
})
export class CounterComponent {
  public counter:number = 3;

  increaseBy(value:number):void{
    this.counter += value;
  }
  decrementBy(value:number):void{
    this.counter -= value;
  }
  reset():void{
    this.counter = 10;
  }
}
