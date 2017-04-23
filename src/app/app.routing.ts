import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { Product_DetailComponent } from './components/product_detail/product_detail.component';
import { PageNotFoundComponent } from './components/page_not_found/page_not_found.component';

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
    path:'cart/checkout',
    component:CheckoutComponent
  },
  {
    path:'product_detail',
    component:Product_DetailComponent
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
