import jwt from "jsonwebtoken";
import { withIronSessionApiRoute } from "iron-session/next";

import { NextApiRequest, NextApiResponse } from "next";
import fetchJson, { initPostRequest } from "../../lib/fetchJson";
import { sessionOptions } from "../../lib/session";
import { endPoints } from "../../utils/endpoints";
import { messages } from "../../utils/messages";

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { token, code } = await req.body;

  try {
    const response: any = await fetchJson(
      endPoints.authVerifyCode,
      initPostRequest({ token, code })
    );

    const decodedJWT = jwt.decode(response.data.token) as jwt.JwtPayload;
    const sessionToken = {
      token: response.data.token,
      exp: decodedJWT.exp,
      isLoggedIn: true,
    };

    req.session.token = sessionToken;

    await req.session.save();

    res.json({
      message: messages.successfulLogin,
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
}
