import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, InnerHeader, Input } from "../components";
import { Edit } from "../icons";
import { formatSeconds } from "../utils/formatSeconds";

const Login: NextPage = () => {
  const [enterMobileStep, setEnterMobileStep] = useState<boolean>(true);
  const [mobile, setMobile] = useState<number>();
  const [verificationCode, setVerificationCode] = useState<number>();
  const [time, setTime] = useState<number>(0);

  const sendCode = () => {
    setEnterMobileStep(false);
    setTime(10);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [time]);

  return (
    <>
      <Head>
        <title>ورود به پنل</title>
        <meta
          name="description"
          content="با وارد کردن شماره موبایل خود وارد حساب کاربری خود شوید"
        />
      </Head>

      <InnerHeader title="ورود به حساب کاربری" backLink="/" />

      <main>
        <div className="login-page">
          {enterMobileStep && (
            <div>
              <p className="login-page__text">
                لطفا جهت دریافت کد فعالسازی شماره موبایل خود را وارد کنید
              </p>
              <Input
                id="mobile"
                type="number"
                label="شماره موبایل"
                value={mobile}
                onChange={(event) => setMobile(Number(event.target.value))}
              />
              <Button onClick={sendCode}>دریافت کد فعالسازی</Button>
            </div>
          )}

          {!enterMobileStep && (
            <div>
              <p className="login-page__text">
                کد فعالسازی به شماره شما پیامک شد. <br />
                لطفا کد را وارد کنید.
              </p>
              <button
                onClick={() => {
                  if (time === 0) {
                    setEnterMobileStep(true);
                  }
                }}
                className="login-page__edit-number"
              >
                <Edit />
                09902684169
              </button>
              <Input
                id="verificationCode"
                type="number"
                label="کد ورود"
                value={verificationCode}
                onChange={(event) =>
                  setVerificationCode(Number(event.target.value))
                }
              />
              {time !== 0 && (
                <span className="login-page__timer">
                  {formatSeconds(time)} تا درخواست مجدد کد
                </span>
              )}
              {time === 0 && (
                <a
                  href=""
                  onClick={(event) => {
                    event.preventDefault();
                    sendCode();
                  }}
                  className="login-page__request-again"
                >
                  درخواست کد فعالسازی مجدد
                </a>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Login;
