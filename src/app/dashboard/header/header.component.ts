import { Component } from '@angular/core';
import { FilterService } from 'src/app/service/filter.service';
import { SearchService } from 'src/app/service/search/search.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search!:string;
  constructor(private s:SearchService,private filterService:FilterService){}
  searchData()
  {
    this.s.updateSearch(this.search);
  }
  onFilterChange() {
    const filters = {
      price: (document.getElementById('price') as HTMLSelectElement).value,
      delivery: (document.getElementById('delivery') as HTMLSelectElement).value
    };
    this.filterService.setFilters(filters);
  }
}
