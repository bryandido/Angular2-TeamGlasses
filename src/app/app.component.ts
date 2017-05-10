import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
import { ProductService } from './services/product/product.service';
import { GooglemapService } from './services/googlemap/googlemap.service';
import { CustomerService } from './services/customer/customer.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers: [UserService,
              ProductService,
              CustomerService,
              GooglemapService],
  templateUrl: 'app.component.html',
})
export class AppComponent  {}
