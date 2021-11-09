import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router) { }
  readonly BaseURL = 'https://74ab-138-75-155-224.ngrok.io';

  userDetails:any;

  formModel = this.fb.group({
    UserName:['',Validators.required],
    Passwords:this.fb.group({
      Password:['',[Validators.required,Validators.minLength(6)]],
      ConfirmPassword:['',Validators.required]
    },{Validators:this.comparePasswords}),
  });

  comparePasswords(fb:FormGroup){
    let confirmPasswordControl = fb.get('ConfirmPassword');

    if(confirmPasswordControl?.errors == null || 'passwordMismatch' in confirmPasswordControl.errors){
      if(fb.get('Password')?.value!=confirmPasswordControl?.value){
        confirmPasswordControl?.setErrors({
          passwordMismatch:true
        });
      }
      else{
        confirmPasswordControl?.setErrors(null);
      }
    }
  }

  register(){
    var body = {
      name:this.formModel.value.UserName,
      password:this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURL+'api/register',body);
  }

  login(formData:FormGroup){
    const body = {
      username:formData.value.username,
      password:formData.value.password
    }
    this.userDetails = Object.assign({},body);
    localStorage.setItem('name',body.username);
    return this.http.post(this.BaseURL+'/api/login',body);
  }

  logout(){
    this.router.navigateByUrl('/home');
    localStorage.removeItem('token');
  }
}
