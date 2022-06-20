import type { PaymentCardProps } from "./types";

const PaymentCard: React.FC<PaymentCardProps> = ({
  date,
  price,
  trackingCode,
  gateway,
  discount,
}) => {
  return (
    <div className="payment-card">
      <h2 className="payment-card__date">{date}</h2>
      <div className="payment-card__items">
        <div>
          <span>مبلغ</span>
          <span>{price}</span>
        </div>
        <div>
          <span>شماره تراکنش</span>
          <span>{trackingCode}</span>
        </div>
        <div>
          <span>درگاه</span>
          <span>{gateway}</span>
        </div>
        <div>
          <span>میزان تخفیف</span>
          <span>{discount}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
