import {Component, OnInit} from "@angular/core";
import {User} from "../models/user.model";
import {UserService} from '../services/user.service'
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: '../templates/user.html',
    providers: [UserService]
})

export class UserComponent implements OnInit {

    users: User[];
    userForm: FormGroup;
    user: User;

    constructor(userService: UserService, private _formBuilder: FormBuilder) {
        this.users = userService.getUsers();
    }

    addUser(user: User) {
        console.log('adding user');
        console.table(this.userForm);
        console.table(user);
        this.users.push(user);
        console.log('User Added');

    }

    onSelect(user: User) {
        console.log(user.name + ' selected')
    }

    ngOnInit() {
        this.userForm = this._formBuilder.group(
            {
                name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
                , email: ['', [Validators.required, Validators.maxLength(10)]],
                gender: '',
                dob: '',
                address: this._formBuilder.group({
                    street: '',
                    city: '',
                    postalCode: ['', [Validators.pattern('^[1-9][0-9]{4}$')]],
                    country: ''
                })
            }
        );
    }
}