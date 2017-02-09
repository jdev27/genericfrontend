import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'error404',
    templateUrl: '../templates/error404.html'
})

export class Error404Component {
    page: string;

    constructor(router: Router) {
        this.page = router.url;
    }
}