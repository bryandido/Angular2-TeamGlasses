import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PageNotFoundComponent } from './components/page_not_found/page_not_found.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/searchbar/searchbar.component';
import { routing } from './app.routing';

import { SearchLaptopComponent } from './components/searchLaptop/searchLaptop.component';
import { ContentLaptopComponent } from './components/contentLaptop/contentLaptop.component';
import { SearchTabletComponent } from './components/searchTablet/searchTablet.component';
import { ContentTableComponent } from './components/contentTablet/contentTablet.component';
import { SearchTvComponent } from './components/searchTv/searchTv.component';
import { ContentTvComponent } from './components/contentTv/contentTv.component';

import { ArrayPipe } from './pipes/array.pipe'

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent,
                  SearchComponent,
                  NavbarComponent,
                  CartComponent,
                  RegisterComponent,
                  LoginComponent,
                  ProfileComponent,
                  CheckoutComponent,
                  PageNotFoundComponent,
                  ContentComponent,
                  FooterComponent,
                  SearchBarComponent,
                  SearchTvComponent,
                  SearchLaptopComponent,
                  SearchTabletComponent,
                  ContentTvComponent,
                  ContentTableComponent,
                  ContentLaptopComponent,
                  ArrayPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
