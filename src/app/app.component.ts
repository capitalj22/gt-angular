/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <main>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  public name = 'Angular Starter';
  public tipe = 'assets/img/tipe.png';
  public twitter = 'https://twitter.com/gdi2290';
  public url = 'https://tipe.io';
  public showDevModule: boolean = environment.showDevModule;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

// <nav>
//       <a [routerLink]=" ['./'] "
//         routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
//         Index
//       </a>
//       <a [routerLink]=" ['./home'] "
//         routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
//         Home
//       </a>
//       <a *ngIf="showDevModule" [routerLink]=" ['./trails-module'] "
//          routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
//         Trails
//       </a>
//     </nav>

//     <main>
//       <router-outlet></router-outlet>
//     </main>
/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
