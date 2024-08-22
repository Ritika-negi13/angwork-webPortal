import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  dataList!:any[];
  constructor(private http:HttpService){}
  ngOnInit(): void {
    this.http.getData().subscribe({
      next:(res:any)=>{
        console.log("res",res);
        this.dataList=res;
      },
      error:(err)=>{
        console.log("err",err);
      }
    })
  }
}
