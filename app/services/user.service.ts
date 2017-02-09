import {User} from '../models/user.model';

export class UserService {


    getUsers(): User[] {
        return [{
            name: 'userName', email: 'userEmail@test.com', gender: 'male',
            dob: new Date('12/24/1993'), address: {
                street: 'testStreet',
                city: 'testCity',
                postalCode: '123',
                country: 'country'
            }
        }];
    }
}