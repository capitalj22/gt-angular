import {
    Component,
    OnInit,
} from '@angular/core';

import { TrailsService } from '../trails.service';

@Component({
    selector: 'trail-list',
    styleUrls: [ './trail-list.component.scss'],
    templateUrl: './trail-list.component.html'
})

export class TrailListComponent implements OnInit {
    trails: [Object];

    constructor(private trailsService: TrailsService) {
        
    }
    
    public ngOnInit() {
        this.trailsService.getTrailSummaries().subscribe(data => {
            this.trails = data;
        });

        this.trailsService.getTrails().subscribe(data => {
            console.log(data);
        })
    }
}
