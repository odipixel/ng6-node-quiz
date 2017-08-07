import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model: any = {};
  loginError = "";
  loginErr=false;
  statusMsg;
  constructor(private router: Router,) { }

  ngOnInit() {
  }
   login() {
        
         if(this.model.username =="test" &&this.model.password =="test"){
            this.router.navigate(['dashboard/home']);
         }else{
                this.loginErr=true;
                this.loginError = "Login failed.";
               
        }

    }

}
