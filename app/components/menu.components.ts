import {Component} from '@angular/core';
import {MenuService} from '../services/menu.service';
import '../models/menu';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: '../templates/menu.html',
    providers: [MenuService]
})

export class MenuComponent {

    menus: Menu[];

    constructor(menuService: MenuService) {
        this.menus = menuService.getMenus();
    }

}
