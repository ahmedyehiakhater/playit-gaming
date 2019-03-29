import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxAsideModule } from 'ngx-aside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SelectCountryComponent } from './select-country/select-country.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    NgxAsideModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    TranslateModule.forChild()
  ],
  declarations: [HeaderComponent, FooterComponent, SideNavComponent, SelectCountryComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule { }
