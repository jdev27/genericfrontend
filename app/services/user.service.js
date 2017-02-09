"use strict";
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () {
        return [{
                name: 'userName', email: 'userEmail@test.com', gender: 'male',
                dob: new Date('12/24/1993'), address: {
                    street: 'testStreet',
                    city: 'testCity',
                    postalCode: '123',
                    country: 'country'
                }
            }];
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map