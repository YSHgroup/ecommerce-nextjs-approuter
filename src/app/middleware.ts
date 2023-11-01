export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/home", "/user/:path*", "shopping/cart", "check-out"],
};