import { StoreModule } from '@ngrx/store';
import { reducer } from './store/login/login.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginService } from './store/login/login.service';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login/login.effect';
import { AppRoutingModule } from './app.routing.module';
import { HomeScreenComponent } from './components/home/home-screen.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  providers: [
    LoginService
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: reducer }),
    EffectsModule.forRoot([LoginEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
