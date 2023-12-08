import { NgModule } from "@angular/core";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ]
})
export class HeroesModule{}
