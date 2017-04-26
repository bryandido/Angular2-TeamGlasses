import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {
  transform(value: any, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}