import { StoreModule } from '@ngrx/store';
import { reducer } from './loginScreen/reducers/login.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ count: reducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
