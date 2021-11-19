import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials'
  rootName = 'Adrian'

  rootItem = 'Input an item'
  rootItems = ['Apples', 'Bananas', 'Cherries']

  onNameChanged(newName: string) {
    this.rootName = newName
  }

  onItemChanged(newItem: string) {
    this.rootItem = newItem
  }

  onItemWasAdded(newItem: string) {
    this.rootItems.push(newItem)
    console.log(this.rootItems)
  }
}
