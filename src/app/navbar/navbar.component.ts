import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private log:UserService) { }

  ngOnInit(): void {
  }

  logged=false;

  logout(){
    this.log.logout();
    alert("You are logged out!! Your data from this session is");
    this.logged=false;

  }

  
}
