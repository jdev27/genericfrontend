"use strict";
var config_1 = require('../config/config');
var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getTitle = function () {
        return config_1.Config.TITLE;
    };
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map