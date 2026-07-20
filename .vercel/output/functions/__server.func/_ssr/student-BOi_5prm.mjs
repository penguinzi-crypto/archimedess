import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery, a as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { u as ue } from "../_libs/sonner.mjs";
import { u as useAuth, a as useServerFn } from "./router-XPOIPsTP.mjs";
import { g as getFeatured, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as getAssignments, e as getStudentCompletions, m as markAssignmentDone, f as DialogDescription } from "./assignments.functions-OqtNG9iY.mjs";
import { B as Button } from "./button-DjOZMqFS.mjs";
import { l as listPublishedForms, g as getMySubmissions, a as getQuestionCount } from "./submissions.functions-BsjqY3T8.mjs";
import "../_libs/seroval.mjs";
import { M as Menu, L as LogOut, G as GraduationCap, X, H as House, B as BookOpen, F as FileText, U as Users, S as Shield, C as Calendar, D as Dices, a as Star, b as Sparkles, c as Crown, d as Check, e as Clock, f as Lock, R as Rows3, g as LayoutGrid, T as Target, h as Flame, i as ChevronRight, j as ChevronLeft, k as Trophy, Z as Zap, l as FileQuestion, m as Hash, E as Eye, A as Award, n as Map } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/scheduler.mjs";
import "stream";
import "util";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "./server-Bh35ipan.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const STUDENTS = ["Airah Mae Asuncion", "Aj Vivas", "Angelica Jimenez", "Angelo Clariz", "Cheska Ivy Libunao", "Cyus Lucas", "Denzer Molina", "Dion Tuquero Mendoza", "Eulycis Valdez", "Francis John Cayabyab", "Jade Cyrus Bonilla", "Jazmin Guillermo", "Jessa Mae Daluyen", "Jireh Anne Martinez", "John Oliver Rayray", "Johncarl Manzano", "Louise Gaile Cabato", "Loyd Adrian Lucas", "Mark Jose", "Nash Grospe", "Precious Lucas", "Prince Aron", "Princess Saclao", "Robby Correa", "Sophia T. Sabado", "Willy Gaborno"];
const OFFICERS = [{
  name: "Francis John Cayabyab",
  position: "President"
}, {
  name: "Sophia T. Sabado",
  position: "Vice President"
}, {
  name: "Airah Mae Asuncion",
  position: "Secretary"
}, {
  name: "Jessa Mae Daluyen",
  position: "Treasurer"
}, {
  name: "Cheska Ivy Libunao",
  position: "Auditor"
}, {
  name: "Robby Correa",
  position: "Peace Officer"
}, {
  name: "Denzer Molina",
  position: "Public Information Officer"
}, {
  name: "Nash Grospe",
  position: "Escort"
}, {
  name: "Precious Lucas",
  position: "Muse"
}];
const FACULTY = [{
  name: "Aisa Crisologo",
  position: "Class Adviser"
}, {
  name: "Agapito Gonzaga",
  position: "School Principal"
}];
const PROFILE_PICS = {
  "Agapito Gonzaga": "Agapito Gonzaga.jfif",
  "Airah Mae Asuncion": "Airah Asuncion.jfif",
  "Aisa Crisologo": "Aisa Crisologo.jfif",
  "Aj Vivas": "Allan Jr Vivas.jpg",
  "Angelo CLariz": "Angelo Clariz.jpg",
  "Cheska Ivy Libunao": "Cheska Ivy Libunao.jpg",
  "Cyus Lucas": "Cyus Lucas.jfif",
  "Denzer Molina": "Denzer-Molina.png",
  "Dion Tuquero Mendoza": "Dion Mendoza.jpg",
  "Francis John Cayabyab": "Francis John Cayabyab.png",
  "Jessa Mae Daluyen": "Jessa Mae Daluyen.jfif",
  "Jireh Anne Martinez": "Jireh Anne Martinez.jpg",
  "Louise Gaile Cabato": "Louise Gaile Cabato.jfif",
  "Mark Jose": "Mark Jose.jfif",
  "Nash Grospe": "Nash Aron Grospe.jpg",
  "Precious Lucas": "Precious Lucas.jfif",
  "Sophia T. Sabado": "Sophia Sabado.jfif",
  "Willy Gab": "Willy Gaborno.jpg"
};
function getProfilePic(name) {
  const file = PROFILE_PICS[name];
  return file ? `/Profile/${file}` : `/Profile/NoPFP.jfif`;
}
function SectionDashboard() {
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [activeSection, setActiveSection] = reactExports.useState("home");
  function goTo(section) {
    setActiveSection(section);
    setSidebarOpen(false);
  }
  if (!user) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 glass border-b border-white/10 shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSidebarOpen(true), className: "grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10", "aria-label": "Open menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Section" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold sm:text-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "12 — Archimedes" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-sm text-muted-foreground sm:block", children: user.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: async () => {
          await logout();
          navigate({
            to: "/"
          });
        }, className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Sign out"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, onClick: () => setSidebarOpen(false), className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" }, "overlay"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.aside, { initial: {
        x: "-100%"
      }, animate: {
        x: 0
      }, exit: {
        x: "-100%"
      }, transition: {
        type: "spring",
        damping: 26,
        stiffness: 300
      }, className: "fixed inset-y-0 left-0 z-50 w-72 glass-strong overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-6 w-6 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gradient", children: "12 — Archimedes" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSidebarOpen(false), className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "px-3 pb-6 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem, { icon: House, label: "Home", active: activeSection === "home", onClick: () => goTo("home") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem, { icon: BookOpen, label: "Assignments", active: activeSection === "assignments", onClick: () => goTo("assignments") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem, { icon: FileText, label: "Quizzes", active: activeSection === "quizzes", onClick: () => goTo("quizzes") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem, { icon: Users, label: "Students", active: activeSection === "students", onClick: () => goTo("students") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem, { icon: Shield, label: "Officers", active: activeSection === "officers", onClick: () => goTo("officers") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem, { icon: Calendar, label: "Schedule", active: activeSection === "schedule", onClick: () => goTo("schedule") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarItem, { icon: Dices, label: "Games", active: activeSection === "games", onClick: () => goTo("games") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 mx-5 pt-4 space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-2", children: "Faculty" }),
          FACULTY.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: f.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: f.position })
          ] }, f.name))
        ] }) })
      ] }, "sidebar")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 py-8 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      activeSection === "home" && /* @__PURE__ */ jsxRuntimeExports.jsx(HomeSection, {}, "home"),
      activeSection === "assignments" && /* @__PURE__ */ jsxRuntimeExports.jsx(AssignmentsSection, {}, "assignments"),
      activeSection === "quizzes" && /* @__PURE__ */ jsxRuntimeExports.jsx(QuizzesSection, {}, "quizzes"),
      activeSection === "students" && /* @__PURE__ */ jsxRuntimeExports.jsx(StudentsSection, {}, "students"),
      activeSection === "officers" && /* @__PURE__ */ jsxRuntimeExports.jsx(OfficersSection, {}, "officers"),
      activeSection === "schedule" && /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleSection, {}, "schedule"),
      activeSection === "games" && /* @__PURE__ */ jsxRuntimeExports.jsx(GamesSection, {}, "games")
    ] }) })
  ] });
}
function SidebarItem({
  icon: Icon,
  label,
  active,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${active ? "bg-gradient-to-r from-primary/15 to-accent/10 text-primary shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-primary/20" : "text-foreground/70 hover:bg-white/10 hover:text-foreground hover:shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-transparent"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4.5 w-4.5 ${active ? "text-primary" : ""}` }),
    label
  ] });
}
function HomeSection() {
  const fetchFeatured = useServerFn(getFeatured);
  const {
    data: featuredData,
    isLoading
  } = useQuery({
    queryKey: ["featured-of-day"],
    queryFn: () => fetchFeatured()
  });
  const [showDetails, setShowDetails] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 16
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -16
  }, transition: {
    duration: 0.3
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold sm:text-3xl", children: [
        "Welcome to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "12 — Archimedes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Grade 12 STEM — Calibungan High School" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-3xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-6 pt-6 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Featured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Updated by admin" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-64 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground animate-pulse", children: "Loading..." }) }) : featuredData?.url ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col rounded-2xl border border-white/10 bg-black/10 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featuredData.url, alt: "Featured post", className: "max-h-[500px] w-auto object-contain rounded-lg shadow-lg" }) }),
        featuredData.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 p-4 bg-black/20 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setShowDetails(true), className: "text-primary hover:text-primary hover:bg-primary/10", children: "See more details.." }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-8 w-8 text-muted-foreground/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No featured post right now — check back later!" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showDetails, onOpenChange: setShowDetails, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "glass-strong border-white/10 sm:max-w-[500px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-xl", children: "Featured Details" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-white/90 whitespace-pre-wrap leading-relaxed", children: featuredData?.description }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuickCard, { icon: Users, label: "Students", value: STUDENTS.length.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuickCard, { icon: Shield, label: "Officers", value: OFFICERS.length.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(QuickCard, { icon: Crown, label: "Section", value: "Archimedes" })
    ] })
  ] });
}
function QuickCard({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-2xl font-bold text-gradient", children: value })
  ] });
}
function HorizontalCarousel({
  children,
  itemCount
}) {
  const scrollRef = reactExports.useRef(null);
  const [isPaused, setIsPaused] = reactExports.useState(false);
  const [scrollPos, setScrollPos] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (isPaused || !scrollRef.current) return;
    const el = scrollRef.current;
    const speed = 0.6;
    let raf;
    const animate = () => {
      if (!el) return;
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollLeft = 0;
      }
      setScrollPos(el.scrollLeft);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isPaused]);
  const scrollBy = reactExports.useCallback((dir) => {
    scrollRef.current?.scrollBy({
      left: dir * 320,
      behavior: "smooth"
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => scrollBy(-1), className: "absolute -left-3 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full glass-strong border border-white/15 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:border-primary/40", "aria-label": "Scroll left", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => scrollBy(1), className: "absolute -right-3 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full glass-strong border border-white/15 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:border-primary/40", "aria-label": "Scroll right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, onMouseEnter: () => setIsPaused(true), onMouseLeave: () => setIsPaused(false), className: "flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-1", style: {
      scrollbarWidth: "none",
      msOverflowStyle: "none"
    }, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" })
  ] });
}
function getStudentStatus(name) {
  const officer = OFFICERS.find((o) => o.name === name);
  if (officer) return {
    tag: officer.position,
    color: "text-primary bg-primary/10 border-primary/20",
    icon: Shield
  };
  return {
    tag: "Student",
    color: "text-muted-foreground bg-white/5 border-white/10",
    icon: GraduationCap
  };
}
function StudentProfileCard({
  name,
  index,
  onViewProfile
}) {
  const status = getStudentStatus(name);
  const StatusIcon = status.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
    y: -4,
    scale: 1.02
  }, transition: {
    type: "spring",
    stiffness: 400,
    damping: 25
  }, className: "flex-shrink-0 w-[260px] glass-strong rounded-3xl p-6 cursor-pointer relative overflow-hidden group/card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 group-hover/card:border-primary/50 transition-colors duration-300 shadow-[0_0_20px_rgba(120,119,198,0.15)] group-hover/card:shadow-[0_0_30px_rgba(120,119,198,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: getProfilePic(name), alt: name, className: "h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold text-center truncate", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3 w-3" }),
        index + 1,
        " of ",
        STUDENTS.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-3 mx-auto w-fit inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${status.color}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { className: "h-3 w-3" }),
        status.tag
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 mx-auto w-fit inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-2.5 w-2.5" }),
        " Grade 12 STEM"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: (e) => {
        e.stopPropagation();
        onViewProfile();
      }, className: "mt-4 w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:border-primary/30 hover:text-primary group-hover/card:border-primary/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
        "View Profile"
      ] })
    ] })
  ] });
}
function StudentProfileModal({
  name,
  open,
  onClose
}) {
  if (!name) return null;
  const status = getStudentStatus(name);
  const StatusIcon = status.icon;
  const officer = OFFICERS.find((o) => o.name === name);
  const studentIndex = STUDENTS.indexOf(name);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "glass-strong border-white/10 sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Student profile details" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 w-28 overflow-hidden rounded-full border-3 border-primary/30 shadow-[0_0_30px_rgba(120,119,198,0.25)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: getProfilePic(name), alt: name, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-2xl font-bold", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-3 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium ${status.color}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { className: "h-4 w-4" }),
        status.tag
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 w-full grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/5 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Section" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-bold text-gradient", children: "Archimedes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/5 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Strand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-bold text-gradient", children: "STEM" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/5 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Grade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-bold", children: "12" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/5 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Class #" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-lg font-bold", children: studentIndex + 1 })
        ] })
      ] }),
      officer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 w-full rounded-2xl border border-primary/20 bg-primary/5 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Class Officer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: officer.position })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "h-3.5 w-3.5" }),
        "Calibungan High School"
      ] })
    ] })
  ] }) });
}
function StudentsSection() {
  const [viewMode, setViewMode] = reactExports.useState("carousel");
  const [selectedStudent, setSelectedStudent] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 16
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -16
  }, transition: {
    duration: 0.3
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Students" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
          STUDENTS.length,
          " classmates • Grade 12 STEM"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 glass rounded-xl p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setViewMode("carousel"), className: `grid h-9 w-9 place-items-center rounded-lg transition-all ${viewMode === "carousel" ? "bg-primary/15 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`, title: "Carousel view", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rows3, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setViewMode("grid"), className: `grid h-9 w-9 place-items-center rounded-lg transition-all ${viewMode === "grid" ? "bg-primary/15 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`, title: "Grid view", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: viewMode === "carousel" ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalCarousel, { itemCount: STUDENTS.length, children: STUDENTS.map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StudentProfileCard, { name, index: i, onViewProfile: () => setSelectedStudent(name) }, name)) }) }, "carousel") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", children: STUDENTS.map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StudentProfileCard, { name, index: i, onViewProfile: () => setSelectedStudent(name) }, name)) }, "grid") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StudentProfileModal, { name: selectedStudent, open: !!selectedStudent, onClose: () => setSelectedStudent(null) })
  ] });
}
function OfficersSection() {
  const allOfficers = [...OFFICERS, ...FACULTY];
  const [viewMode, setViewMode] = reactExports.useState("carousel");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 16
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -16
  }, transition: {
    duration: 0.3
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Officers & Faculty" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Class leadership and advisers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 glass rounded-xl p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setViewMode("carousel"), className: `grid h-9 w-9 place-items-center rounded-lg transition-all ${viewMode === "carousel" ? "bg-primary/15 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`, title: "Carousel view", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rows3, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setViewMode("grid"), className: `grid h-9 w-9 place-items-center rounded-lg transition-all ${viewMode === "grid" ? "bg-primary/15 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`, title: "Grid view", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: viewMode === "carousel" ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HorizontalCarousel, { itemCount: allOfficers.length, children: allOfficers.map((officer, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OfficerProfileCard, { officer, index: i, isFaculty: i >= OFFICERS.length }, officer.name)) }) }, "carousel") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", children: allOfficers.map((officer, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OfficerProfileCard, { officer, index: i, isFaculty: i >= OFFICERS.length }, officer.name)) }, "grid") })
  ] });
}
function OfficerProfileCard({
  officer,
  index,
  isFaculty
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
    y: -4,
    scale: 1.02
  }, transition: {
    type: "spring",
    stiffness: 400,
    damping: 25
  }, className: "flex-shrink-0 w-[260px] glass-strong rounded-3xl p-6 relative overflow-hidden group/card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ${isFaculty ? "from-amber-500/5 to-transparent" : "from-primary/5 to-accent/5"}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mx-auto h-24 w-24 overflow-hidden rounded-full border-2 transition-colors duration-300 shadow-[0_0_20px_rgba(120,119,198,0.15)] group-hover/card:shadow-[0_0_30px_rgba(120,119,198,0.3)] ${isFaculty ? "border-amber-500/30 group-hover/card:border-amber-500/60" : "border-primary/20 group-hover/card:border-primary/50"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: getProfilePic(officer.name), alt: officer.name, className: "h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold truncate", children: officer.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-3 mx-auto w-fit inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${isFaculty ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-primary/10 text-primary border-primary/20"}`, children: [
        isFaculty ? /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3 w-3" }),
        officer.position
      ] })
    ] })
  ] });
}
function ScheduleSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 16
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -16
  }, transition: {
    duration: 0.3
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 text-2xl font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Class Schedule" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-3xl p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "mx-auto h-12 w-12 text-muted-foreground/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg font-semibold", children: "Coming Soon" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "The class schedule will be posted here soon." })
    ] })
  ] });
}
function QuizzesSection() {
  const {
    user
  } = useAuth();
  const fetchForms = useServerFn(listPublishedForms);
  const fetchSubs = useServerFn(getMySubmissions);
  const {
    data: forms = []
  } = useQuery({
    queryKey: ["forms-published"],
    queryFn: () => fetchForms()
  });
  const {
    data: subs = []
  } = useQuery({
    queryKey: ["my-subs"],
    queryFn: () => fetchSubs()
  });
  if (user?.id === "guest") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 16
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -16
    }, className: "flex flex-col items-center justify-center py-20 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong p-10 rounded-3xl max-w-sm w-full mx-auto shadow-[var(--shadow-glow)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-2 text-gradient", children: "Access Restricted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "You must be a student to view and take quizzes." })
    ] }) });
  }
  const quizzes = forms.filter((f) => f.type === "quiz");
  const tests = forms.filter((f) => f.type === "test");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 16
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -16
  }, transition: {
    duration: 0.3
  }, className: "space-y-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gradient mb-6", children: "Quizzes" }),
      quizzes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No quizzes available right now." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: quizzes.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormCard, { form: f, sub: subs.find((s) => s.form_id === f.id) }, f.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gradient mb-6", children: "Tests / Exams" }),
      tests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No tests available right now." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: tests.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(FormCard, { form: f, sub: subs.find((s) => s.form_id === f.id) }, f.id)) })
    ] })
  ] });
}
function FormCard({
  form,
  sub
}) {
  const navigate = useNavigate();
  const getQCount = useServerFn(getQuestionCount);
  const {
    data: count = 0
  } = useQuery({
    queryKey: ["qcount", form.id],
    queryFn: () => getQCount({
      data: {
        formId: form.id
      }
    })
  });
  const pct = sub ? Math.round(sub.score / Math.max(1, sub.total_questions) * 100) : 0;
  let gradeColor = "text-muted-foreground";
  if (sub) {
    if (pct >= 90) gradeColor = "text-success";
    else if (pct >= 75) gradeColor = "text-primary";
    else if (pct >= 60) gradeColor = "text-accent";
    else gradeColor = "text-destructive";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 transition-all hover:shadow-[var(--shadow-glow)] hover:border-primary/30 flex flex-col h-full relative overflow-hidden group", children: [
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 rounded-bl-2xl bg-success/10 px-4 py-1.5 text-xs font-bold text-success border-l border-b border-success/20", children: "COMPLETED" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold pr-16", children: form.title }),
      form.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: form.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileQuestion, { className: "h-3.5 w-3.5" }),
        " ",
        count,
        " Qs"
      ] }),
      form.has_timer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
        " ",
        form.time_limit_minutes,
        "m"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: sub ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-white/5 bg-black/10 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `mt-1 text-2xl font-bold ${gradeColor}`, children: [
          sub.score,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-normal text-muted-foreground", children: [
            "/",
            sub.total_questions
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Grade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `mt-1 text-2xl font-bold ${gradeColor}`, children: [
          pct,
          "%"
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => navigate({
      to: "/quiz/$id",
      params: {
        id: form.id
      }
    }), className: "w-full h-11 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity", children: [
      "Start ",
      form.type === "quiz" ? "Quiz" : "Test"
    ] }) })
  ] });
}
function AssignmentsSection() {
  const {
    user
  } = useAuth();
  const qc = useQueryClient();
  const fetchAssignments = useServerFn(getAssignments);
  const fetchCompletions = useServerFn(getStudentCompletions);
  const markDone = useServerFn(markAssignmentDone);
  const [finishing, setFinishing] = reactExports.useState(null);
  const {
    data: assignments = [],
    isLoading: loadingAssignments
  } = useQuery({
    queryKey: ["assignments"],
    queryFn: () => fetchAssignments()
  });
  const {
    data: completions = [],
    isLoading: loadingComps
  } = useQuery({
    queryKey: ["assignment-completions"],
    queryFn: () => fetchCompletions()
  });
  const activeAssignments = assignments.filter((a) => !completions.includes(a.id));
  async function handleFinish(id) {
    if (user?.id === "guest") return ue.error("Guests cannot complete assignments");
    setFinishing(id);
    try {
      await markDone({
        data: {
          assignmentId: id
        }
      });
      ue.success("Assignment marked as finished!");
      qc.invalidateQueries({
        queryKey: ["assignment-completions"]
      });
    } catch (err) {
      ue.error(err.message);
    } finally {
      setFinishing(null);
    }
  }
  if (loadingAssignments || loadingComps) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-10 animate-pulse text-muted-foreground", children: "Loading assignments..." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 16
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -16
  }, transition: {
    duration: 0.3
  }, className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gradient mb-6", children: "Assignments" }),
    activeAssignments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-3xl p-10 text-center shadow-[var(--shadow-glow)] max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 place-items-center rounded-2xl bg-success/20 mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-8 w-8 text-success" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: "You're all caught up!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "There are no pending assignments at the moment." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: activeAssignments.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 transition-all hover:shadow-[var(--shadow-glow)] hover:border-primary/30 flex flex-col h-full group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground whitespace-pre-wrap", children: a.instruction }),
        a.deadline_at && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1.5 text-xs font-medium text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
          " Due: ",
          new Date(a.deadline_at).toLocaleString()
        ] }),
        a.image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl overflow-hidden border border-white/10 bg-black/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.image_url, alt: "Assignment attachment", className: "w-full h-32 object-cover transition-transform group-hover:scale-105" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-4 border-t border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => handleFinish(a.id), disabled: finishing === a.id || user?.id === "guest", className: "w-full h-11 bg-gradient-to-r from-success/80 to-success text-success-foreground font-semibold hover:opacity-90 glow", children: finishing === a.id ? "Finishing..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 mr-2" }),
        " Mark as Finished"
      ] }) }) })
    ] }, a.id)) })
  ] });
}
function GamesSection() {
  const [isSpinning, setIsSpinning] = reactExports.useState(false);
  const [winner, setWinner] = reactExports.useState(null);
  const [reelNames, setReelNames] = reactExports.useState([]);
  const [spinHistory, setSpinHistory] = reactExports.useState([]);
  const [spinCount, setSpinCount] = reactExports.useState(0);
  const [showConfetti, setShowConfetti] = reactExports.useState(false);
  const spin = () => {
    if (STUDENTS.length === 0) return ue.error("No active students found");
    if (isSpinning) return;
    setIsSpinning(true);
    setWinner(null);
    setShowConfetti(false);
    const names = [];
    for (let i = 0; i < 40; i++) {
      names.push(STUDENTS[Math.floor(Math.random() * STUDENTS.length)]);
    }
    const winIndex = Math.floor(Math.random() * STUDENTS.length);
    const finalWinner = STUDENTS[winIndex];
    names.push(finalWinner);
    setReelNames(names);
    setSpinCount((c) => c + 1);
    setTimeout(() => {
      setWinner(finalWinner);
      setIsSpinning(false);
      setShowConfetti(true);
      setSpinHistory((h) => [finalWinner, ...h].slice(0, 10));
      setTimeout(() => setShowConfetti(false), 3e3);
    }, 4e3);
  };
  const frequencyMap = spinHistory.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});
  const mostPicked = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1])[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 16
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -16
  }, transition: {
    duration: 0.3
  }, className: "max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-accent mb-2 drop-shadow-sm uppercase tracking-widest", children: "Roulette" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground/80", children: "Who is the chosen one?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-3 w-3" }),
          " Spins"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-gradient", children: spinCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
          " Pool"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-gradient", children: STUDENTS.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3" }),
          " Hot Pick"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold truncate", children: mostPicked ? mostPicked[0].split(" ")[0] : "—" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-3xl p-6 sm:p-8 border-2 border-primary/20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showConfetti && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: Array.from({
        length: 12
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1
      }, animate: {
        opacity: 0,
        y: [-20, -80 - Math.random() * 60],
        x: [0, (Math.random() - 0.5) * 200],
        scale: [1, 0.5],
        rotate: [0, Math.random() * 360]
      }, transition: {
        duration: 1.5 + Math.random(),
        ease: "easeOut"
      }, className: "absolute top-1/2 left-1/2 pointer-events-none z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full", style: {
        background: ["oklch(0.58 0.18 265)", "oklch(0.7 0.18 310)", "oklch(0.65 0.17 155)", "oklch(0.78 0.17 75)", "oklch(0.62 0.24 25)"][i % 5]
      } }) }, `confetti-${i}`)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[200px] flex items-center justify-center bg-black/60 rounded-2xl border-4 border-black/80 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full h-[80px] border-y transition-colors duration-300 ${isSpinning ? "bg-gradient-to-r from-transparent via-accent/30 to-transparent border-accent/40" : "bg-gradient-to-r from-transparent via-primary/20 to-transparent border-primary/30"}` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" }),
          STUDENTS.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No students available." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full flex items-center justify-center", children: [
            reelNames.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              y: 0
            }, animate: {
              y: -(reelNames.length - 1) * 80
            }, transition: {
              duration: 4,
              ease: [0.15, 0.85, 0.2, 1]
            }, className: "absolute top-1/2 -mt-[40px] flex flex-col items-center w-full", children: reelNames.map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[80px] flex items-center justify-center w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-2xl sm:text-4xl font-black tracking-widest uppercase text-center w-full px-4 truncate transition-colors duration-300
                          ${i === reelNames.length - 1 ? "text-success drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]" : "text-primary/70"}
                        `, children: name }) }, i)) }, reelNames.join(",")) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl text-muted-foreground/30 font-bold uppercase tracking-widest animate-pulse", children: "Ready..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2 text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.8)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-10 h-10" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.8)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-10 h-10" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-auto min-h-[60px] flex items-center justify-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: winner && !isSpinning && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.5,
          y: 20
        }, animate: {
          opacity: 1,
          scale: 1,
          y: 0
        }, exit: {
          opacity: 0,
          scale: 0.8
        }, transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }, className: "flex flex-col items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 overflow-hidden rounded-full border-2 border-success/50 shadow-[0_0_20px_rgba(74,222,128,0.4)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: getProfilePic(winner), alt: winner, className: "h-full w-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-success font-black text-xl uppercase tracking-wider drop-shadow-[0_0_15px_rgba(74,222,128,0.6)]", children: winner }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-3 w-3 text-success" }),
              " Winner!"
            ] })
          ] })
        ] }) }, winner) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: spin, disabled: isSpinning || STUDENTS.length === 0, size: "lg", className: `w-full sm:w-auto min-w-[240px] gap-3 text-lg h-16 rounded-2xl transition-all duration-300 font-bold tracking-wider uppercase
                ${isSpinning ? "bg-black/40 text-muted-foreground/50 border border-white/5 shadow-none" : "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-[0_0_30px_rgba(120,119,198,0.4)] hover:shadow-[0_0_50px_rgba(120,119,198,0.6)] hover:scale-105 border border-white/20"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dices, { className: `h-7 w-7 ${isSpinning ? "animate-spin" : ""}` }),
          isSpinning ? "Rolling..." : "Spin the Wheel"
        ] }) })
      ] })
    ] }),
    spinHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "glass rounded-3xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
          " Spin History"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          spinHistory.length,
          " result",
          spinHistory.length !== 1 ? "s" : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: spinHistory.map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: i === 0 ? {
        opacity: 0,
        x: -20
      } : false, animate: {
        opacity: 1,
        x: 0
      }, className: `flex items-center gap-3 rounded-xl p-3 transition-colors ${i === 0 ? "bg-success/10 border border-success/20" : "bg-white/5 border border-transparent"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-7 w-7 rounded-full bg-white/10 text-xs font-bold text-muted-foreground", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 overflow-hidden rounded-full border border-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: getProfilePic(name), alt: name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-medium flex-1 ${i === 0 ? "text-success" : ""}`, children: name }),
        i === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-widest font-bold text-success flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }),
          " Latest"
        ] })
      ] }, `${name}-${i}`)) })
    ] })
  ] });
}
export {
  SectionDashboard as component
};
