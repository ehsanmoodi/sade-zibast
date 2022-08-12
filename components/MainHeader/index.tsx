import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AccountCircle, LogoLinear } from "../../icons";
import fetchJson, { initGetRequest } from "../../lib/fetchJson";
import useToken from "../../lib/useToken";
import { endPoints } from "../../utils/endpoints";
import ToggleIcon from "../ToggleIcon";

import type { LinkProps } from "./types";

const links: LinkProps[] = [
  {
    key: "home",
    label: "خانه",
    href: "/",
  },
  {
    key: "blog",
    label: "بلاگ",
    href: "/blog",
  },
  {
    key: "about",
    label: "درباره‌ما",
    href: "/about",
  },
  {
    key: "contact",
    label: "تماس‌با‌ما",
    href: "/contact",
  },
];

const MainHeader = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [name, setName] = useState<string>("ورود به حساب");
  const { token: sessionToken } = useToken();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    (async () => {
      if (sessionToken) {
        try {
          const response: any = await fetchJson(
            endPoints.profileInfo,
            initGetRequest({
              Authorization: `Bearer ${sessionToken?.token}`,
            })
          );

          setName(`${response.data.name} ${response.data.lastname}`);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, [sessionToken]);

  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        <ToggleIcon onClick={toggleMenu} isActive={isActive} />

        <Link href="/">
          <a className="header__logo">
            <LogoLinear />
          </a>
        </Link>

        <ul className={`header__links ${isActive && "open"}`}>
          {links.map((link: LinkProps) => (
            <li key={link.key}>
              <Link href={link.href}>
                <a className={router.pathname === link.href ? "active" : ""}>
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/panel/cards">
          <a className="header__action">
            <span>{name}</span>
            <AccountCircle />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
