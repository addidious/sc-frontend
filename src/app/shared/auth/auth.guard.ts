import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor(private router:Router, private _snackBar:MatSnackBar){}
  durationInSeconds = 5;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(localStorage.getItem('token')!=null)
        return true;
        else{
          this._snackBar.open("Please login to use this feature.");
          this.router.navigateByUrl('/login');
          return false;
        }
    }

    // openSnackBar() {
    //   this._snackBar.openFromComponent(LoginWarningComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
}
