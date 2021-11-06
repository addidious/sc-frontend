import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel={
    UserName : '',
    Password:''
  }

  hide=true;
  form: FormGroup;
  public loginInvalid = false;
  public formSubmitAttempt = false;
  public returnUrl: string;

  constructor(private fb: FormBuilder,private service:UserService, private router:Router,
              private _snackBar:MatSnackBar, private route:ActivatedRoute) {
      this.returnUrl=this.route.snapshot.queryParams.returnUrl || '/home';
      this.form=this.fb.group({
        username:fb.control('',[Validators.required]),
        password:fb.control('',[Validators.required])
      });
   }

  ngOnInit(): void {
    if(localStorage.getItem('token')!= null)
    this.router.navigateByUrl('/home');
  }

  getErrorMessage() {
    if (this.form.controls.username.hasError('required')) {
      return 'You must enter a value';
    }
    return null;
  }

  onSubmit(){
    this.service.login(this.form).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);
        this.router.navigateByUrl('/home');
        location.reload();
      },
      err=>{
        this._snackBar.open("Incorrect username or password.")
      }
    );
  }
}
