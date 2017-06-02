import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout4Component } from './layout4.component';
import { Layout4BComponent } from './layout4-b/layout4-b.component';
import { Layout4AComponent } from './layout4-a/layout4-a.component';

// const routes: Routes = [
//   {
//     path: 'layout4',
//     component : Layout4Component,
//     children: [ //底下為子路由
//       { path: 'layout4-a', component: Layout4AComponent }, //實際訪問路徑為 /layout4/layout4-a
//       { path: 'layout4-b', component: Layout4BComponent }  //實際訪問路徑為 /layout4/layout4-b
//     ]
//   }
// ];

//底下為lazyload用，因為惰性載入已經在app-routing.module.ts內指定上層path名稱，
const routes: Routes = [
  {
    path: '', //清除layout4字串
    component : Layout4Component,
    children: [ //底下為子路由
      { path: 'layout4-a', component: Layout4AComponent }, //實際訪問路徑為 /layout4/layout4-a
      { path: 'layout4-b', component: Layout4BComponent } //實際訪問路徑為 /layout4/layout4-b
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Layout4RoutingModule { }
