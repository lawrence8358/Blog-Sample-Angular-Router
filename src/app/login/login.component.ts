import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../user'; //模擬User登入類別

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    User.IsLogin = true;
    this.router.navigate(['/admin']);
  }
}
