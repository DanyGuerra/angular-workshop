import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.route';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [],
})
export class LoginModule {}
