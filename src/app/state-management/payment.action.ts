import { PaymentDTO } from '../models/payment.dto';

export const AddPaymentAction = '[Payment] add payment';

export interface ActionInterface {
  readonly type: string;
  payload: PaymentDTO;
}
