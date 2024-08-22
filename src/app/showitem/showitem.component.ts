import { Component } from '@angular/core';
import { SearchService } from '../service/search/search.service';
import { HttpService } from '../service/http/http.service';

@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.scss']
})
export class ShowitemComponent {
  data=[{
    "id": '',
    "name": '',
    "description": '',
    "price": '',
    "delivery_days":'',
    "review":''
  }];
  id!:string;
  review!:string;
  constructor(private ss:SearchService,private http:HttpService){}
  ngOnInit(){
    this.ss.id.subscribe({
      next:(res:any)=>{
          this.id=res;
      },
      error:(err)=>{
        console.log("err",err);
      }
    })
    this.http.getData().subscribe({
      next:(res:any)=>{
        this.data=res.filter((val:any)=>val.id==this.id)
      },
      error:(err)=>{
        console.log("err",err);
      }
    })
    
  }
}
