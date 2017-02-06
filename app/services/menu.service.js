"use strict";
require('../models/menu');
var MenuService = (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenus = function () {
        return [
            { label: 'Home', isActive: true, link: '' },
            { label: 'User', isActive: false, link: 'user' },
            { label: 'Product', isActive: false, link: 'product' },
            { label: 'Transaction', isActive: false, link: '#' },
            { label: 'About', isActive: false, link: 'about' }];
    };
    return MenuService;
}());
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map