import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {APP_BASE_HREF} from '@angular/common';

import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu.component';
import {MainComponent} from './components/main.component';
import {FooterComponent} from "./components/footer.component";
import {HomeComponent} from "./components/home.component";
import {AppRoutingModule, routingComponents} from './app.routing';

import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    declarations: [AppComponent, MenuComponent, MainComponent,
        routingComponents, FooterComponent, HomeComponent],
    bootstrap: [AppComponent],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule {
}
