import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProdDetailComponent } from './components/product_detail/product_detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { AboutComponent } from './components/about/about.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { FAQComponent } from './components/faq/faq.component';
import { ReturnComponent } from './components/return/return.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { SupportComponent } from './components/support/support.component';
import {routing} from './app.routing';
import {ArrayPipe} from './pipes/array.pipe'

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent,
                  SearchComponent,
                  NavbarComponent,
                  FooterComponent,
                  RegisterComponent,
                  LoginComponent,
                  ProfileComponent,
                  ProdDetailComponent,
                  CartComponent,
                  CheckoutComponent,
                  AboutComponent,
                  ConfirmationComponent,
                  FAQComponent,
                  ReturnComponent,
                  ShippingComponent,
                  SupportComponent,
                  ArrayPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
