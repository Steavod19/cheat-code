import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { CheatCodeComponent } from './components/cheat-code/cheat-code.component';
import { LeftNavComponent } from './components/cheat-code/left-nav/left-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CodeContentComponent } from './components/cheat-code/code-content/code-content.component';



@NgModule({
  declarations: [
    AppComponent,
    CheatCodeComponent,
    LeftNavComponent,
    TopNavComponent,
    FooterComponent,
    CodeContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
