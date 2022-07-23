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

  // console.log(hostname);

  const currentHost =
    process.env.NODE_ENV === "production"
      ? hostname
          .replace(`.sadezibast.ir`, "")
          .replace(`.sade-zibast.vercel.app`, "")
      : hostname.replace(`.localhost:3000`, "");

  if (
    hostname === "localhost:3000" ||
    hostname === "sadezibast.ir" ||
    hostname === "sade-zibast.vercel.app"
  ) {
    url.pathname = `${url.pathname}`;
    console.log(url.pathname);
    console.log("im running");
    return NextResponse.rewrite(url);
  }

  console.log("im running here");

  // rewrite everything else to `/_sites/[site] dynamic route
  url.pathname = `/_sites/${currentHost}${url.pathname}`;
  return NextResponse.rewrite(url);
}
