import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:string='';
  password:string='';
  data!:[
    {
      "name":string,
      "email":string,
      "password":string,
    }
  ];
  constructor(private router:Router,private http:HttpService){}
  loginuser(){
    if(this.email!='' && this.password!='')
    {

      this.http.getuserdata().subscribe({
        next:(res:any)=>{
          this.data=res;
          this.checkLogin();

        },
        error:(err)=>{
          console.log("err",err);
        }
      })
      this.router.navigate(['/dashboard'])
    }
  }
  checkLogin(){
    this.data.forEach(element => {
      if(element.email===this.email && element.password===this.password)
      {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
