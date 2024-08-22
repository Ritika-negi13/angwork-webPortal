import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search=new BehaviorSubject('');
  constructor() { }
  updateSearch(value:string){
    this.search.next(value);
  }
}
