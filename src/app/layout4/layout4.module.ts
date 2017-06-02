import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout4RoutingModule } from './layout4-routing.module';
import { Layout4Component } from './layout4.component';
import { Layout4AComponent } from './layout4-a/layout4-a.component';
import { Layout4BComponent } from './layout4-b/layout4-b.component';

@NgModule({
  imports: [
    CommonModule,
    Layout4RoutingModule
  ],
  declarations: [
    Layout4Component,
    Layout4AComponent,
    Layout4BComponent
  ]
})
export class Layout4Module { }
