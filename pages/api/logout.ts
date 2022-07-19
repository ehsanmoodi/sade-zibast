import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../lib/session";
import { Token } from "../../lib/types";

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

function logoutRoute(req: NextApiRequest, res: NextApiResponse<Token>) {
  req.session.destroy();
  res.json({ isLoggedIn: false, token: "", exp: undefined });
}
