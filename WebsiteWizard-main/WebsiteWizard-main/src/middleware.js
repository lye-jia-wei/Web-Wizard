import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/chatbot", "/preview"],
});

export const config = {
  matcher: ["/((?!.\\..|_next).)", "/", "/(api|trpc)(.)"],
};
