import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { Layout1AComponent } from './layout1/layout1-a/layout1-a.component';

const route : Route = { path: '**', redirectTo: '/layout1', pathMatch: 'full' }; //獨立定義路由

const routes: Routes = [
  { path: '', redirectTo: '/layout1', pathMatch: 'full' },
  { path: 'layout1', component: Layout1Component },
  { path: 'layout1/layout1-a', component: Layout1AComponent },
  { path: 'layout2', component: Layout2Component, outlet: 'popup' },
  { path: 'layout3/:id', component: Layout3Component },
  { path: 'layout4', loadChildren : './layout4/layout4.module#Layout4Module' }, //惰性加載
  route //加入獨立定義的路由
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash : false,
      enableTracing : true //開啟路由追蹤
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
