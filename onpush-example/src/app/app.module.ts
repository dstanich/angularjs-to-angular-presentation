import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CalculatedValueComponent } from './calculated-value/calculated-value.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, CalculatedValueComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
