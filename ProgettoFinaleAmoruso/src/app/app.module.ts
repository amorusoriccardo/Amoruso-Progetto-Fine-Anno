import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {
  FormsModule,
  ReactiveFormsModule
 } from '@angular/forms';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { VisuaUtentiComponent } from './utenti/utenti.component';
import { BachecaComponent } from './bacheca/bacheca.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    VisuaUtentiComponent,
    BachecaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
