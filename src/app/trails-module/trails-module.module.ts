import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './trails-module.routes';
import { TrailsModuleComponent } from './trails-module.component';
import { TrailsPageComponent } from './trails-page';
import { TrailCardComponent } from './trail-card';
import { TrailListComponent } from './trail-list';
import { TrailActivitiesComponent } from './trail-activities';
import { TrailStatsComponent } from './trail-stats';
import { TrailFilterComponent } from './trail-filter';
import { TrailsService } from './trails.service';

/*
      Don't leave side-effects outside of classes so this will tree-shake nicely on prod
      e.g. `console.log('something')` is a side effect.
*/
@NgModule({
  declarations: [ 
    TrailActivitiesComponent,
    TrailStatsComponent,
    TrailsModuleComponent,
    TrailCardComponent,
    TrailListComponent ,
    TrailFilterComponent,
    TrailsPageComponent
  ],
  providers: [
    TrailsService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class TrailsModuleModule {
  public static routes = routes;
  constructor() {
    console.log('`TrailsModuleModule` module initialized');
  }
}
