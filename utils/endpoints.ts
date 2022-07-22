export const url = (path: string) => {
  return process.env.NEXT_PUBLIC_API_URL + `/${path}`;
};

export const endPoints = {
  // Auth
  authSendCode: url("auth"), // POST
  authResendCode: url("auth/resend"), // POST
  authVerifyCode: url("auth/verify"), // POST
  // Profile
  profileInfo: url("identity"), // GET, POST
  // Files
  uploadFiles: url("files"), // POST
  // Cards
  cards: url("invite-cards"),
};
