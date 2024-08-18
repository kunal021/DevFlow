import { clerkMiddleware } from "@clerk/nextjs/server";

// Array of public routes
const publicRoutes = [
  "/",
  "/sign-in(.*)", // Make the sign-in route a catch-all
  "/sign-up(.*)",
  "/api/webhooks",
  "/community",
  "/tags",
];

export default clerkMiddleware((auth, req) => {
  const { pathname } = req.nextUrl;

  // If the current route matches a public route pattern, skip protection
  if (publicRoutes.some((route) => new RegExp(`^${route}$`).test(pathname))) {
    return; // Skip protection for public routes
  }

  // Protect all other routes
  auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
