import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { SaladeComponent } from './components/salade/salade.component';
import { RegisterComponent } from './contact/register/register.component';
import { LoginComponent } from './contact/login/login.component';
import { VoirTousComponent } from './components/voir-tous/voir-tous.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatisserieComponent,
    CuisineComponent,
    SaladeComponent,
    RegisterComponent,
    LoginComponent,
    VoirTousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
