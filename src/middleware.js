export function middleware(request) {
  const currentUser = request.cookies.get("user_id")?.value;

  if (!currentUser && !request.nextUrl.pathname.startsWith("/sign-in")) {
    return Response.redirect(new URL("/sign-in", request.url));
  }

}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
