import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentComponent} from './components/content.component';
import {ProductComponent} from './components/product.component';
import {UserComponent} from './components/user.components';

const appRoutes: Routes = [
    {
        path: '',
        component: ContentComponent
    }, {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'product',
        component: ProductComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);