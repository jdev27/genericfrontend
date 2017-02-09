import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentComponent} from './components/content.component';
import {ProductComponent} from './components/product.component';
import {UserComponent} from './components/user.component';
import {Error404Component} from './components/error404.component';
import {HomeComponent} from './components/home.component';

const routes: Routes = [
    {
        path: '',
        component: ContentComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
export const routingComponents = [UserComponent, ProductComponent, ContentComponent, Error404Component];