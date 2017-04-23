import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ArrayPipe } from '../../pipes/array.pipe';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  {
  posts:Post[];
  constructor(private _userService: UserService){
    this._userService.getById(1).subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
}

interface Post{
  user_id: number;
  email: string;
  first_name: string;
}
