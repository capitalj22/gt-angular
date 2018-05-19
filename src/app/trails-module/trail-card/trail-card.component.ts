import {
    Component,
    ElementRef,
    OnInit,
    Input,
    ViewChild
  } from '@angular/core';

  import { DomSanitizer, SafeResourceUrl, SafeStyle } from '@angular/platform-browser';
  import { Observable } from "rxjs/Observable";
  import { TrailsService } from '../trails.service';

  @Component({
    selector: 'trail-card', 
    styleUrls: [ './trail-card.component.scss' ],
    templateUrl: './trail-card.component.html'
  })
  export class TrailCardComponent implements OnInit {
    image: SafeResourceUrl;
    cssUrl: SafeStyle;

    @Input() name: string;
    @Input() color: string;
    @Input() splash: string;
    @Input() id: number;
    @Input() activities: [string];
    @Input() stats: [string];
  
    constructor(private trailsService: TrailsService, private sanitizer: DomSanitizer) {}
  
    public ngOnInit() {
      this.trailsService.getTrailImage(this.id).subscribe(data => {
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(data));
        this.cssUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${window.URL.createObjectURL(data)})`);
      });
    }
  
    public submitState(value: string) {

    }
  }
  