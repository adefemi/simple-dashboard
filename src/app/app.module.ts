import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { paymentReducer } from './state-management/payment.reducer';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, MakePaymentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RxReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      payments: paymentReducer,
    }),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
