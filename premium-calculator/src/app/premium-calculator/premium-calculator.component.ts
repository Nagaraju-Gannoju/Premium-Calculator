import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css'],
  imports: [CommonModule, ReactiveFormsModule]

})
export class PremiumCalculatorComponent implements OnInit {
  premiumForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    age: new FormControl<number | null>(null, Validators.required),
    dob: new FormControl<string>('', Validators.required),
    occupation: new FormControl<string>('', Validators.required),
    deathCover: new FormControl<number | null>(null, Validators.required)
  });

  occupations = [
    { name: 'Cleaner', rating: 'Light Manual' },
    { name: 'Doctor', rating: 'Professional' },
    { name: 'Author', rating: 'White Collar' },
    { name: 'Farmer', rating: 'Heavy Manual' },
    { name: 'Mechanic', rating: 'Heavy Manual' },
    { name: 'Florist', rating: 'Light Manual' },
    { name: 'Other', rating: 'Heavy Manual' }
  ];

  occupationRatingFactors: { [key: string]: number } = {
    "Professional": 1.5,
    "White Collar": 2.25,
    "Light Manual": 11.50,
    "Heavy Manual": 31.75,
    "Other": 1.0
  };

  premiumAmount = 0;

  ngOnInit(): void {
  }

  calculatePremium() {
    if (this.premiumForm.valid) {
      const occupationName = this.premiumForm.get('occupation')!.value;
      if (occupationName !== null) {
        const occupation = this.occupations.find(o => o.name === occupationName);
        if (occupation) {
          const occupationRatingFactor = this.occupationRatingFactors[occupation.rating];
          const age = Number(this.premiumForm.get('age')!.value);
          const deathCoverValue = this.premiumForm.get('deathCover')!.value;
          const deathCover = deathCoverValue !== null ? Number(deathCoverValue) : 0;

          if (!isNaN(age) && !isNaN(deathCover)) {
            this.premiumAmount = (deathCover * occupationRatingFactor * age) / 1000 * 12;
          } else {
            console.error('Invalid age or death cover value');
          }
        }
      }

    }
  }
}