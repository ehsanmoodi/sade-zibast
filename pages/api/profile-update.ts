import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import fetchJson, {
  initGetRequest,
  initPostRequest,
} from "../../lib/fetchJson";
import { sessionOptions } from "../../lib/session";
import { endPoints } from "../../utils/endpoints";
import { messages } from "../../utils/messages";

export default withIronSessionApiRoute(profileUpdateRoute, sessionOptions);

async function profileUpdateRoute(req: NextApiRequest, res: NextApiResponse) {
  const sessionToken = req.session.token;
  const { name, lastname } = await req.body;

  if (!sessionToken || sessionToken.isLoggedIn === false) {
    res.status(401).end();
    return;
  }

  try {
    const response: any = await fetchJson(
      endPoints.profileInfo,
      initPostRequest(
        { name, lastname },
        { Authorization: `Bearer ${sessionToken.token}` }
      )
    );

    res.status(200).json({
      id: response.data.id || "",
      name: response.data.name || "",
      lastname: response.data.lastname || "",
      mobile: response.data.mobile || "",
    });
  } catch (error) {
    res.status(500).json({
      id: "",
      name: "",
      lastname: "",
      mobile: "",
    });
  }
}
