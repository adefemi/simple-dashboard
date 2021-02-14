import { AddPaymentAction } from './../state-management/payment.action';
import { PaymentDTO } from './../models/payment.dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app.state';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private store: Store<AppState>) {}

  postPayment(payment: PaymentDTO): Observable<PaymentDTO> {
    let res = new Observable<PaymentDTO>((subscriber) => {
      setTimeout(() => {
        this.store.dispatch({ type: AddPaymentAction, payload: payment });
        subscriber.next(payment);
        subscriber.complete();
      }, 2000);
    });

    return res;
  }
}
