import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private service:UserService) { }

  isLoggedIn:boolean;
  username?:string;

  ngOnInit(): void {
    this.isLoggedIn = (localStorage.getItem('token')!=null)?true:false;
    if(this.isLoggedIn){
      this.username=localStorage.getItem('name')||undefined;
      // this.service.userDetails.username;
    }
  }
}
