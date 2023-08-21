import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastoFormComponent } from './gasto-form/gasto-form.component';
import { GastosComponent } from './gastos/gastos.component';

@NgModule({
  declarations: [
    AppComponent,
    GastoFormComponent,
    GastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
