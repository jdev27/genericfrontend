export class ProductService {

    getProduct(): Product {
        return {name: 'productName', code: 'productCode', description: 'productDescription'};
    }
}
