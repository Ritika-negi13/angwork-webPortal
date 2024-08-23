import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';
import { SearchService } from 'src/app/service/search/search.service';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/service/filter.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  dataList!:{
    "id": string,
    "name": string,
    "description": string,
    "price": number,
    "delivery_days":number,
    "review":string[]
  }[];
  filters!:any;
  search!:string;
  constructor(private http:HttpService,private s:SearchService,private router:Router,private filterService:FilterService){}
  ngOnInit(): void {
    this.http.getData().subscribe({
      next:(res:any)=>{
        this.dataList=res;
      },
      error:(err)=>{
        console.log("err",err);
      }
    })
    this.s.search.subscribe({
      next:(res:any)=>{
        console.log(res)
        this.search=res;
      },
      error:(err)=>{
        console.log("err",err);
      }
    })
    this.filterService.filters$.subscribe(filters => {
      this.filters = filters;
      this.applyDeliveryFilter();
      this.applyPriceFilter();
    });
  }

  openshowitem(e:any){
    console.log(e.id);
    this.s.updateid(e.id);
    this.router.navigate(['/showitem'])
  }
  applyDeliveryFilter() {
    let filteredData = this.dataList;
    console.log("delivery")
    if (this.filters.delivery === 'fast' ) {
      console.log("fastest")
      filteredData.sort((a, b) => a.delivery_days - b.delivery_days);
    } else if (this.filters.delivery == 'slow') {
      console.log("slowest")
      filteredData.sort((a, b) => b.delivery_days - a.delivery_days);
    }
    this.dataList = filteredData;
  }

  applyPriceFilter() {
    let filteredData =this.dataList;

    if (this.filters.price === 'low') {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (this.filters.price === 'high') {
      filteredData.sort((a, b) => b.price - a.price);
    }
    this.dataList = filteredData;
  }
} 