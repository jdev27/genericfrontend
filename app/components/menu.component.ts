import {Component} from '@angular/core';
import {MenuService} from '../services/menu.service';
import '../models/menu.model';

@Component({
    moduleId: module.id,
    selector: 'menuSection',
    templateUrl: '../templates/menu.html',
    providers: [MenuService]
})

export class MenuComponent {

    menus: Menu[];

    constructor(menuService: MenuService) {
        this.menus = menuService.getMenus();
    }


}
