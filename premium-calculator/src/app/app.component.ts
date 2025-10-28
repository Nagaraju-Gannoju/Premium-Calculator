import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PremiumCalculatorComponent } from './premium-calculator/premium-calculator.component';

@Component({
  selector: 'app-root',
  imports: [PremiumCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'premium-calculator';
}
