import { Component } from "@angular/core"

@Component({
  selector: 'app-dashboard',
  template: `
    {{loadState}}
    <Button (click)='load()'>
  `
})

export class DashboardComponent  {
  loadState = 'loading'
  load = () => this.loadState = 'finished'
}
