import {Pipe} from '@angular/core';

@Pipe({
  name: 'SearchPipe'
})

export class SearchPipe {
  transform(value: Object[], anotherValue: string): Object[] {
    if(value == null){
      return null;
    }
    if(anotherValue !== undefined){
      return value.filter((item: Object) => item["brojAlbuma"].indexOf(anotherValue) !== -1);
    }else{
      return value;
    }
  }
}
