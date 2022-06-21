import Link from "next/link";
import { useState } from "react";
import { Delete, Edit } from "../../icons";
import Switch from "../Switch";

import type { InvitationCardProps } from "./types";

const InvitationCard: React.FC<InvitationCardProps> = ({
  id,
  title,
  link,
  active,
}) => {
  const [switchState, setSwitchState] = useState(active);

  return (
    <div className="invitation-card">
      <h2 className="invitation-card__title">{title}</h2>
      <Link href={link}>
        <a className="invitation-card__link">{link}</a>
      </Link>
      <div className="invitation-card__actions">
        <div>
          <Switch
            onChange={() => setSwitchState(!switchState)}
            checked={switchState}
            id={`invitation-card__actions__state${id}`}
            label={switchState ? "فعال" : "در انتظار پرداخت"}
          />
        </div>
        <div className="invitation-card__actions__btns">
          <Link href="#">
            <a>
              <Delete />
            </a>
          </Link>
          <Link href="#">
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
