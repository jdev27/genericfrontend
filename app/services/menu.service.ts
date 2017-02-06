import '../models/menu'

export class MenuService {

    getMenus(): Menu[] {
        return [
            {label: 'Home', isActive: true, link: ''},
            {label: 'User', isActive: false, link: 'user'},
            {label: 'Product', isActive: false, link: 'product'},
            {label: 'Transaction', isActive: false, link: '#'},
            {label: 'About', isActive: false, link: 'about'}];
    }

}