import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-user',
  template: `
    <input type='text' (input)="onUserInput($event)">
    <p>Hello</p>
    <p>TEST</p>
    <h1>{{name}}</h1>
  `
})

export  class UserComponent {
  @Input() name
  @Output() nameChanged = new EventEmitter<string>()

  onUserInput = event => {
    this.nameChanged.emit(event.target.value)
  }
}
