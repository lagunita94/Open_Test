import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FeaturesComponent } from './components/features/features.component';
import { EligibiltyCalculatorComponent } from './components/eligibilty-calculator/eligibilty-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeaturesComponent,
    EligibiltyCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
