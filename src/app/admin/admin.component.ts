import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../user'; //模擬User登入類別

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    User.IsLogin = false;
    this.router.navigate(['/login']);
  }
}
