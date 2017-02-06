"use strict";
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProduct = function () {
        return { name: 'productName', code: 'productCode', description: 'productDescription' };
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map