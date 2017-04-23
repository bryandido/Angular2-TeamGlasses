import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers: [UserService],
  templateUrl: 'app.component.html',
})
export class AppComponent  {}
