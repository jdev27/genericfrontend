import {Component} from '@angular/core';
import {FooterService} from '../services/footer.service';
import '../models/footer.model';

@Component({
    moduleId: module.id,
    selector: 'footerSection',
    templateUrl: '../templates/footer.html',
    styleUrls:['../css/footer.css'],
    providers: [FooterService]
})

export class FooterComponent {
    footers: Footer[];

    constructor(footerService: FooterService) {
        this.footers = footerService.getFooters();
    }
}