import { Component } from '@angular/core';
import { HttpService } from '../service/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name!:string;
  email!:string;
  password!:string;
  constructor(private http:HttpService,private router:Router){}
  addData(){
    if(this.name!=='' && this.email!=='' && this.password!=='')
    {
      console.log("signup")
      this.http.addnewuser(this.name,this.email,this.password).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.router.navigate(['/login']);
        },
        error:(err)=>{
          console.log("err",err);
        }
      }
      );
    }
  }
}
