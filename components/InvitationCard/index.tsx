import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Delete, Edit } from "../../icons";
import fetchJson, { initPostRequest } from "../../lib/fetchJson";
import useToken from "../../lib/useToken";
import Switch from "../Switch";

import type { InvitationCardProps } from "./types";

const InvitationCard: React.FC<InvitationCardProps> = ({
  id,
  title,
  link,
  paid,
}) => {
  const router = useRouter();
  const [switchState, setSwitchState] = useState(paid);
  const { token: sessionToken } = useToken();

  return (
    <div className="invitation-card">
      <h2 className="invitation-card__title">{title}</h2>
      <Link
        href={
          process.env.NODE_ENV === "production"
            ? `https://${link}`
            : `http://${link}`
        }
      >
        <a className="invitation-card__link">{link}</a>
      </Link>
      <div className="invitation-card__actions">
        <div>
          <Switch
            onChange={async () => {
              if (!paid) {
                setSwitchState(!switchState);

                try {
                  const response: any = await fetchJson(
                    `${process.env.NEXT_PUBLIC_API_URL}/invite-cards/${id}/payment`,
                    initPostRequest(
                      {},
                      {
                        Authorization: `Bearer ${sessionToken?.token}`,
                      }
                    )
                  );

                  router.push(response.data.url);
                } catch (error) {
                  console.log(error);
                }
              }
            }}
            checked={switchState}
            id={`invitation-card__actions__state${id}`}
            label={switchState ? "فعال" : "در انتظار پرداخت"}
            disabled={paid}
          />
        </div>
        <div className="invitation-card__actions__btns">
          {/* <Link href="#">
            <a>
              <Delete />
            </a>
          </Link> */}
          <Link href={`/panel/cards/${id}`}>
            <a>
              <Edit />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
