import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Item } from '../item/item.component';

@Component({
  selector: 'app-calculated-value',
  templateUrl: './calculated-value.component.html',
  styleUrls: ['./calculated-value.component.css']
  //////////////////////
  // Uncomment the line below to fix performance problem
  // changeDetection: ChangeDetectionStrategy.OnPush
  //////////////////////
})
export class CalculatedValueComponent {
  @Input() items: Array<Item>;

  constructor() {}

  getCalculatedValue(): string {
    // Simulate a function call that takes a while
    this.slowRunningFunction();
    return 'Placeholder for some kind of calculated value.';
  }

  private slowRunningFunction() {
    // Simulate something expensive by calling local storage a bunch
    // localStorage is NOT async so it will block
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      localStorage.setItem('test', `${sum++}`);
    }
  }
}
