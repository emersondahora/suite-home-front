import { FormatCurrencyPipe } from './../format-currency.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FormatCurrencyPipe],
  exports:[FormatCurrencyPipe],
  imports: [
    CommonModule
  ]
})
export class FormatCurrencyModule { }
