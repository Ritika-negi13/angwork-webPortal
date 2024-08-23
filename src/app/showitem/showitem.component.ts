import { Component } from '@angular/core';
import { SearchService } from '../service/search/search.service';
import { HttpService } from '../service/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.scss']
})
export class ShowitemComponent {
  data=[{
    "id": '',
    "name": '',
    "img":'',
    "description": '',
    "price": '',
    "delivery_days":'',
    "review":''
  }];
  id!:string;
  review!:string;
  constructor(private ss:SearchService,private http:HttpService,private router:Router){}
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
  addreview(e:any){
    if(e.key === "Enter")
    {     
      this.http.editData(this.review,this.data[0]).subscribe({
        next:(res:any)=>{
          console.log('it it herer')
          this.router.navigate(['dashboard']);
        },
        error:(err)=>{
          console.log("err",err);
        }
    });
  }
}
}
