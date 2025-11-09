import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const PREMIUM_DIVISOR = 1000;
const MONTHS_IN_YEAR = 12;

@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css'],
  imports: [ReactiveFormsModule,CommonModule]
})
export class PremiumCalculatorComponent implements OnInit {
  form: FormGroup;
  monthlyPremium: number | null = null;
  selectedRating: string = '';

  occupations = [
    { name: 'Cleaner', rating: 'Light Manual' },
    { name: 'Doctor', rating: 'Professional' },
    { name: 'Author', rating: 'White Collar' },
    { name: 'Farmer', rating: 'Heavy Manual' },
    { name: 'Mechanic', rating: 'Heavy Manual' },
    { name: 'Florist', rating: 'Light Manual' }
  ];

  ratingFactors: { [key: string]: number } = {
    'Professional': 1.5,
    'White Collar': 2.25,
    'Light Manual': 11.50,
    'Heavy Manual': 31.75
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      Dob: ['', Validators.required],
      Age: ['', [Validators.required, Validators.min(1), Validators.pattern('^[1-9][0-9]*$')]],
      DeathSumInsured: ['', [Validators.required, Validators.min(1), Validators.pattern('^[1-9][0-9]*$')]],
      Occupation: ['', Validators.required]
    });
  }

 ngOnInit(): void {
    this.form.valueChanges.subscribe(values => {
      if (this.form.valid) {
        this.calculatePremium();
      }
    });
  }

  calculatePremium() {
    if (this.form.invalid) {
       alert('Please fill in all fields.');
      return;
    }

    const { Age, DeathSumInsured, Occupation } = this.form.value;
    const occupation = this.occupations.find(o => o.name === Occupation);
    if (!occupation) {
      return;
    }

    const factor = this.ratingFactors[occupation.rating];
    this.selectedRating = occupation.rating;
    this.monthlyPremium = (DeathSumInsured * factor * Age) / (PREMIUM_DIVISOR * MONTHS_IN_YEAR);
  }
}
