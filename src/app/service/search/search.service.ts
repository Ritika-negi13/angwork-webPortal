import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search=new BehaviorSubject('');
  id=new BehaviorSubject('')
  constructor() { }
  updateSearch(value:string){
    this.search.next(value);
  }
  updateid(value:string){
    console.log(value);
    this.id.next(value);
  }
}
