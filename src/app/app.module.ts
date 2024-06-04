import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CerimoniaComponent } from './components/cerimonia/cerimonia.component';
import { ConfirmaPresencaComponent } from './components/confirma-presenca/confirma-presenca.component';
import { ListaPresentesComponent } from './components/lista-presentes/lista-presentes.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    CerimoniaComponent,
    ConfirmaPresencaComponent,
    ListaPresentesComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
