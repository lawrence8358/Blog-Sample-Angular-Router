import { Injectable } from '@angular/core';
import { CanDeactivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AdminComponent } from './admin/admin.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<AdminComponent>
{
  canDeactivate(component: AdminComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return confirm("確定要登出嗎?");
  }
}
