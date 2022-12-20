import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome.route';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [WelcomeRoutingModule, MatCardModule, MatTableModule],
  providers: [],
  bootstrap: [],
})
export class WelcomeModule {}
