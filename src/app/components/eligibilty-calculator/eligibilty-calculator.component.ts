import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibilty-calculator',
  templateUrl: './eligibilty-calculator.component.html',
  styleUrls: ['./eligibilty-calculator.component.css'],
})
export class EligibiltyCalculatorComponent implements OnInit {
  monthly: string = '150000';
  expense: string = '50000';
  tenures: any[] = [
    {
      value: 1,
      viewValue: '1 Month',
    },
    {
      value: 2,
      viewValue: '2 Months',
    },
    {
      value: 3,
      viewValue: '3 Months',
    },
    {
      value: 4,
      viewValue: '4 Months',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  change(event: any, type: string) {
    if (type == 'income') {
      this.monthly = event.target.value;
    }
    if (type == 'expense') {
      this.expense = event.target.value;
    }
  }
}
