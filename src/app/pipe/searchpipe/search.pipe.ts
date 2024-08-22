import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dataList:any[], search:string): unknown {
    if(!dataList)
      return [];
    if(!search)
      return dataList;
    search=search.toLowerCase();
    return dataList.filter((data)=>{if(data.title.toLowerCase.include(search)|| data.description.toLowerCase.include(search))}) 
  }

}
