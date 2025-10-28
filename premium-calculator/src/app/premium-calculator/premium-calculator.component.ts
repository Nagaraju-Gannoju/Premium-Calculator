import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-premium-calculator',
  templateUrl: './premium-calculator.component.html',
  styleUrls: ['./premium-calculator.component.css'],
  imports: [CommonModule,ReactiveFormsModule]

})
export class PremiumCalculatorComponent implements OnInit {
  form: FormGroup;
monthlyPremium: number | null = null;
selectedRating: string = '';

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: ['', Validators.required],
    dob: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(1)]],
    deathSumInsured: ['', [Validators.required, Validators.min(1)]],
    occupation: ['', Validators.required]
  });
}

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



  ngOnInit(): void {
  }

  calculatePremium() {
  if (this.form.invalid) return;

  const { age, deathSumInsured, occupation } = this.form.value;
  const rating = this.occupations.find(o => o.name === occupation)?.rating;
  const factor = this.ratingFactors[rating!];

  this.selectedRating = rating!;
  this.monthlyPremium = (deathSumInsured * factor * age) / 1000 * 12;
  }
}