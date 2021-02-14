import { PaymentDTO } from './../models/payment.dto';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { PaymentService } from '../services/payment.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss'],
})
export class MakePaymentComponent implements OnInit {
  minDate = new Date(new Date().setDate(new Date().getDate() + 1));
  paymentForm: FormGroup;
  loading = false;

  constructor(
    private fb: RxFormBuilder,
    private paymentService: PaymentService,
    private toastService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    let paymentDTO = new PaymentDTO();
    this.paymentForm = this.fb.formGroup(paymentDTO);
    console.log(this.paymentForm);
  }

  onSubmit(): void {
    this.loading = true;
    this.paymentService.postPayment(this.paymentForm.value).subscribe((a) => {
      this.toastService.success('Payment Registered successfully');
      this.router.navigate(['/']);
    });
  }

  openDatePicker(picker: any) {
    picker.open();
  }
}
