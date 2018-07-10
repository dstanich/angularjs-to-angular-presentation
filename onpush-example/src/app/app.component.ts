import { Component } from '@angular/core';
import { Item } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: Array<Item> = [];

  ngOnInit() {
    for (let i = 0; i < 200; i++) {
      this.items.push({
        id: i,
        label: `Item number ${i}`
      });
    }
  }
}
