import {User} from '../models/user';

export class UserService {
    getUser(): User {
        return {
            name: 'userName', email: 'userEmail@test.com', address: {
                street: 'testStreet',
                city: 'testCity',
                country: 'country'
            }
        };
    }
}