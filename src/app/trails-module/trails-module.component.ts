import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trails-module',
  template: `
    <trails-page></trails-page>
  `,
})
export class TrailsModuleComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `TrailsModule` component');
  }

}
