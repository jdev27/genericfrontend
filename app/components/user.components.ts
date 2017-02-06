import {Component} from "@angular/core";
import {User} from "../models/user";
import {UserService} from '../services/user.service'

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: '../templates/user.html',
    providers:[UserService]
})

export class UserComponent {
    user: User;

    constructor(userService: UserService) {
        this.user = userService.getUser();
    }
}