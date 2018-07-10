import { Component, OnInit } from '@angular/core';
import { Item } from './item/item.component';
import { GarbageService } from './garbage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Array<Item> = [];

  constructor(private garbageService: GarbageService) {}

  ngOnInit() {
    this.regenerate();
  }

  regenerate() {
    this.items = [];
    for (let i = 0; i < 200; i++) {
      this.items.push({
        id: i,
        label: `Item number ${i}`
      });
    }
  }

  triggerMessage() {
    this.garbageService.triggerNewMessage();
  }
}
