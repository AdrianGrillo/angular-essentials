import { Component} from "@angular/core";

@Component({
  selector: 'app-user',
  template: `
    <input type='text' [(ngModel)]='name'>
    <p>Hello</p>
    <p>TEST</p>
    <h1>{{name}}</h1>
  `
})

export  class UserComponent {
  name = 'Adrian'
}