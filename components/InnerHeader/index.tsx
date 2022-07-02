import Link from "next/link";
import { Close } from "../../icons";

import type { InnerHeaderProps } from "./types";

const InnerHeader: React.FC<InnerHeaderProps> = ({ title, backLink }) => {
  return (
    <header className="inner-header">
      <Link href={backLink}>
        <a className="inner-header__back">
          <Close />
        </a>
      </Link>
      {title}
    </header>
  );
};

export default InnerHeader;
