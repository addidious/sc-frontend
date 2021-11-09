import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductDetailsService } from 'src/app/shared/product-details.service';
import { UserService } from 'src/app/shared/user.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() openSideNav = new EventEmitter();
  constructor(private service:UserService, private cartService:ProductDetailsService) { }

  isLoggedIn:boolean;
  totalItem:number=0;

  ngOnInit() {
    this.isLoggedIn = (localStorage.getItem('token')!=null)?true:false;
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  toggleSideNav(){
    this.openSideNav.emit('toggle sidenav');
  }

  logout(){
    this.service.logout();
    location.reload();
  }

}
