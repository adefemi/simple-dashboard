import { PaymentDTO } from './payment.dto';

export interface AppState {
  readonly payments: PaymentDTO[];
}
