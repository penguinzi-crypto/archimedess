import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { School, MapPin, Sparkles, UserRound, Lock, LogIn, Users, ArrowLeft } from "lucide-react";
import { u as useAuth, a as useServerFn, A as AnimatedBg, l as loginAsGuest, b as loginWithPin } from "./router-B0ohDPEK.js";
import { B as Button } from "./button-DjOZMqFS.js";
import { I as Input } from "./input-D_U8fI25.js";
import { toast } from "sonner";
import "@tanstack/react-query";
import "./server-BiCOV7P_.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "zod";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function Landing() {
  const [view, setView] = useState("initial");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    user,
    setUser
  } = useAuth();
  const navigate = useNavigate();
  const login = useServerFn(loginWithPin);
  const guestLogin = useServerFn(loginAsGuest);
  useEffect(() => {
    if (user) navigate({
      to: user.role === "admin" ? "/admin" : "/student"
    });
  }, [user, navigate]);
  async function handleLogin(e) {
    e.preventDefault();
    if (!pin.trim()) return;
    setLoading(true);
    try {
      const me = await login({
        data: {
          pin: pin.trim()
        }
      });
      setUser(me);
      toast.success(`Welcome, ${me.name}`);
      navigate({
        to: me.role === "admin" ? "/admin" : "/student"
      });
    } catch (err) {
      toast.error(err?.message?.includes("disabled") ? "Account disabled" : "Invalid PIN");
    } finally {
      setLoading(false);
    }
  }
  async function handleGuestLogin() {
    try {
      const me = await guestLogin();
      setUser(me);
      toast.success("Welcome, Guest");
      navigate({
        to: "/student"
      });
    } catch {
      toast.error("Could not sign in as guest");
    }
  }
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen overflow-hidden flex items-center justify-center px-4", children: [
    /* @__PURE__ */ jsx(AnimatedBg, {}),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" }),
      /* @__PURE__ */ jsx("div", { className: "absolute w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen translate-x-1/4 -translate-y-1/4" })
    ] }),
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30,
      scale: 0.95
    }, animate: {
      opacity: 1,
      y: 0,
      scale: 1
    }, transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.4
    }, className: "w-full max-w-5xl z-10 grid lg:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left space-y-6 hidden lg:block", children: [
        /* @__PURE__ */ jsx(motion.div, { initial: {
          scale: 0.8,
          opacity: 0
        }, animate: {
          scale: 1,
          opacity: 1
        }, transition: {
          delay: 0.2,
          type: "spring"
        }, className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent glow shadow-[0_0_40px_rgba(var(--primary),0.5)]", children: /* @__PURE__ */ jsx(School, { className: "h-8 w-8 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-black tracking-tight leading-tight", children: [
            "Calibungan ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "High School" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-md leading-relaxed", children: "Grade 12 STEM — Archimedes Section Portal. Access your grades, assignments, and school events in one place." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm font-medium text-muted-foreground pt-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "https://www.google.com/maps/place/15%C2%B035'35.5%22N+120%C2%B043'27.7%22E/@15.5931843,120.7237183,168m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d15.593183!4d120.724362?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-colors cursor-pointer", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-primary" }),
            " Victoria, Tarlac"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-accent" }),
            " Est. 2008"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-[2.5rem] p-8 sm:p-10 border-2 border-primary/20 shadow-[0_0_60px_-15px_rgba(120,119,198,0.3)] relative overflow-hidden backdrop-blur-3xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center lg:hidden mb-8", children: [
            /* @__PURE__ */ jsx(motion.div, { initial: {
              scale: 0.8,
              opacity: 0
            }, animate: {
              scale: 1,
              opacity: 1
            }, transition: {
              delay: 0.1,
              type: "spring"
            }, className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent glow mb-6", children: /* @__PURE__ */ jsx(School, { className: "h-8 w-8 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-black tracking-tight", children: [
              "Calibungan ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "High School" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-2", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold tracking-tight", children: [
              "Welcome to ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "School Portal" })
            ] }),
            /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
              view === "initial" && /* @__PURE__ */ jsxs(motion.p, { initial: {
                opacity: 0,
                y: 5
              }, animate: {
                opacity: 1,
                y: 0
              }, exit: {
                opacity: 0,
                y: -5
              }, className: "mt-3 text-sm text-muted-foreground flex items-center justify-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                " Please sign in to continue"
              ] }, "tagline-initial"),
              view === "choose" && /* @__PURE__ */ jsxs(motion.p, { initial: {
                opacity: 0,
                y: 5
              }, animate: {
                opacity: 1,
                y: 0
              }, exit: {
                opacity: 0,
                y: -5
              }, className: "mt-3 text-sm text-muted-foreground flex items-center justify-center gap-1.5", children: [
                /* @__PURE__ */ jsx(UserRound, { className: "h-3.5 w-3.5" }),
                " Choose an account type"
              ] }, "tagline-choose"),
              view === "student" && /* @__PURE__ */ jsxs(motion.p, { initial: {
                opacity: 0,
                y: 5
              }, animate: {
                opacity: 1,
                y: 0
              }, exit: {
                opacity: 0,
                y: -5
              }, className: "mt-3 text-sm text-muted-foreground flex items-center justify-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Lock, { className: "h-3.5 w-3.5 text-primary" }),
                " Secure authentication"
              ] }, "tagline-student")
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
            view === "initial" && /* @__PURE__ */ jsx(motion.div, { initial: {
              opacity: 0,
              y: 12
            }, animate: {
              opacity: 1,
              y: 0
            }, exit: {
              opacity: 0,
              y: -12
            }, transition: {
              duration: 0.25
            }, children: /* @__PURE__ */ jsxs(Button, { onClick: () => setView("choose"), className: "w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity glow gap-2", children: [
              /* @__PURE__ */ jsx(LogIn, { className: "h-5 w-5" }),
              "Sign In"
            ] }) }, "initial"),
            view === "choose" && /* @__PURE__ */ jsxs(motion.div, { initial: {
              opacity: 0,
              y: 12
            }, animate: {
              opacity: 1,
              y: 0
            }, exit: {
              opacity: 0,
              y: -12
            }, transition: {
              duration: 0.25
            }, className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("button", { onClick: () => setView("student"), className: "group w-full flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-[var(--shadow-glow)]", children: [
                /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors", children: /* @__PURE__ */ jsx(UserRound, { className: "h-5 w-5 text-primary" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Sign in as Student" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Use your PIN to access quizzes" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("button", { onClick: handleGuestLogin, className: "group w-full flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-accent/40 hover:bg-accent/5 hover:shadow-[var(--shadow-glow)]", children: [
                /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-colors", children: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-accent" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Sign in as Guest" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Browse quizzes without an account" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("button", { onClick: () => setView("initial"), className: "mx-auto flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors pt-1", children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3 w-3" }),
                " Back"
              ] })
            ] }, "choose"),
            view === "student" && /* @__PURE__ */ jsxs(motion.div, { initial: {
              opacity: 0,
              y: 12
            }, animate: {
              opacity: 1,
              y: 0
            }, exit: {
              opacity: 0,
              y: -12
            }, transition: {
              duration: 0.25
            }, children: [
              /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
                  /* @__PURE__ */ jsx(Input, { value: pin, onChange: (e) => setPin(e.target.value), placeholder: "Enter your PIN", inputMode: "numeric", type: "password", autoFocus: true, className: "h-12 pl-10 text-center text-lg tracking-[0.4em] font-mono bg-input/40 border-white/10" })
                ] }),
                /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, className: "w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity glow", children: loading ? "Signing in…" : "Continue" })
              ] }),
              /* @__PURE__ */ jsxs("button", { onClick: () => {
                setView("choose");
                setPin("");
              }, className: "mx-auto mt-4 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors", children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3 w-3" }),
                " Back"
              ] })
            ] }, "student")
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(motion.footer, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.4,
      duration: 0.5
    }, className: "fixed bottom-0 inset-x-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-screen-xl px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl px-6 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground/80 tracking-wide", children: "12 — Archimedes" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("a", { href: "https://tiktok.com/officialarchimedeschs", target: "_blank", rel: "noopener noreferrer", className: "block hover:opacity-80 transition-opacity", "aria-label": "Follow us on TikTok", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 36 36", className: "h-8 w-8", children: [
          /* @__PURE__ */ jsx("rect", { width: "36", height: "36", rx: "7", fill: "#000000" }),
          /* @__PURE__ */ jsx("path", { d: "M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h.05A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z", fill: "#fff", transform: "matrix(0.04 0 0 0.04 9 7.5)" })
        ] }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/officialchs12archimedes", target: "_blank", rel: "noopener noreferrer", className: "block hover:opacity-80 transition-opacity", "aria-label": "Follow us on Facebook", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 36 36", className: "h-8 w-8", children: [
          /* @__PURE__ */ jsx("rect", { width: "36", height: "36", rx: "7", fill: "#1877F2" }),
          /* @__PURE__ */ jsx("path", { d: "M25 18.09h-3.26v9.66h-4v-9.66h-2.35V14.6h2.35v-2.23c0-1.95.93-5.02 5.03-5.02l3.69.02v3.38h-2.68c-.44 0-1.06.22-1.06 1.14v2.72H26.4l-.47 3.49h-2.67z", fill: "#fff", transform: "translate(1, 1) scale(0.94)" })
        ] }) })
      ] })
    ] }) }) })
  ] });
}
export {
  Landing as component
};
