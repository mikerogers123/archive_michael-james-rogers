import { NgModule } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component';
import { BodyBorderComponent } from './body-border/body-border.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NavBarComponent,
    BodyBorderComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    NavBarComponent,
    BodyBorderComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
