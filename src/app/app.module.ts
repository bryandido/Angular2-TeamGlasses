import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Product_DetailComponent } from './components/product_detail/product_detail.component';
import { PageNotFoundComponent } from './components/page_not_found/page_not_found.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
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
                  CheckoutComponent,
                  Product_DetailComponent,
                  PageNotFoundComponent,
                  ContentComponent,
                  FilterComponent,
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
