import { Component, Input, OnInit } from '@angular/core';
import { GarbageService } from '../garbage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  private garbageSub: Subscription;

  constructor(private garbageService: GarbageService) {}

  ngOnInit() {
    this.garbageSub = this.garbageService.data$.subscribe(data => {
      console.log(`Garbage service received a message: ${data}`);
    });
  }

  ngOnDestroy() {
    /////////////////////////
    // Uncomment this line to fix unsubscribe issue
    // this.garbageSub.unsubscribe();
    /////////////////////////
  }
}

export interface Item {
  id: number;
  label: string;
}
