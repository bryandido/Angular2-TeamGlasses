import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
import { ProductService } from './services/product/product.service';
import { GooglemapService } from './services/googlemap/googlemap.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers: [UserService,
              ProductService,
              GooglemapService],
  templateUrl: 'app.component.html',
})
export class AppComponent  {}
