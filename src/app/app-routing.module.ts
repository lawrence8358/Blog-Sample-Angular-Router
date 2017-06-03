import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { Layout1AComponent } from './layout1/layout1-a/layout1-a.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAComponent } from './admin/admin-a/admin-a.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

const route: Route = { path: '**', redirectTo: '/layout1', pathMatch: 'full' }; //獨立定義路由

const routes: Routes = [
  { path: '', redirectTo: '/layout1', pathMatch: 'full' },
  { path: 'layout1', component: Layout1Component },
  { path: 'layout1/layout1-a', component: Layout1AComponent },
  { path: 'layout2', component: Layout2Component, outlet: 'popup' },
  { path: 'layout3/:id', component: Layout3Component },
  {
    path: 'layout4',
    loadChildren: './layout4/layout4.module#Layout4Module',
    canLoad: [AuthGuard]  //是否允許載入該模塊
  }, //惰性加載
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard], //保護路由訪問權限
    canDeactivate: [CanDeactivateGuard] , //離開前的詢問判斷
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard], //保護子路由訪問權限
        children: [
          { path: 'admin-a', component: AdminAComponent } //實際訪問路徑/admin/admin-a
        ]
      }
    ]
  },
  route //加入獨立定義的路由
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: true //開啟路由追蹤
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
