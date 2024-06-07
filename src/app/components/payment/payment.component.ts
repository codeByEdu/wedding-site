import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { Location } from '@angular/common';
import { StripeService } from 'ngx-stripe';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(
    private location: Location,
    private http: HttpClient,
    private stripeService: StripeService,

  ) { }
  @Input() priceId: any;
  getDomain(): string {
    return window.location.href;
  }


  checkout() {

    const bodyRequest = {
      itens: {
        price: this.priceId,
        quantity: 1,
      },
      cancel_url: this.getDomain() + 'sucess',
      success_url: this.getDomain() + 'failed',

    }
    const lambdaApiUrl = 'https://eoeslxtzxj.execute-api.us-east-1.amazonaws.com/integration-stripe';
    // Check the server.js tab to see an example implementation
    console.log(bodyRequest);
    this.http.post(lambdaApiUrl, bodyRequest,
      { headers: { 'Content-Type': 'application/json' } })
      .pipe(
        mergeMap((response: any) => {
          return this.stripeService.redirectToCheckout({ sessionId: response.id })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}