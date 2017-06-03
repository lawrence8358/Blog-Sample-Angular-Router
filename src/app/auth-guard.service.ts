import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  Route,
  RouterStateSnapshot
} from '@angular/router';
import { User } from './user'; //模擬User登入類別

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router) { }

  //使否允許存取路由
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!User.IsLogin) {  //未通過認證轉換到登入頁面
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  //允許訪問子路由
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }

  //是否載入模塊
  canLoad(route: Route): boolean {
    return User.IsLogin;
  }
}
