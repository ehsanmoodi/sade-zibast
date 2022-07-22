import type { GetServerSideProps, NextPage } from "next";
import { PaymentCard } from "../../components";
import { PaymentCardProps } from "../../components/PaymentCard/types";
import { PanelTemplate } from "../../templates";

interface PaymentPageProps {
  data: PaymentCardProps[];
}

const Payments: NextPage<PaymentPageProps> = ({ data }) => {
  return (
    <PanelTemplate
      title="تاریخچه پرداخت‌ها"
      metaTitle="تاریخچه پرداخت‌ها"
      metaDescription="در صفحه پرداخت‌های ساده زیباست می‌توانید تاریخچه پرداخت‌های خود را ببینید"
    >
      <div className="payments">
        {data.map((payment) => (
          <PaymentCard
            key={payment.id}
            id={payment.id}
            date={payment.date}
            price={payment.price}
            trackingCode={payment.trackingCode}
            gateway={payment.gateway}
            discount={payment.discount}
          />
        ))}
      </div>
    </PanelTemplate>
  );
};

export const getServerSideProps = () => {
  const payments: PaymentCardProps[] = [
    // {
    //   id: 1,
    //   date: "۲۹ اردیبهشت ۱۴۰۱",
    //   price: "۲۹۰.۰۰۰ تومان",
    //   trackingCode: "۲۲۳۲۳۴۲۲۲۳۴",
    //   gateway: "بانک سامان",
    //   discount: "-",
    // },
    // {
    //   id: 2,
    //   date: "۲۸ اردیبهشت ۱۴۰۱",
    //   price: "۲۹۰.۰۰۰ تومان",
    //   trackingCode: "۲۲۳۲۳۴۲۲۲۳۴",
    //   gateway: "بانک سامان",
    //   discount: "-",
    // },
  ];

  return {
    props: { data: payments },
  };
};

export default Payments;
