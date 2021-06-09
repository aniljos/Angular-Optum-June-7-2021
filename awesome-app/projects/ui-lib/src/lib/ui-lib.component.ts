import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-lib',
  template: `
    <h3>Custom UI Library<h3>
    <p> This is a demo library</p>
  `,
  styles: [
  ]
})
export class UiLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
