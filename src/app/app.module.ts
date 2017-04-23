import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { AboutComponent } from './components/about/about.component';
import {routing} from './app.routing';
import {ArrayPipe} from './pipes/array.pipe'

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent,
                  SearchComponent,
                  NavbarComponent,
                  FooterComponent,
                  CartComponent,
                  CheckoutComponent,
                  AboutComponent,
                  ArrayPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
