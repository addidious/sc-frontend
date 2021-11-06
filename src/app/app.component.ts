import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from './shared/product-details.service';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sembcorp-frontend';

  constructor(private service:UserService, private cartService:ProductDetailsService){}

  isLoggedIn:boolean;
  totalItem :number=0;

  ngOnInit(){
    this.isLoggedIn = (localStorage.getItem('token')!=null)?true:false;
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  logout(){
    this.service.logout();
    location.reload();
  }
  // openDialog(){
  //   const dialogRef = this.dialog.open(DialogContent)

  //   dialogRef.afterClosed().subscribe(result=>{
  //     console.log(`Dialog result: ${result}`)
  //   });
  // }
}


// @Component({
//   selector: 'dialog-content',
//   templateUrl: 'dialog-content.html',
// })
// export class DialogContent{}
