import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const noAuthPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token");
  const isLoginPage = noAuthPaths.includes(request.nextUrl.pathname);
  if (!authToken && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (authToken && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
