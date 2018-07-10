import { Component, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  hoverEnter() {
    this.elementRef.nativeElement.setAttribute('style', 'background: pink');
  }

  @HostListener('mouseleave')
  hoverLeave() {
    this.elementRef.nativeElement.setAttribute('style', '');
  }
}

export interface Item {
  id: number;
  label: string;
}
