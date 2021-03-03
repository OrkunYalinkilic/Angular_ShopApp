import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../modell/modell.module';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [ShopComponent, NavbarComponent],
    exports: [ShopComponent]
})

export class ShopModule { }