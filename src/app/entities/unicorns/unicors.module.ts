import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UnicornsComponent } from './unicorns.component';
import { UnicorsRoutingModule } from './unicorns.route';

@NgModule({
  declarations: [UnicornsComponent],
  imports: [UnicorsRoutingModule],
  providers: [],
  bootstrap: [],
})
export class UnicornsModule {}
