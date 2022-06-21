import Link from "next/link";
import { Add } from "../../icons";

const NewInvitationCard: React.FC = () => {
  return (
    <Link href="/panel/cards/new">
      <a className="new-invitation-card">
        <Add />
        ایجاد کارت جدید
      </a>
    </Link>
  );
};

export default NewInvitationCard;
