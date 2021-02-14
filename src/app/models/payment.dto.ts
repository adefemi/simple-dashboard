import {
  required,
  digit,
  minDate,
  minNumber,
  minLength,
  maxLength,
} from '@rxweb/reactive-form-validators';

export class PaymentDTO {
  @required()
  creditCardNumber: string;

  @required()
  cardHolder: string;

  @required()
  @minDate({ value: new Date(new Date().setDate(new Date().getDate())) })
  expirationDate: Date;

  @minLength({ value: 3 })
  @maxLength({ value: 3 })
  @digit()
  securityCodeCVV: string;

  @required()
  @minNumber({ value: 1 })
  amount: number;
}
