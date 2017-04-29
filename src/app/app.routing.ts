import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Product_DetailComponent } from './components/product_detail/product_detail.component';
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
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'product_detail/:id',
    component:Product_DetailComponent
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
