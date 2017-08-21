import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(value: number, per?: number): any {
      if(!per){
        per = 1;
      }

      return (value*100).toFixed(2) + '%';
  }

}
