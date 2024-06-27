import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStripeModule, StripeService } from 'ngx-stripe';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CerimoniaComponent } from './components/cerimonia/cerimonia.component';
import { ConfirmaPresencaComponent } from './components/confirma-presenca/confirma-presenca.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { ListaPresentesComponent } from './components/lista-presentes/lista-presentes.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { TextoCasalComponent } from './components/texto-casal/texto-casal.component';
@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    CerimoniaComponent,
    ConfirmaPresencaComponent,
    ListaPresentesComponent,
    PaymentComponent,
    CarrosselComponent,
    TextoCasalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStripeModule.forRoot(environment.stripePublishableKey),
  ],
  providers: [
    StripeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
};

