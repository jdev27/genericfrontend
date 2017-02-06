"use strict";
var router_1 = require('@angular/router');
var content_component_1 = require('./components/content.component');
var product_component_1 = require('./components/product.component');
var user_components_1 = require('./components/user.components');
var appRoutes = [
    {
        path: '',
        component: content_component_1.ContentComponent
    }, {
        path: 'user',
        component: user_components_1.UserComponent
    },
    {
        path: 'product',
        component: product_component_1.ProductComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map