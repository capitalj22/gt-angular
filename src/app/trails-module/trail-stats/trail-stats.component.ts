import {
    Component,
    Input,
    OnInit
} from '@angular/core';


@Component({
    selector: 'trail-stats',
    templateUrl: './trail-stats.component.html',
    styleUrls: ['./trail-stats.component.scss']
})

export class TrailStatsComponent implements OnInit {
    @Input() stats: any;
    @Input() showAll: boolean;

    ngOnInit() {

    }
}