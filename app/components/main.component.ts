import {Component} from '@angular/core'
import {MainService} from "../services/main.service";

@Component({
    moduleId: module.id,
    selector: 'main',
    templateUrl: '../templates/main.html',
    providers: [MainService]
})
export class MainComponent {
    title: string;

    constructor(mainServiceService: MainService) {
        this.title = mainServiceService.getTitle();
    }
}