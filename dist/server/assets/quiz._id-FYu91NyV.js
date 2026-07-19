import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { R as Route, u as useAuth, a as useServerFn } from "./router-B0ohDPEK.js";
import { Clock, ChevronLeft, Send, ChevronRight } from "lucide-react";
import { B as Button } from "./button-DjOZMqFS.js";
import { I as Input } from "./input-D_U8fI25.js";
import { toast } from "sonner";
import { h as getFormForQuiz, i as submitQuiz } from "./submissions.functions-BnbuHG9j.js";
import { s as supabase } from "./client-DSqDj2cw.js";
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
import "@supabase/supabase-js";
function QuizRunner() {
  const {
    id
  } = Route.useParams();
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [pin, setPin] = useState("");
  const [pinInput, setPinInput] = useState("");
  const [cheatLogs, setCheatLogs] = useState([]);
  const startRef = useRef(Date.now());
  const [timeLeft, setTimeLeft] = useState(null);
  const [liveStatus, setLiveStatus] = useState("waiting");
  const fetchForm = useServerFn(getFormForQuiz);
  const submit = useServerFn(submitQuiz);
  const {
    data,
    refetch
  } = useQuery({
    queryKey: ["form-quiz", id, pin],
    enabled: !!user,
    queryFn: () => fetchForm({
      data: {
        formId: id,
        pin: pin || void 0
      }
    })
  });
  const form = data?.form;
  const questions = data?.questions ?? [];
  const requirePin = data?.requirePin;
  useEffect(() => {
    if (form?.status) setLiveStatus(form.status);
  }, [form?.status]);
  useEffect(() => {
    if (form?.start_mode !== "synchronized") return;
    const channel = supabase.channel(`form-${id}`).on("postgres_changes", {
      event: "UPDATE",
      schema: "public",
      table: "forms",
      filter: `id=eq.${id}`
    }, (payload) => {
      if (payload.new.status) setLiveStatus(payload.new.status);
    }).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [form?.start_mode, id]);
  useEffect(() => {
    if (!form || requirePin || form.start_mode === "synchronized" && liveStatus === "waiting") return;
    startRef.current = Date.now();
    if (form.has_timer && form.time_limit_minutes) {
      setTimeLeft(form.time_limit_minutes * 60);
    }
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => toast.error("Could not enter fullscreen mode"));
    }
    const logCheat = (reason) => {
      setCheatLogs((prev) => {
        const time = (/* @__PURE__ */ new Date()).toLocaleTimeString();
        return [...prev, {
          time,
          reason
        }];
      });
    };
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        toast.error("Anti-Cheat: You exited fullscreen! This has been logged.");
        logCheat("Exited Fullscreen");
      }
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        toast.error("Anti-Cheat: You switched tabs/apps! This has been logged.");
        logCheat("Window Hidden (Tab Switch)");
      }
    };
    const handleBlur = () => {
      toast.error("Anti-Cheat: Window lost focus! This has been logged.");
      logCheat("Window lost focus (Hover App/Split Screen)");
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      if (document.fullscreenElement) document.exitFullscreen().catch((e) => e);
    };
  }, [form, requirePin, liveStatus]);
  useEffect(() => {
    if (timeLeft == null) return;
    if (timeLeft <= 0) {
      handleSubmit(true);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v == null ? null : v - 1), 1e3);
    return () => clearTimeout(t);
  }, [timeLeft]);
  const current = questions[idx];
  const isLast = idx === questions.length - 1;
  async function handleSubmit(auto = false) {
    if (submitting || !user) return;
    setSubmitting(true);
    const duration = Math.round((Date.now() - startRef.current) / 1e3);
    try {
      const res = await submit({
        data: {
          formId: id,
          answers,
          durationSeconds: duration,
          cheatLogs
        }
      });
      toast.success(auto ? `Time's up! ${res.score}/${res.total}` : `Submitted — ${res.score}/${res.total}`);
      navigate({
        to: "/student"
      });
    } catch (e) {
      toast.error(e?.message ?? "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }
  if (!user || !form) return null;
  if (requirePin) {
    return /* @__PURE__ */ jsx("main", { className: "min-h-screen grid place-items-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-3xl p-8 max-w-sm w-full text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-2", children: "Restricted Access" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "This form requires a PIN to enter." }),
      /* @__PURE__ */ jsx(Input, { type: "text", value: pinInput, onChange: (e) => setPinInput(e.target.value), placeholder: "Enter PIN", className: "mb-4 text-center font-mono tracking-widest bg-input/40", onKeyDown: (e) => {
        if (e.key === "Enter") setPin(pinInput);
      } }),
      /* @__PURE__ */ jsx(Button, { onClick: () => setPin(pinInput), className: "w-full bg-gradient-to-r from-primary to-accent glow text-primary-foreground", children: "Verify PIN" })
    ] }) });
  }
  if (form.start_mode === "synchronized" && liveStatus === "waiting") {
    return /* @__PURE__ */ jsx("main", { className: "min-h-screen grid place-items-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-3xl p-8 max-w-sm w-full text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-2 text-primary", children: "Waiting Room" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "The instructor will start the exam shortly. Please wait here." }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" }) })
    ] }) });
  }
  if (questions.length === 0) {
    return /* @__PURE__ */ jsx("main", { className: "min-h-screen grid place-items-center", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "No questions in this quiz." }) });
  }
  const progress = (idx + 1) / questions.length * 100;
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen px-4 py-6 sm:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsxs("header", { className: "glass mb-6 flex items-center justify-between rounded-2xl px-5 py-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: form.title }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium", children: [
          "Slide ",
          idx + 1,
          " of ",
          questions.length
        ] })
      ] }),
      timeLeft != null && /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm ${timeLeft < 60 ? "bg-destructive/20 text-destructive" : "bg-primary/15 text-primary"}`, children: [
        /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
        formatClock(timeLeft)
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-6 h-1.5 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsx(motion.div, { className: "h-full bg-gradient-to-r from-primary to-accent", animate: {
      width: `${progress}%`
    } }) }),
    /* @__PURE__ */ jsx("div", { className: "relative min-h-[360px]", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", custom: direction, children: /* @__PURE__ */ jsxs(motion.div, { custom: direction, initial: {
      opacity: 0,
      x: direction * 80
    }, animate: {
      opacity: 1,
      x: 0
    }, exit: {
      opacity: 0,
      x: -direction * 80
    }, transition: {
      duration: 0.35,
      ease: "easeOut"
    }, className: "glass-strong rounded-3xl p-7", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: [
        "Question ",
        idx + 1
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-xl font-semibold leading-snug sm:text-2xl", children: current.question_text }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-3", children: current.question_type === "multiple_choice" && Array.isArray(current.options_json) ? current.options_json.map((opt) => {
        const active = answers[current.id] === opt;
        return /* @__PURE__ */ jsx("button", { onClick: () => setAnswers((a) => ({
          ...a,
          [current.id]: opt
        })), className: `w-full rounded-xl border px-4 py-3 text-left transition-all ${active ? "border-primary bg-primary/15 text-foreground glow" : "border-white/10 bg-background/30 hover:border-white/20"}`, children: opt }, opt);
      }) : /* @__PURE__ */ jsx(Input, { value: answers[current.id] ?? "", onChange: (e) => setAnswers((a) => ({
        ...a,
        [current.id]: e.target.value
      })), placeholder: "Type your answer…", className: "h-12 bg-input/40 border-white/10" }) })
    ] }, current.id) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "gap-1 border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors", disabled: idx === 0, onClick: () => {
        setDirection(-1);
        setIdx((i) => Math.max(0, i - 1));
      }, children: [
        /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
        " Previous"
      ] }),
      isLast ? /* @__PURE__ */ jsxs(Button, { onClick: () => handleSubmit(false), disabled: submitting, className: "gap-2 bg-gradient-to-r from-success to-primary text-primary-foreground glow hover:scale-[1.02] transition-transform", children: [
        /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
        submitting ? "Submitting…" : "Submit Answers"
      ] }) : /* @__PURE__ */ jsxs(Button, { onClick: () => {
        setDirection(1);
        setIdx((i) => Math.min(questions.length - 1, i + 1));
      }, className: "gap-1 bg-gradient-to-r from-primary to-accent text-primary-foreground glow hover:scale-[1.02] transition-transform", children: [
        "Next ",
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] }) });
}
function formatClock(s) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m.toString().padStart(2, "0")}:${r.toString().padStart(2, "0")}`;
}
export {
  QuizRunner as component
};
