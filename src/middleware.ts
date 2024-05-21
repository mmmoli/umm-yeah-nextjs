import { signinRoute } from "@/lib/shared/config/routes";
import { NextRequest } from "next/server";
import { auth, AuthedNextRequest } from "~shared/services/auth";
import { routeIsProtected } from "./lib/features/auth/protected-routes";

export default auth((request: AuthedNextRequest<NextRequest>) => {
  const currentUser = !!request.auth?.user;
  const isProtected = routeIsProtected(new URL(request.url).pathname);

  if (!currentUser && isProtected) {
    return Response.redirect(new URL(signinRoute(), request.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
