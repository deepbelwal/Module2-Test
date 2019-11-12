import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
         MatButtonModule,MatFormFieldModule,
         MatInputModule, MatRadioModule, 
         MatSelectModule, MatSliderModule, 
         MatDatepickerModule ,
         MatNativeDateModule,
         MatAutocompleteModule,
         MatCardModule,
         MatListModule
        } from "@angular/material";


import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
const MaterialComponent=[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  FormsModule,
  MatSelectModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatCardModule,
  MatListModule

]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponent,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
