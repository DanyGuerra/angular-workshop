import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputDataComponentComponent } from './input-data-component.component';

@NgModule({
  declarations: [InputDataComponentComponent],
  imports: [MatFormFieldModule, FormsModule, MatInputModule],
  exports: [InputDataComponentComponent],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputDataModule {}
