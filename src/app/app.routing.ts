import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PageNotFoundComponent } from './components/page_not_found/page_not_found.component';

import { SearchLaptopComponent } from './components/searchLaptop/searchLaptop.component';
import { SearchTabletComponent } from './components/searchTablet/searchTablet.component';
import { SearchTvComponent } from './components/searchTv/searchTv.component';

const appRoutes: Routes = [
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'cart',
    component:CartComponent
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
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'searchTv',
    component: SearchTvComponent
  },

  {
    path:'searchLaptop',
    component: SearchLaptopComponent
  },
  {
    path:'searchTablet',
    component: SearchTabletComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
