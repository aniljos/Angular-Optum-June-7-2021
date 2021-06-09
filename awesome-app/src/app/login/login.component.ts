import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  message: string;
  formGroup: FormGroup;

  constructor(private userService: UserService, private router: Router) { 
    console.log("userService.isAuthenticated(): ", userService.isAuthenticated());
  }

   ngOnInit(): void {

    // (async () => {
    //   try {
    //     const result = await this.userService.validate("abc", "abc@123");
    //     console.log("Done:", result);
  
    //   } catch (error) {
    //     console.log("Error:", error);
    //   }
    // })();

    this.formGroup = new FormGroup({
        name: new FormControl("abc", [Validators.required], []),
        pwd: new FormControl("abc@123", [Validators.required])
    }); 
  }

  async login(){

    const name = this.formGroup.get('name').value;
    const password = this.formGroup.get('pwd').value;

    try {
      
      const result = await this.userService.validate(name, password);
      this.message = "";
     // alert("logged In");
      this.router.navigate(["/products"]);

    } catch (error) {
        this.message = "Invalid Credentials";
    }
  }

}
