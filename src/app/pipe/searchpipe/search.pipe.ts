import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(dataList:any[], search:string): any[] {
    if(!dataList)
      return [];
  if(!search){
    return dataList;
  }
  search=search.toLowerCase();
  return dataList.filter((data)=>data.name.toLowerCase().includes(search)|| data.description.toLowerCase().includes(search)) 

  }
}
