import { Menu, Transition } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import ToggleIcon from "../../components/ToggleIcon";
import {
  AccountCircle,
  CreditCard,
  EnvelopeInvitation,
  Exit,
  Heart,
  LogoLinear,
  SingleUser,
} from "../../icons";
import fetchJson, { initPostRequest } from "../../lib/fetchJson";
import useToken from "../../lib/useToken";

interface Props {
  metaTitle: string;
  metaDescription: string;
  title: string;
  children?: JSX.Element[] | JSX.Element;
}

const menuItems: {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}[] = [
  {
    key: "cards",
    label: "کارت‌های من",
    href: "/panel/cards",
    icon: <EnvelopeInvitation />,
  },
  {
    key: "my-account",
    label: "حساب کاربری",
    href: "/panel/profile",
    icon: <SingleUser />,
  },
  {
    key: "payments",
    label: "پرداخت‌ها",
    href: "/panel/payment",
    icon: <CreditCard />,
  },
];

const PanelTemplate: React.FC<Props> = ({
  metaTitle,
  metaDescription,
  title,
  children,
}) => {
  const { token, mutateToken } = useToken({
    redirectTo: "/login",
  });

  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <main className="panel">
        {token && (
          <>
            <div className="panel__menu">
              <ToggleIcon onClick={toggleMenu} isActive={isActive} />

              <Link href="/">
                <a className="panel__menu__logo">
                  <LogoLinear />
                </a>
              </Link>

              <Menu as="div" className="panel__menu__account">
                <Menu.Button className="panel__menu__account__toggle">
                  <AccountCircle />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items as="ul" className="panel__menu__account__body">
                    <Menu.Item
                      as="li"
                      className="panel__menu__account__body__item"
                    >
                      <a
                        href=""
                        onClick={async (event) => {
                          event.preventDefault();
                          mutateToken(
                            await fetchJson("/api/logout", initPostRequest()),
                            false
                          );

                          router.push("/");
                        }}
                      >
                        <Exit />
                        خروج از حساب
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>

              <ul className={`panel__menu__items ${isActive && "open"}`}>
                {menuItems.map((item) => (
                  <li key={item.key}>
                    <Link href={item.href}>
                      <a
                        className={
                          router.pathname === item.href ? "active" : ""
                        }
                      >
                        {item.icon}
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
                <li className="desktop-logout">
                  <a
                    href=""
                    onClick={async (event) => {
                      event.preventDefault();
                      mutateToken(
                        await fetchJson("/api/logout", initPostRequest()),
                        false
                      );

                      router.push("/");
                    }}
                  >
                    <Exit />
                    خروج از حساب
                  </a>
                </li>
              </ul>
              <span className="panel__menu__text">
                ساخته شده با
                <Heart />
              </span>
            </div>
            <div className="panel__body">
              <h1 className="panel__body__title">{title}</h1>
              <div className="panel__body__content">{children}</div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default PanelTemplate;
