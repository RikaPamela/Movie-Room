import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customFilterPipe'
})
export class CustomFilterPipePipe implements PipeTransform {
  transform(items: any[], searchText:any, filterString:any): any[] {
    const result:any =[];
    if(!items || filterString==='' || searchText ===''){
      return items;
    }
    items.forEach((a:any)=>{
      if(a[searchText]?.trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }
}
