import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trails-module',
  template: `
    Trails:
  
    <trail-list></trail-list>
  `,
})
export class TrailsModuleComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `TrailsModule` component');
  }

}
