import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxAsideModule } from 'ngx-aside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    NgxAsideModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule { }
