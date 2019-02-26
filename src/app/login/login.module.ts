import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoginService } from './services/login-service/login.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule,
    FormsModule,
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
