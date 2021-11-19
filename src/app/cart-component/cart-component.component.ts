import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  template: `
    <input type='text' (input)="onItemInput($event)" [(ngModel)]="newItem">
    <button text='Add Item' (click)="onAddItem($event)">Add Item</button>
  `,
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {
  @Input() items = []
  newItem = ''
  @Output() itemChanged = new EventEmitter<string>()
  @Output() itemAdded = new EventEmitter<string>()

  onItemInput = event => {
    this.itemChanged.emit(event.target.value)
  }

  onAddItem = event => {
    this.itemAdded.emit(this.newItem)
  }
}
