import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { AccountCircle, LogoLinear } from "../../icons";

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

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        <button
          onClick={toggleMenu}
          className={`header__toggle ${isActive && "open"}`}
        >
          <span></span>
          <span></span>
        </button>

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

        <Link href="/panel">
          <a className="header__action">
            <span>ورود به حساب</span>
            <AccountCircle />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
