import {Component} from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
    moduleId: module.id,
    selector: 'product',
    templateUrl: '../templates/product.html',
    providers: [ProductService]
})

export class ProductComponent {
    product: Product;

    constructor(productService: ProductService) {
        this.product = productService.getProduct();
    }
}