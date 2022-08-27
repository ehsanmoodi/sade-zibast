export interface PaymentCardProps {
  id: string | number;
  date: string;
  price: number;
  trackingCode: number | null;
  gateway: string;
  paid: boolean;
}
