import { getAppSession } from "./session.server-CFbITMpX.js";
import { redirect } from "@tanstack/react-router";
import "./server-BiCOV7P_.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
async function redirectToLogin() {
  const session = await getAppSession();
  if (!session.data.userId || !session.data.role) {
    throw redirect({ to: "/" });
  }
  return {
    id: session.data.userId,
    role: session.data.role,
    name: session.data.name ?? ""
  };
}
async function redirectUnlessAdmin() {
  const session = await getAppSession();
  if (!session.data.userId || !session.data.role) {
    throw redirect({ to: "/" });
  }
  if (session.data.role !== "admin") {
    throw redirect({ to: "/student" });
  }
  return {
    id: session.data.userId,
    role: session.data.role,
    name: session.data.name ?? ""
  };
}
async function redirectUnlessUser() {
  return redirectToLogin();
}
async function requireUser() {
  const session = await getAppSession();
  if (!session.data.userId || !session.data.role) {
    throw new Error("Not signed in");
  }
  return {
    id: session.data.userId,
    role: session.data.role,
    name: session.data.name ?? ""
  };
}
async function getUser() {
  const session = await getAppSession();
  if (!session.data.userId || !session.data.role) return null;
  return {
    id: session.data.userId,
    role: session.data.role,
    name: session.data.name ?? ""
  };
}
async function requireAdmin() {
  const u = await requireUser();
  if (u.role !== "admin") throw new Error("Admin only");
  return u;
}
async function requireStudent() {
  const u = await requireUser();
  if (u.role !== "student") throw new Error("Student only");
  return u;
}
export {
  getUser,
  redirectToLogin,
  redirectUnlessAdmin,
  redirectUnlessUser,
  requireAdmin,
  requireStudent,
  requireUser
};
