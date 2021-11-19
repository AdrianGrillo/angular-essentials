import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  template: `
    <input type='text' (input)="onItemInput($event)">
    <button text='Add Item' (click)="onAddItem($event)">Add Item</button>
      <h1>{{item}}</h1>
  `,
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {
  items = []
  @Input() item
  @Output() itemChanged = new EventEmitter<string>()
  @Output() clickedAddItem = new EventEmitter<string>()

  onItemInput = event => {
    this.itemChanged.emit(event.target.value)
  }

  onAddItem = event => {
    this.clickedAddItem.emit(this.item)
  }
}
