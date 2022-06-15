import Link from "next/link";
import { LeftArrow } from "../../icons";
import type { ButtonLinkProps } from "./types";

const ButtonLink: React.FC<ButtonLinkProps> = ({
  text,
  href,
  mode = "primary",
}) => {
  return (
    <Link href={href}>
      <a className={`button-link button-link--${mode}`}>
        {text}
        <LeftArrow className="button-link__icon" />
      </a>
    </Link>
  );
};

export default ButtonLink;
