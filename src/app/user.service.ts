import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged=false;
  constructor() { }

  newkey:string;
  getkey(key:string){
this.newkey=key;
console.log(this.newkey);
  }
  logout()
  {
    window.sessionStorage.removeItem(this.newkey);
    this.logged=false;

  }
}
