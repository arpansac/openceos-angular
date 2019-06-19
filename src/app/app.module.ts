import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainNavComponent } from './components/shared/main-nav/main-nav.component';
import { AngularMaterialModule } from './shared-modules/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    FooterComponent,
    MainNavComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
