import { ModalsModule } from './modals/modals.module';
import { IconsModule } from './icons/icons.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './navbar/navbar.component';
import { BorderComponent } from './border/border.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconsModule,
    ModalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
