import { ActionInterface, AddPaymentAction } from './payment.action';
import { PaymentDTO } from '../models/payment.dto';

const initialState: PaymentDTO[] = [];

export function paymentReducer(
  state: PaymentDTO[] = initialState,
  action: ActionInterface
) {
  switch (action.type) {
    case AddPaymentAction:
      return [...state, action.payload];
    default:
      return state;
  }
}
