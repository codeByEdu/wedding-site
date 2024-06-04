import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wedding-site';
  stripePromise = loadStripe('sk_test_51PNko5Ju8JtNTZAx2oYFosoZxWxTZP2jjE5JaOBKaKwM8gtU7KSfm8NGfzEFl9i7JFkqAmY3lUA0PHFNiHcLwzVY00OzD5EQAk');
}
