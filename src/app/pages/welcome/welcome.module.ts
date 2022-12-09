import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome.route';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [WelcomeRoutingModule],
  providers: [],
  bootstrap: [],
})
export class WelcomeModule {}
