import { useSession } from "@tanstack/react-start/server";

export type SessionData = {
  userId?: string;
  role?: "admin" | "student";
  name?: string;
  isSuperAdmin?: boolean;
  pinMustChange?: boolean;
};

const SESSION_PASSWORD =
  process.env.SESSION_SECRET ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "dev-only-fallback-not-for-production-min-32chars";

if (!process.env.SESSION_SECRET) {
  console.warn(
    "[session] SESSION_SECRET not set — falling back to " +
      (process.env.SUPABASE_SERVICE_ROLE_KEY
        ? "SUPABASE_SERVICE_ROLE_KEY"
        : "hardcoded dev secret") +
      ". Set SESSION_SECRET in .env for production.",
  );
}

export function getAppSession() {
  return useSession<SessionData>({
    password: SESSION_PASSWORD,
    name: "quizportal_session",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    cookie: {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    },
  });
}
