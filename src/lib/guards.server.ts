import { getAppSession } from "./session.server";
import { redirect } from "@tanstack/react-router";

// ── beforeLoad redirect guards ───────────────────────────────────
// These throw a TanStack Router `redirect` so the server rejects the
// navigation *before* any component code is evaluated or sent.

/** Redirect to login if the session has no authenticated user. */
export async function redirectToLogin() {
  const session = await getAppSession();
  if (!session.data.userId || !session.data.role) {
    throw redirect({ to: "/" });
  }
  return {
    id: session.data.userId,
    role: session.data.role,
    name: session.data.name ?? "",
  };
}

/** Redirect non-admin users to login (or to /student if they are a student). */
export async function redirectUnlessAdmin() {
  const session = await getAppSession();
  if (!session.data.userId || !session.data.role) {
    throw redirect({ to: "/" });
  }
  if (session.data.role !== "admin") {
    throw redirect({ to: "/student" });
  }
  return {
    id: session.data.userId,
    role: session.data.role as "admin",
    name: session.data.name ?? "",
  };
}

/** Redirect to login if not authenticated (any role allowed). */
export async function redirectUnlessUser() {
  return redirectToLogin();
}

// ── Server function guards (unchanged) ──────────────────────────
// These throw plain Errors for RPC-style server function calls.

export async function requireUser() {
  const session = await getAppSession();
  if (!session.data.userId || !session.data.role) {
    throw new Error("Not signed in");
  }
  return {
    id: session.data.userId,
    role: session.data.role,
    name: session.data.name ?? "",
  };
}

export async function getUser() {
  const session = await getAppSession();
  if (!session.data.userId || !session.data.role) return null;
  return {
    id: session.data.userId,
    role: session.data.role,
    name: session.data.name ?? "",
  };
}

export async function requireAdmin() {
  const u = await requireUser();
  if (u.role !== "admin") throw new Error("Admin only");
  return u;
}

export async function requireStudent() {
  const u = await requireUser();
  if (u.role !== "student") throw new Error("Student only");
  return u;
}
