import {Pipe} from '@angular/core';

@Pipe({
  name: 'SearchPipe1'
})

export class SearchPipe1 {
  transform(value: Object[], anotherValue: string): Object[] {
    if(value == null){
      return null;
    }
    if(anotherValue !== undefined){
      return value.filter((item: Object) => item["brojSpotova"].indexOf(anotherValue) !== -1);
    }else{
      return value;
    }
  }
}
