import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { Layout1AComponent } from './layout1/layout1-a/layout1-a.component';

//import { Layout4Module } from './layout4/layout4.module';

@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component,
    Layout1AComponent,
  ],
  imports: [
    BrowserModule,
    //Layout4Module,
    AppRoutingModule //底下的寫法與此方法相同，差別在將路由設定獨立出來而已
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/layout1', pathMatch: 'full' },
    //   { path: 'layout1', component: Layout1Component }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
