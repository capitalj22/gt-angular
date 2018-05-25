import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'texture-overlay',
    templateUrl: './texture-overlay.component.html',
    styleUrls: ['./texture-overlay.component.scss']
})

export class TextureOverlayComponent implements OnInit {
    textureUrl: string;

    @Input() texture: string;
    @Input() opacity: number;

    constructor(private sanitizer: DomSanitizer) {
    }
    
    ngOnInit() {
        this.textureUrl = `assets/img/${this.texture}.png`;
    }
}