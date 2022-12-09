import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.route';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule],
  providers: [],
  bootstrap: [],
})
export class LoginModule {}
