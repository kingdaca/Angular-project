import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(product:any[],searchfilter:string): unknown {
    if(!product || !searchfilter){
      return product;
    }else{
      return product.filter(product =>
        product.mark.toLocaleLowerCase().includes(searchfilter.toLocaleLowerCase()));
    }
  }

}
