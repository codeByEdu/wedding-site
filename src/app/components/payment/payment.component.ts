import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
    private stripeService: StripeService
  ) { }

  checkout() {
    // Check the server.js tab to see an example implementation
    this.http.post('http://localhost:4242/api/create-checkout-session', {})
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