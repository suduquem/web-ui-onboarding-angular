import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/components/shared.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LetsImagineComponent } from './components/lets-imagine/lets-imagine.component';
import { CareerPathComponent } from './components/career-path/career-path.component';
import { TriforceComponent } from './components/triforce/triforce.component';
import { ValuesComponent } from './components/values/values.component';
import { KeyPeopleComponent } from './components/key-people/key-people.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LetsImagineComponent,
    CareerPathComponent,
    TriforceComponent,
    ValuesComponent,
    KeyPeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
