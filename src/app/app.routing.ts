import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ProdDetailComponent} from './components/product_detail/product_detail.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/cart/checkout/checkout.component';
import {AboutComponent} from './components/about/about.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {FAQComponent} from './components/faq/faq.component';
import {ReturnComponent} from './components/return/return.component';
import {ShippingComponent} from './components/shipping/shipping.component';
import {SupportComponent} from './components/support/support.component';

const appRoutes: Routes = [
  {
    path:'',
    component:SearchComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'product_detail',
    component:ProdDetailComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'cart/checkout',
    component:CheckoutComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'confirmation',
    component:ConfirmationComponent
  },
  {
    path:'faq',
    component:FAQComponent
  },
  {
    path:'return',
    component:ReturnComponent
  },
  {
    path:'shipping',
    component:ShippingComponent
  },
  {
    path:'support',
    component:SupportComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
