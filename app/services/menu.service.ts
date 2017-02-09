import '../models/menu.model';

export class MenuService {

    getMenus(): Menu[] {
        return [
            {label: 'Home', link: '/home', class: 'item'},
            {label: 'User', link: '/user', class: 'item'},
            {label: 'Product', link: '/product', class: 'item'},
            {label: 'Transaction', link: 'transaction', class: 'item'},
            {label: 'About', link: '/about', class: 'item'},
            {label: 'Sign in', link: '/signin', class: 'right item'}];
    }
}