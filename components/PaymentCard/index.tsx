import type { PaymentCardProps } from "./types";

const PaymentCard: React.FC<PaymentCardProps> = ({
  date,
  price,
  trackingCode,
  gateway,
  paid,
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
          <span>{gateway === "zarinpal" ? "زرین‌پال" : gateway}</span>
        </div>
        <div>
          <span>وضعیت</span>
          <span className={paid ? "text-green-800" : "text-red-500"}>
            {paid ? "موفق" : "ناموفق"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
