import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PremiumCalculatorComponent } from './app/premium-calculator/premium-calculator.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
