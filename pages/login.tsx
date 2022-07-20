import type { NextPage } from "next";
import Head from "next/head";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Button, InnerHeader, Input } from "../components";
import { Edit, Loader } from "../icons";
import fetchJson, { FetchError, initPostRequest } from "../lib/fetchJson";
import { endPoints } from "../utils/endpoints";
import { formatSeconds } from "../utils/time";

import { validateMobile } from "../utils/validator";
import useToken from "../lib/useToken";
import { messages } from "../utils/messages";

const Login: NextPage = () => {
  const { mutateToken } = useToken({
    redirectTo: "/panel/cards",
    redirectIfFound: true,
  });

  const [enterMobileStep, setEnterMobileStep] = useState<boolean>(true);
  const [mobile, setMobile] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [processing, setProcessing] = useState<boolean>(false);

  const sendCode = async () => {
    setProcessing(true);

    if (!validateMobile(mobile)) {
      toast.error(messages.invalidMobileError);
      setProcessing(false);
      return;
    }

    try {
      const response: any = await fetchJson(
        endPoints.authSendCode,
        initPostRequest({ mobile })
      );

      setProcessing(false);
      setEnterMobileStep(false);
      setTime(90);
      setToken(response.data.token);
    } catch (error) {
      setProcessing(false);
      toast.error(messages.generalError);
      console.log(error);
    }
  };

  const resendCode = async () => {
    setProcessing(true);
    setVerificationCode("");

    try {
      await fetchJson(endPoints.authResendCode, initPostRequest({ token }));

      setProcessing(false);
      setTime(90);
      toast.success(messages.successResendCode);
    } catch (error) {
      setProcessing(false);
      toast.error(messages.generalError);
      console.log(error);
    }
  };

  const verifyCode = async () => {
    if (verificationCode.length === 4 || verificationCode.length >= 4) {
      setProcessing(true);

      const body = {
        token,
        code: verificationCode,
      };

      try {
        mutateToken(await fetchJson("/api/login", initPostRequest(body)));
      } catch (error) {
        setProcessing(false);

        if (
          error instanceof FetchError &&
          error.data.message === "Data Validation Failed."
        ) {
          toast.error(messages.invalidCodeError);
        } else {
          toast.error(messages.generalError);
          console.error("An unexpected error happened:", error);
        }
      }
    }
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

  useEffect(() => {
    verifyCode();
  }, [verificationCode]);

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
                disabled={processing}
                id="mobile"
                type="text"
                label="شماره موبایل"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
              />
              <Button
                onClick={sendCode}
                disabled={processing}
                processing={processing}
              >
                دریافت کد فعالسازی
              </Button>
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
                  setEnterMobileStep(true);
                }}
                className="login-page__edit-number"
              >
                <Edit />
                {mobile}
              </button>
              <Input
                disabled={processing}
                id="verificationCode"
                type="number"
                label="کد ورود"
                value={verificationCode}
                onChange={(event) => setVerificationCode(event.target.value)}
              />
              {processing ? (
                <Loader className="loader loader--sea-green" />
              ) : (
                <>
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
                        resendCode();
                      }}
                      className="login-page__request-again"
                    >
                      درخواست کد فعالسازی مجدد
                    </a>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Login;
