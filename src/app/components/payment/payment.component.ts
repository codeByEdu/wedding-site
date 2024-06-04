import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripeCardElement, StripeCardElementOptions } from '@stripe/stripe-js';
import { StripeService } from 'ngx-stripe';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})


export class PaymentComponent {

  paymentForm: FormGroup;
  card!: StripeCardElement;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  constructor(private formBuilder: FormBuilder, private stripeService: StripeService) {
    this.paymentForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submitPayment(name: string) {
    if (this.paymentForm.valid) {
      this.stripeService.createToken(this.card, { name:  name })
        .subscribe(result => {
          if (result.token) {
            // Send the token to your server to process the payment
            console.log(result.token.id);
          } else if (result.error) {
            // Display the error to the user
            console.log(result.error.message);
          }
        });
    }
  }
}
