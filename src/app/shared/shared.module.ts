import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './services/country/country.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CountryService]
})
export class SharedModule { }
