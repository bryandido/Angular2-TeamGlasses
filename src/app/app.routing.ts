import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/cart/checkout/checkout.component';

const appRoutes: Routes = [
  {
    path:'',
    component:SearchComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'cart/checkout',
    component:CheckoutComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
