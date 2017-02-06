import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu.components';
import {MainComponent} from './components/main.component';
import {UserComponent} from './components/user.components';
import {ProductComponent} from './components/product.component'
import {ContentComponent} from "./components/content.component";
import {routing} from './app.routing';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, MenuComponent, MainComponent,
        UserComponent, ProductComponent, ContentComponent],
    bootstrap: [AppComponent,]
})
export class AppModule {
}
