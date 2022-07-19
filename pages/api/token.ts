import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../lib/session";
import { Token } from "../../lib/types";

export default withIronSessionApiRoute(tokenRoute, sessionOptions);

async function tokenRoute(req: NextApiRequest, res: NextApiResponse<Token>) {
  // Add a case for refreshing token
  if (
    req.session.token &&
    req.session.token.exp &&
    new Date() < new Date(req.session.token.exp * 1000)
  ) {
    res.json(req.session.token);
  } else {
    res.json({
      token: "",
      exp: undefined,
      isLoggedIn: false,
    });
  }
}
