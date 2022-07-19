import { IronSessionOptions } from "iron-session";
import { Token } from "./types";

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: "sade-zibast/nextjs",
  cookieOptions: {
    secure: process.env.NODE_ENV == "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    token?: Token;
  }
}
