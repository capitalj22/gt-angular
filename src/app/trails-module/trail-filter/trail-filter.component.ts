import {
    Component,
    OnInit
} from '@angular/core';

import { activities as allActivities } from '../activities';
import * as _ from 'lodash';

import { TrailsService } from '../trails.service';

@Component({
    selector: 'trail-filter',
    styleUrls: ['./trail-filter.component.scss'],
    templateUrl: './trail-filter.component.html'
})

export class TrailFilterComponent implements OnInit {
    trails: [Object];
    tags: Object;

    activities = _.map(allActivities, activity => {
        return activity;
    });

    constructor(private trailsService: TrailsService) {

    }

    ngOnInit() {
        this.getTags();
    }

    getTags() {
        this.trailsService.getTags().subscribe(data => {
            this.tags = data;
        });
    }

    getFilteredTrails() {
        const activities = [];
    
        // this.trailsService.getFilteredTrailSummaries(activities).subscribe(data => {
        //    this.trails = data; 
        // });
    }

    test() {
        console.log('test');
    }
}