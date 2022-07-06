import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
  Button,
  DateInput,
  InnerHeader,
  Input,
  InputGroup,
  TextArea,
} from "../../../components";

import type { Value as DateValue } from "react-multi-date-picker";

const CreateCards: NextPage = () => {
  const [data, setData] = useState<{
    name: string;
    link: string;
    description: string;
    description_second: string;
    address: string;
    date_description: string;
    date: DateValue;
  }>({
    name: "",
    link: "",
    description: "",
    description_second: "",
    address: "",
    date_description: "",
    date: new Date(),
  });

  const price = 290000;

  return (
    <>
      <Head>
        <title>ساخت کارت جدید</title>
        <meta
          name="description"
          content="در این صفحه از پنل کاربری می‌توانید کارت جدیدی ایجاد کنید"
        />
      </Head>

      <main className="min-h-screen bg-vista-white">
        <InnerHeader title="ایجاد کارت دعوت جدید" backLink="/panel/cards" />

        <div className="create-page">
          <div className="create-page__col">
            <Input
              id="name"
              type="text"
              label="عنوان کارت"
              value={data.name}
              onChange={(event) =>
                setData({ ...data, name: event.target.value })
              }
            />
            <InputGroup
              title="لینک دعوت"
              description="لینک دلخواه خود را تایپ کنید. این لینکی است که برای دعوتی های خود ارسال خواهید کرد."
            >
              <Input
                id="link"
                type="text"
                dir="ltr"
                extra=".sadezibast.ir"
                value={data.link}
                onChange={(event) =>
                  setData({ ...data, link: event.target.value })
                }
              />
            </InputGroup>
            <TextArea
              rows={4}
              id="description"
              label="متن اول (بالای صفحه)"
              value={data.description}
              onChange={(event) =>
                setData({ ...data, description: event.target.value })
              }
            />
          </div>
          <div className="create-page__col">
            <TextArea
              rows={4}
              id="description_second"
              label="متن دوم (بعد از گالری)"
              value={data.description_second}
              onChange={(event) =>
                setData({ ...data, description_second: event.target.value })
              }
            />
            <TextArea
              rows={4}
              id="address"
              label="آدرس خود را بنویسید..."
              value={data.address}
              onChange={(event) =>
                setData({ ...data, address: event.target.value })
              }
            />
          </div>
          <div className="create-page__col">
            <InputGroup guide="مثلا: دوشنبه ساعت ۱۱ به صرف چایی و شیرینی میبینمتون.">
              <TextArea
                rows={4}
                id="date_description"
                label="تاریخ و زمان"
                value={data.date_description}
                onChange={(event) =>
                  setData({ ...data, date_description: event.target.value })
                }
              />
            </InputGroup>
            <InputGroup
              title="لطفا تاریخ را برای ثبت در سیستم مجددا انتخاب کنید."
              guide="کارت دعوت یک هفته پس از این تاریخ منقضی خواهد شد."
            >
              <DateInput
                value={data.date}
                onChangeInput={(value) => setData({ ...data, date: value })}
              />
            </InputGroup>
            <div className="create-page__invoice">
              <div className="create-page__invoice__title">فاکتور</div>
              <div className="create-page__invoice__pricing">
                <span>تعرفه کارت دعوت</span>
                <span>{price} تومان</span>
              </div>
            </div>
            <Button>پرداخت</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateCards;
