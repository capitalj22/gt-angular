import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import * as _ from 'lodash';
import { activities as activityTypes } from '../activities';

@Component({
    selector: 'trail-activities',
    templateUrl: './trail-activities.component.html',
    styleUrls: ['./trail-activities.component.scss']
})

export class TrailActivitiesComponent implements OnInit {
    activityIcons: any;

    @Input() activities: [string];
    @Input() activityCallback: Function;

    ngOnInit() {
        this.activityIcons = _.map(this.activities, activity => {
            return activityTypes[activity] || null;
        });
    }
}