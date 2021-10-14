import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }
  isLogin = true;

  ngOnInit(): void {
  }
  onRegiter(){

  }
  onSwitch(){
    this.isLogin = !this.isLogin
  }

}
