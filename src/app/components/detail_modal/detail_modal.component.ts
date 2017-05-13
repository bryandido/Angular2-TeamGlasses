import { Component, Input } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { ArrayPipe } from '../../pipes/array.pipe';
import { ProductService } from '../../services/product/product.service';

@Component({
  moduleId: module.id,
  selector: 'detail_modal',
  templateUrl: 'detail_modal.component.html',
})
export class DetailModalComponent {
  @Input() post: any;
}
