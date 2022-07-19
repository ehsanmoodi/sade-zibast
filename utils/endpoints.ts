export const url = (path: string) => {
  return process.env.NEXT_PUBLIC_API_URL + `/${path}`;
};

export const endPoints = {
  authSendCode: url("auth"),
  authResendCode: url("auth/resend"),
  authVerifyCode: url("auth/verify"),
};
