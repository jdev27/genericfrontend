import {Component} from '@angular/core';
import {AppService} from './services/app.service'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './templates/app.html',
    providers: [AppService]
})


export class AppComponent {

    title: string;

        constructor(app: AppService) {
        this.title = app.getTitle();
    }
}
