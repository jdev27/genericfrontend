"use strict";
require('../models/footer.model');
var FooterService = (function () {
    function FooterService() {
    }
    FooterService.prototype.getFooters = function () {
        return [{ label: 'footer1', link: 'link1' },
            { label: 'footer2', link: 'link2' },
            { label: 'footer3', link: 'link3' }];
    };
    return FooterService;
}());
exports.FooterService = FooterService;
//# sourceMappingURL=footer.service.js.map