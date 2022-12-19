import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome.route';
import { CdkTableModule } from '@angular/cdk/table';
import { WelcomeService } from './welcome.service';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [WelcomeRoutingModule, CdkTableModule],
  providers: [],
  bootstrap: [],
})
export class WelcomeModule implements OnInit {
  // constructor(private service: WelcomeService) {}

  ngOnInit() {
    console.log('Hola');
    // this.service.getData().subscribe((response) => {
    //   console.log(response);
    // });
  }
}
