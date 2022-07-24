import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/",
    "/([^/.]*)", // exclude `/public` files by matching all paths except for paths containing `.` (e.g. /logo.png)
    "/site/:path*",
    "/post/:path*",
    "/_sites/:path*",
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const hostname = req.headers.get("host") || "localhost:3000";

  const currentHost =
    process.env.NODE_ENV === "production"
      ? hostname
          .replace(`.sadezibast.ir`, "")
          .replace(`.sade-zibast.vercel.app`, "")
      : hostname.replace(`.localhost:3000`, "");

  if (currentHost == "/") {
    if (url.pathname === "/login") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    url.pathname = `${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  if (
    hostname === "localhost:3000" ||
    hostname === "sadezibast.ir" ||
    hostname === "sade-zibast.vercel.app"
  ) {
    url.pathname = `${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  url.pathname = `/_sites/${currentHost}${url.pathname}`;
  return NextResponse.rewrite(url);
}
