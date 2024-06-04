import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

import { StripeService } from 'ngx-stripe';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(
    private http: HttpClient,
    private stripeService: StripeService,

  ) { }
  @Input() priceId: any;

  baseUrl = 'https://api-stripe-pfiemij80-codebyedus-projects.vercel.app/';

  checkout() {
    const bodyRequest =
    {
      itens: {
        price: this.priceId,
        quantity: 1,
      },
      cancel_url: '/',
      success_url: 'http://localhost:4200/success',

    }

    // Check the server.js tab to see an example implementation
    this.http.post(this.baseUrl + 'api/create-checkout-session', bodyRequest
    )
      .pipe(
        mergeMap((session: any) => {
          return this.stripeService.redirectToCheckout({ sessionId: session.id })
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