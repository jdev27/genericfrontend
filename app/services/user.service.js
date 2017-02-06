"use strict";
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function () {
        return {
            name: 'userName', email: 'userEmail@test.com', address: {
                street: 'testStreet',
                city: 'testCity',
                country: 'country'
            }
        };
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map