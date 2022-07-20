import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import fetchJson, { initGetRequest } from "../../lib/fetchJson";
import { sessionOptions } from "../../lib/session";
import { ProfileType } from "../../lib/types";
import { endPoints } from "../../utils/endpoints";

export default withIronSessionApiRoute(profileRoute, sessionOptions);

async function profileRoute(
  req: NextApiRequest,
  res: NextApiResponse<ProfileType>
) {
  const sessionToken = req.session.token;

  if (!sessionToken || sessionToken.isLoggedIn === false) {
    res.status(401).end();
    return;
  }

  try {
    const response: any = await fetchJson(
      endPoints.profileInfo,
      initGetRequest({
        Authorization: `Bearer ${sessionToken.token}`,
      })
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
