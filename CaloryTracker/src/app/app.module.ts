import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { HeaderComponent } from './header/header.component';
import { TodaysComponent } from './todays/todays.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    HeaderComponent,
    TodaysComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
