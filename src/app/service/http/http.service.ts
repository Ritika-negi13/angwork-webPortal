import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://localhost:3000/product")
  }
  editData(review:string,data:any){
    data.review.push(review);
    return this.http.patch("http://localhost:3000/product/"+data.id,data);
  }
  addnewuser(name:string,email:string,password:string){
    const data={
      "name":name,
      "email":email,
      "password":password
    }
    return this.http.post("http://localhost:3000/user",data)
  }
  getuserdata(){
    return this.http.get("http://localhost:3000/user");
  }
}
