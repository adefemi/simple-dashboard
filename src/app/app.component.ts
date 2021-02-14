import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { PaymentDTO } from './models/payment.dto';
import { Store } from '@ngrx/store';
import { AppState } from './models/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Payment Records';
  payments: Observable<PaymentDTO[]>;

  constructor(public router: Router, private store: Store<AppState>) {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This field is required.',
        minLength: 'Enter minimum length of {{1}} characters.',
        maxLength: 'Enter maximum length of {{1}} characters.',
        minDate: 'Minimum date cannot be less than today',
        digit: 'Expected only digits',
        minNumber: 'Minimum number must be either {{1}} or greater',
      },
    });
  }

  ngOnInit(): void {
    this.payments = this.store.select('payments');
  }
}
