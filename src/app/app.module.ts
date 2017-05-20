import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent }from './components/confirmation/confirmation.component';
import { PageNotFoundComponent } from './components/page_not_found/page_not_found.component';
import { FooterComponent } from './components/footer/footer.component';
import { routing } from './app.routing';

import { SearchLaptopComponent } from './components/searchLaptop/searchLaptop.component';
import { SearchTabletComponent } from './components/searchTablet/searchTablet.component';
import { SearchTvComponent } from './components/searchTv/searchTv.component';

import { AboutComponent } from './components/about/about.component';
import { FAQComponent } from './components/faq/faq.component';
import { ReturnComponent } from './components/return/return.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { SupportComponent } from './components/support/support.component';

import { ArrayPipe } from './pipes/array.pipe'

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, ReactiveFormsModule, HttpModule, Ng2SearchPipeModule],
  declarations: [ AppComponent,
                  SearchComponent,
                  NavbarComponent,
                  CartComponent,
                  RegisterComponent,
                  LoginComponent,
                  ProfileComponent,
                  CheckoutComponent,
                  ConfirmationComponent,
                  PageNotFoundComponent,
                  FooterComponent,
                  SearchTvComponent,
                  SearchLaptopComponent,
                  SearchTabletComponent,
                  AboutComponent,
                  FAQComponent,
                  ReturnComponent,
                  ShippingComponent,
                  SupportComponent,
                  ArrayPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
