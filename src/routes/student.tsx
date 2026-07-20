import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import {
  Menu, X, Home, Users, Shield, Calendar, LogOut,
  ChevronLeft, ChevronRight, GraduationCap, Sparkles, Crown, Image, FileText, Clock, FileQuestion, Star, Map, BookOpen, Check, Lock, Dices,
  Trophy, Award, Zap, Eye, Hash, Timer, Target, Flame, LayoutGrid, Rows3, Heart,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { getFeatured } from "@/lib/featured.functions";
import { listPublishedForms, getQuestionCount } from "@/lib/forms.functions";
import { getAssignments, getStudentCompletions, markAssignmentDone } from "@/lib/assignments.functions";
import { getMySubmissions, getLeaderboard } from "@/lib/submissions.functions";
import { ForceChangePinModal } from "@/components/ForceChangePinModal";

const serverGuardUser = createServerFn({ method: "GET" }).handler(async () => {
  const { redirectUnlessUser } = await import("@/lib/guards.server");
  await redirectUnlessUser();
});

export const Route = createFileRoute("/student")({
  component: SectionDashboard,
  beforeLoad: async () => {
    await serverGuardUser();
  },
  head: () => ({ meta: [{ title: "12 — Archimedes" }] }),
});

/* ============================================================
   DATA
============================================================ */

const STUDENTS = [
  "Airah Mae Asuncion",
  "Aj Vivas",
  "Angelica Jimenez",
  "Angelo Clariz",
  "Cheska Ivy Libunao",
  "Cyus Lucas",
  "Denzer Molina",
  "Dion Tuquero Mendoza",
  "Eulycis Valdez",
  "Francis John Cayabyab",
  "Jade Cyrus Bonilla",
  "Jazmin Guillermo",
  "Jessa Mae Daluyen",
  "Jireh Anne Martinez",
  "John Oliver Rayray",
  "Johncarl Manzano",
  "Louise Gaile Cabato",
  "Loyd Adrian Lucas",
  "Mark Jose",
  "Nash Grospe",
  "Precious Lucas",
  "Prince Aron",
  "Princess Saclao",
  "Robby Correa",
  "Sophia T. Sabado",
  "Willy Gaborno",
];

const OFFICERS = [
  { name: "Francis John Cayabyab", position: "President" },
  { name: "Sophia T. Sabado", position: "Vice President" },
  { name: "Airah Mae Asuncion", position: "Secretary" },
  { name: "Jessa Mae Daluyen", position: "Treasurer" },
  { name: "Cheska Ivy Libunao", position: "Auditor" },
  { name: "Robby Correa", position: "Peace Officer" },
  { name: "Denzer Molina", position: "Public Information Officer" },
  { name: "Nash Grospe", position: "Escort" },
  { name: "Precious Lucas", position: "Muse" },
];

const FACULTY = [
  { name: "Aisa Crisologo", position: "Class Adviser" },
  { name: "Agapito Gonzaga", position: "School Principal" },
];

const PROFILE_PICS: Record<string, string> = {
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
  "Willy Gab": "Willy Gaborno.jpg",
};

function getProfilePic(name: string) {
  const file = PROFILE_PICS[name];
  return file ? `/Profile/${file}` : `/Profile/NoPFP.jfif`;
}

type Section = "home" | "assignments" | "quizzes" | "students" | "officers" | "schedule" | "games";

/* ============================================================
   MAIN COMPONENT
============================================================ */

function SectionDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("home");

  // Server-side beforeLoad already enforces authentication.
  // This is a graceful client fallback only (belt-and-suspenders).

  function goTo(section: Section) {
    setActiveSection(section);
    setSidebarOpen(false);
  }

  if (!user) return null;

  // Forced PIN change blocks all other actions
  if (user.pinMustChange) {
    return <ForceChangePinModal />;
  }

  return (
    <main className="min-h-screen">
      {/* ---- Top Bar ---- */}
      <header className="sticky top-0 z-40 glass border-b border-white/10 shadow-[var(--shadow-glow)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Section</p>
              <h1 className="text-lg font-bold sm:text-xl">
                <span className="text-gradient">12 — Archimedes</span>
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:block">
              {user.name}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={async () => { await logout(); navigate({ to: "/" }); }}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      {/* ---- Sidebar Overlay ---- */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            <motion.aside
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-72 glass-strong overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="font-bold text-gradient">12 — Archimedes</span>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="grid h-8 w-8 place-items-center rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="px-3 pb-6 space-y-1">
                <SidebarItem icon={Home} label="Home" active={activeSection === "home"} onClick={() => goTo("home")} />
                <SidebarItem icon={BookOpen} label="Assignments" active={activeSection === "assignments"} onClick={() => goTo("assignments")} />
                <SidebarItem icon={FileText} label="Quizzes" active={activeSection === "quizzes"} onClick={() => goTo("quizzes")} />
                <SidebarItem icon={Users} label="Students" active={activeSection === "students"} onClick={() => goTo("students")} />
                <SidebarItem icon={Shield} label="Officers" active={activeSection === "officers"} onClick={() => goTo("officers")} />
                <SidebarItem icon={Calendar} label="Schedule" active={activeSection === "schedule"} onClick={() => goTo("schedule")} />
                <SidebarItem icon={Dices} label="Games" active={activeSection === "games"} onClick={() => goTo("games")} />
              </nav>

              <div className="border-t border-white/10 mx-5 pt-4 space-y-3">
                <div className="px-2">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Faculty</p>
                  {FACULTY.map((f) => (
                    <div key={f.name} className="mb-2">
                      <p className="text-sm font-medium">{f.name}</p>
                      <p className="text-xs text-muted-foreground">{f.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ---- Content ---- */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
        <AnimatePresence mode="wait">
          {activeSection === "home" && <HomeSection key="home" />}
          {activeSection === "assignments" && <AssignmentsSection key="assignments" />}
          {activeSection === "quizzes" && <QuizzesSection key="quizzes" />}
          {activeSection === "students" && <StudentsSection key="students" />}
          {activeSection === "officers" && <OfficersSection key="officers" />}
          {activeSection === "schedule" && <ScheduleSection key="schedule" />}
          {activeSection === "games" && <GamesSection key="games" />}
        </AnimatePresence>
      </div>
    </main>
  );
}

/* ============================================================
   SIDEBAR ITEM
============================================================ */

function SidebarItem({
  icon: Icon, label, active, onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
        active
          ? "bg-gradient-to-r from-primary/15 to-accent/10 text-primary shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-primary/20"
          : "text-foreground/70 hover:bg-white/10 hover:text-foreground hover:shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-transparent"
      }`}
    >
      <Icon className={`h-4.5 w-4.5 ${active ? "text-primary" : ""}`} />
      {label}
    </button>
  );
}

/* ============================================================
   HOME — FEATURED
============================================================ */

function HomeSection() {
  const fetchFeatured = useServerFn(getFeatured);
  const { data: featuredData, isLoading } = useQuery({
    queryKey: ["featured-of-day"],
    queryFn: () => fetchFeatured(),
  });
  
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Welcome to <span className="text-gradient">12 — Archimedes</span>
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Grade 12 STEM — Calibungan High School
        </p>
      </div>

      {/* Featured Card */}
      <div className="glass-strong rounded-3xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 pt-6 pb-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
            <Star className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Featured</h3>
            <p className="text-xs text-muted-foreground">Updated by admin</p>
          </div>
        </div>
        <div className="px-6 pb-6">
          {isLoading ? (
            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5">
              <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
            </div>
          ) : featuredData?.url ? (
            <div className="flex flex-col rounded-2xl border border-white/10 bg-black/10 overflow-hidden">
              <div className="flex items-center justify-center p-4">
                <img
                  src={featuredData.url}
                  alt="Featured post"
                  className="max-h-[500px] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>
              {featuredData.description && (
                <div className="border-t border-white/10 p-4 bg-black/20 flex justify-center">
                  <Button variant="ghost" onClick={() => setShowDetails(true)} className="text-primary hover:text-primary hover:bg-primary/10">
                    See more details..
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5 gap-2">
              <Sparkles className="h-8 w-8 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">No featured post right now — check back later!</p>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="glass-strong border-white/10 sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Featured Details</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-base text-white/90 whitespace-pre-wrap leading-relaxed">
              {featuredData?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Quick Info Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <QuickCard icon={Users} label="Students" value={STUDENTS.length.toString()} />
        <QuickCard icon={Shield} label="Officers" value={OFFICERS.length.toString()} />
        <QuickCard icon={Crown} label="Section" value="Archimedes" />
      </div>
    </motion.div>
  );
}

function QuickCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />{label}
      </div>
      <p className="mt-2 text-2xl font-bold text-gradient">{value}</p>
    </div>
  );
}

/* ============================================================
   AUTO-SCROLLING HORIZONTAL CAROUSEL
============================================================ */

function HorizontalCarousel({ children, itemCount }: { children: React.ReactNode; itemCount: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused || !scrollRef.current) return;
    const el = scrollRef.current;
    const speed = 0.6; // px per frame
    let raf: number;
    const animate = () => {
      if (!el) return;
      el.scrollLeft += speed;
      // Loop back seamlessly
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollLeft = 0;
      }
      setScrollPos(el.scrollLeft);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isPaused]);

  const scrollBy = useCallback((dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }, []);

  return (
    <div className="relative group">
      {/* Navigation Arrows */}
      <button
        onClick={() => scrollBy(-1)}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full glass-strong border border-white/15 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:border-primary/40"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scrollBy(1)}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full glass-strong border border-white/15 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:border-primary/40"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
}

/* ============================================================
   STUDENT PROFILE CARD
============================================================ */

function getStudentStatus(name: string): { tag: string; color: string; icon: React.ComponentType<{ className?: string }> } {
  const officer = OFFICERS.find(o => o.name === name);
  if (officer) return { tag: officer.position, color: "text-primary bg-primary/10 border-primary/20", icon: Shield };
  return { tag: "Student", color: "text-muted-foreground bg-white/5 border-white/10", icon: GraduationCap };
}

function StudentProfileCard({ name, index, onViewProfile }: { name: string; index: number; onViewProfile: () => void }) {
  const status = getStudentStatus(name);
  const StatusIcon = status.icon;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex-shrink-0 w-[260px] glass-strong rounded-3xl p-6 cursor-pointer relative overflow-hidden group/card"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Avatar */}
        <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 group-hover/card:border-primary/50 transition-colors duration-300 shadow-[0_0_20px_rgba(120,119,198,0.15)] group-hover/card:shadow-[0_0_30px_rgba(120,119,198,0.3)]">
          <img
            src={getProfilePic(name)}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
          />
        </div>

        {/* Name */}
        <h3 className="mt-4 text-lg font-bold text-center truncate">{name}</h3>

        {/* Number badge */}
        <p className="text-center text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
          <Hash className="h-3 w-3" />{index + 1} of {STUDENTS.length}
        </p>

        {/* Status tag */}
        <div className={`mt-3 mx-auto w-fit inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${status.color}`}>
          <StatusIcon className="h-3 w-3" />
          {status.tag}
        </div>

        {/* Grade tag */}
        <div className="mt-2 mx-auto w-fit inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] text-muted-foreground">
          <GraduationCap className="h-2.5 w-2.5" /> Grade 12 STEM
        </div>

        {/* View Profile Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onViewProfile(); }}
          className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:border-primary/30 hover:text-primary group-hover/card:border-primary/20"
        >
          <Eye className="h-3.5 w-3.5" />
          View Profile
        </button>
      </div>
    </motion.div>
  );
}

/* ============================================================
   STUDENT PROFILE MODAL
============================================================ */

function StudentProfileModal({ name, open, onClose }: { name: string | null; open: boolean; onClose: () => void }) {
  if (!name) return null;
  const status = getStudentStatus(name);
  const StatusIcon = status.icon;
  const officer = OFFICERS.find(o => o.name === name);
  const studentIndex = STUDENTS.indexOf(name);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="glass-strong border-white/10 sm:max-w-md">
        <DialogHeader className="sr-only">
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>Student profile details</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center text-center pt-2">
          {/* Large avatar */}
          <div className="h-28 w-28 overflow-hidden rounded-full border-3 border-primary/30 shadow-[0_0_30px_rgba(120,119,198,0.25)]">
            <img src={getProfilePic(name)} alt={name} className="h-full w-full object-cover" />
          </div>

          <h2 className="mt-5 text-2xl font-bold">{name}</h2>

          {/* Status / Position */}
          <div className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium ${status.color}`}>
            <StatusIcon className="h-4 w-4" />
            {status.tag}
          </div>

          {/* Info grid */}
          <div className="mt-6 w-full grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Section</p>
              <p className="mt-1 text-lg font-bold text-gradient">Archimedes</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Strand</p>
              <p className="mt-1 text-lg font-bold text-gradient">STEM</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Grade</p>
              <p className="mt-1 text-lg font-bold">12</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Class #</p>
              <p className="mt-1 text-lg font-bold">{studentIndex + 1}</p>
            </div>
          </div>

          {/* Officer badge if applicable */}
          {officer && (
            <div className="mt-4 w-full rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Class Officer</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{officer.position}</p>
            </div>
          )}

          {/* School */}
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Map className="h-3.5 w-3.5" />
            Calibungan High School
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ============================================================
   STUDENTS SECTION — ENHANCED
============================================================ */

function StudentsSection() {
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-gradient">Students</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">{STUDENTS.length} classmates • Grade 12 STEM</p>
        </div>
        <div className="flex items-center gap-1 glass rounded-xl p-1">
          <button
            onClick={() => setViewMode("carousel")}
            className={`grid h-9 w-9 place-items-center rounded-lg transition-all ${viewMode === "carousel" ? "bg-primary/15 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            title="Carousel view"
          >
            <Rows3 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`grid h-9 w-9 place-items-center rounded-lg transition-all ${viewMode === "grid" ? "bg-primary/15 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            title="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "carousel" ? (
          <motion.div key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HorizontalCarousel itemCount={STUDENTS.length}>
              {STUDENTS.map((name, i) => (
                <StudentProfileCard key={name} name={name} index={i} onViewProfile={() => setSelectedStudent(name)} />
              ))}
            </HorizontalCarousel>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {STUDENTS.map((name, i) => (
              <StudentProfileCard key={name} name={name} index={i} onViewProfile={() => setSelectedStudent(name)} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Modal */}
      <StudentProfileModal name={selectedStudent} open={!!selectedStudent} onClose={() => setSelectedStudent(null)} />
    </motion.div>
  );
}

/* ============================================================
   OFFICERS — CARD CAROUSEL
============================================================ */

function OfficersSection() {
  const allOfficers = [...OFFICERS, ...FACULTY];
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-gradient">Officers & Faculty</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Class leadership and advisers</p>
        </div>
        <div className="flex items-center gap-1 glass rounded-xl p-1">
          <button
            onClick={() => setViewMode("carousel")}
            className={`grid h-9 w-9 place-items-center rounded-lg transition-all ${viewMode === "carousel" ? "bg-primary/15 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            title="Carousel view"
          >
            <Rows3 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`grid h-9 w-9 place-items-center rounded-lg transition-all ${viewMode === "grid" ? "bg-primary/15 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            title="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "carousel" ? (
          <motion.div key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HorizontalCarousel itemCount={allOfficers.length}>
              {allOfficers.map((officer, i) => (
                <OfficerProfileCard key={officer.name} officer={officer} index={i} isFaculty={i >= OFFICERS.length} />
              ))}
            </HorizontalCarousel>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {allOfficers.map((officer, i) => (
              <OfficerProfileCard key={officer.name} officer={officer} index={i} isFaculty={i >= OFFICERS.length} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function OfficerProfileCard({ officer, index, isFaculty }: { officer: any; index: number; isFaculty: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex-shrink-0 w-[260px] glass-strong rounded-3xl p-6 relative overflow-hidden group/card"
    >
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ${isFaculty ? "from-amber-500/5 to-transparent" : "from-primary/5 to-accent/5"}`} />

      <div className="relative z-10 text-center">
        <div className={`mx-auto h-24 w-24 overflow-hidden rounded-full border-2 transition-colors duration-300 shadow-[0_0_20px_rgba(120,119,198,0.15)] group-hover/card:shadow-[0_0_30px_rgba(120,119,198,0.3)] ${
          isFaculty ? "border-amber-500/30 group-hover/card:border-amber-500/60" : "border-primary/20 group-hover/card:border-primary/50"
        }`}>
          <img
            src={getProfilePic(officer.name)}
            alt={officer.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
          />
        </div>

        <h3 className="mt-4 text-lg font-bold truncate">{officer.name}</h3>

        <div className={`mt-3 mx-auto w-fit inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${
          isFaculty ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-primary/10 text-primary border-primary/20"
        }`}>
          {isFaculty ? <Crown className="h-3 w-3" /> : <Shield className="h-3 w-3" />}
          {officer.position}
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   SCHEDULE — PLACEHOLDER
============================================================ */

function ScheduleSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-6 text-2xl font-bold">
        <span className="text-gradient">Class Schedule</span>
      </h2>

      <div className="glass-strong rounded-3xl p-8 text-center">
        <Calendar className="mx-auto h-12 w-12 text-muted-foreground/30" />
        <p className="mt-4 text-lg font-semibold">Coming Soon</p>
        <p className="mt-1 text-sm text-muted-foreground">
          The class schedule will be posted here soon.
        </p>
      </div>
    </motion.div>
  );
}

/* ============================================================
   QUIZZES — LIST OF FORMS
============================================================ */

function QuizzesSection() {
  const { user } = useAuth();
  const fetchForms = useServerFn(listPublishedForms);
  const fetchSubs = useServerFn(getMySubmissions);

  const { data: forms = [] } = useQuery({ queryKey: ["forms-published"], queryFn: () => fetchForms() });
  const { data: subs = [] } = useQuery({ queryKey: ["my-subs"], queryFn: () => fetchSubs() });

  if (user?.id === "guest") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <div className="glass-strong p-10 rounded-3xl max-w-sm w-full mx-auto shadow-[var(--shadow-glow)]">
          <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h2 className="text-xl font-bold mb-2 text-gradient">Access Restricted</h2>
          <p className="text-muted-foreground text-sm">
            You must be a student to view and take quizzes.
          </p>
        </div>
      </motion.div>
    );
  }

  const quizzes = forms.filter((f: any) => f.type === "quiz");
  const tests = forms.filter((f: any) => f.type === "test");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-12"
    >
      <div>
        <h2 className="text-2xl font-bold text-gradient mb-6">Quizzes</h2>
        {quizzes.length === 0 ? (
          <p className="text-muted-foreground">No quizzes available right now.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((f: any) => <FormCard key={f.id} form={f} sub={subs.find((s: any) => s.form_id === f.id)} />)}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gradient mb-6">Tests / Exams</h2>
        {tests.length === 0 ? (
          <p className="text-muted-foreground">No tests available right now.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tests.map((f: any) => <FormCard key={f.id} form={f} sub={subs.find((s: any) => s.form_id === f.id)} />)}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function FormCard({ form, sub }: { form: any; sub: any }) {
  const navigate = useNavigate();
  const getQCount = useServerFn(getQuestionCount);
  const { data: count = 0 } = useQuery({ queryKey: ["qcount", form.id], queryFn: () => getQCount({ data: { formId: form.id } }) });

  const pct = sub ? Math.round((sub.score / Math.max(1, sub.total_questions)) * 100) : 0;
  let gradeColor = "text-muted-foreground";
  if (sub) {
    if (pct >= 90) gradeColor = "text-success";
    else if (pct >= 75) gradeColor = "text-primary";
    else if (pct >= 60) gradeColor = "text-accent";
    else gradeColor = "text-destructive";
  }

  return (
    <div className="glass rounded-3xl p-6 transition-all hover:shadow-[var(--shadow-glow)] hover:border-primary/30 flex flex-col h-full relative overflow-hidden group">
      {sub && (
        <div className="absolute top-0 right-0 rounded-bl-2xl bg-success/10 px-4 py-1.5 text-xs font-bold text-success border-l border-b border-success/20">
          COMPLETED
        </div>
      )}
      
      <div className="flex-1">
        <h3 className="text-lg font-bold pr-16">{form.title}</h3>
        {form.description && <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{form.description}</p>}
      </div>
      
      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
          <FileQuestion className="h-3.5 w-3.5" /> {count} Qs
        </div>
        {form.has_timer && (
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-accent">
            <Clock className="h-3.5 w-3.5" /> {form.time_limit_minutes}m
          </div>
        )}
      </div>

      <div className="mt-6">
        {sub ? (
          <div className="flex items-center justify-between rounded-xl border border-white/5 bg-black/10 p-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Score</p>
              <p className={`mt-1 text-2xl font-bold ${gradeColor}`}>{sub.score}<span className="text-sm font-normal text-muted-foreground">/{sub.total_questions}</span></p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Grade</p>
              <p className={`mt-1 text-2xl font-bold ${gradeColor}`}>{pct}%</p>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => navigate({ to: "/quiz/$id", params: { id: form.id } })}
            className="w-full h-11 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Start {form.type === "quiz" ? "Quiz" : "Test"}
          </Button>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   ASSIGNMENTS
============================================================ */
function AssignmentsSection() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const fetchAssignments = useServerFn(getAssignments);
  const fetchCompletions = useServerFn(getStudentCompletions);
  const markDone = useServerFn(markAssignmentDone);
  const [finishing, setFinishing] = useState<string | null>(null);

  const { data: assignments = [], isLoading: loadingAssignments } = useQuery({
    queryKey: ["assignments"],
    queryFn: () => fetchAssignments(),
  });

  const { data: completions = [], isLoading: loadingComps } = useQuery({
    queryKey: ["assignment-completions"],
    queryFn: () => fetchCompletions(),
  });

  const activeAssignments = assignments.filter((a: any) => !completions.includes(a.id));

  async function handleFinish(id: string) {
    if (user?.id === "guest") return toast.error("Guests cannot complete assignments");
    setFinishing(id);
    try {
      await markDone({ data: { assignmentId: id } });
      toast.success("Assignment marked as finished!");
      qc.invalidateQueries({ queryKey: ["assignment-completions"] });
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setFinishing(null);
    }
  }

  if (loadingAssignments || loadingComps) {
    return <div className="text-center py-10 animate-pulse text-muted-foreground">Loading assignments...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-gradient mb-6">Assignments</h2>

      {activeAssignments.length === 0 ? (
        <div className="glass-strong rounded-3xl p-10 text-center shadow-[var(--shadow-glow)] max-w-md mx-auto">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-success/20 mx-auto mb-4">
            <Check className="h-8 w-8 text-success" />
          </div>
          <h3 className="text-xl font-bold mb-2">You're all caught up!</h3>
          <p className="text-muted-foreground text-sm">There are no pending assignments at the moment.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeAssignments.map((a: any) => (
            <div key={a.id} className="glass rounded-3xl p-6 transition-all hover:shadow-[var(--shadow-glow)] hover:border-primary/30 flex flex-col h-full group">
              <div className="flex-1">
                <h3 className="text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">{a.instruction}</p>
                {a.deadline_at && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent">
                    <Clock className="h-3.5 w-3.5" /> Due: {new Date(a.deadline_at).toLocaleString()}
                  </div>
                )}
                {a.image_url && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-black/20">
                    <img src={a.image_url} alt="Assignment attachment" className="w-full h-32 object-cover transition-transform group-hover:scale-105" />
                  </div>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Button
                  onClick={() => handleFinish(a.id)}
                  disabled={finishing === a.id || user?.id === "guest"}
                  className="w-full h-11 bg-gradient-to-r from-success/80 to-success text-success-foreground font-semibold hover:opacity-90 glow"
                >
                  {finishing === a.id ? "Finishing..." : <><Check className="h-4 w-4 mr-2" /> Mark as Finished</>}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ============================================================
   GAMES — ENHANCED ROULETTE WITH HUD
=========================================================== */
function GamesSection() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [reelNames, setReelNames] = useState<string[]>([]);
  const [spinHistory, setSpinHistory] = useState<string[]>([]);
  const [spinCount, setSpinCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const spin = () => {
    if (STUDENTS.length === 0) return toast.error("No active students found");
    if (isSpinning) return;

    setIsSpinning(true);
    setWinner(null);
    setShowConfetti(false);

    // Generate a reel of names
    const names = [];
    for (let i = 0; i < 40; i++) {
      names.push(STUDENTS[Math.floor(Math.random() * STUDENTS.length)]);
    }
    const winIndex = Math.floor(Math.random() * STUDENTS.length);
    const finalWinner = STUDENTS[winIndex];
    names.push(finalWinner);

    setReelNames(names);
    setSpinCount(c => c + 1);

    setTimeout(() => {
      setWinner(finalWinner);
      setIsSpinning(false);
      setShowConfetti(true);
      setSpinHistory(h => [finalWinner, ...h].slice(0, 10));
      // Auto-hide confetti
      setTimeout(() => setShowConfetti(false), 3000);
    }, 4000);
  };

  // Most-picked student from history
  const frequencyMap = spinHistory.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const mostPicked = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1])[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-accent mb-2 drop-shadow-sm uppercase tracking-widest">
          Roulette
        </h2>
        <p className="text-muted-foreground/80">Who is the chosen one?</p>
      </div>

      {/* HUD Stats Bar */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            <Target className="h-3 w-3" /> Spins
          </div>
          <p className="text-2xl font-black text-gradient">{spinCount}</p>
        </div>
        <div className="glass rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            <Users className="h-3 w-3" /> Pool
          </div>
          <p className="text-2xl font-black text-gradient">{STUDENTS.length}</p>
        </div>
        <div className="glass rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            <Flame className="h-3 w-3" /> Hot Pick
          </div>
          <p className="text-lg font-bold truncate">{mostPicked ? mostPicked[0].split(" ")[0] : "—"}</p>
        </div>
      </div>

      {/* Main Roulette Machine */}
      <div className="glass-strong rounded-3xl p-6 sm:p-8 border-2 border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

        {/* Confetti particles */}
        <AnimatePresence>
          {showConfetti && (
            <>
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`confetti-${i}`}
                  initial={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                  animate={{
                    opacity: 0,
                    y: [-20, -80 - Math.random() * 60],
                    x: [0, (Math.random() - 0.5) * 200],
                    scale: [1, 0.5],
                    rotate: [0, Math.random() * 360],
                  }}
                  transition={{ duration: 1.5 + Math.random(), ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 pointer-events-none z-30"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: [
                        "oklch(0.58 0.18 265)", "oklch(0.7 0.18 310)",
                        "oklch(0.65 0.17 155)", "oklch(0.78 0.17 75)",
                        "oklch(0.62 0.24 25)"
                      ][i % 5],
                    }}
                  />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        <div className="relative z-10">
          {/* Roulette display */}
          <div className="relative h-[200px] flex items-center justify-center bg-black/60 rounded-2xl border-4 border-black/80 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Selection glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className={`w-full h-[80px] border-y transition-colors duration-300 ${isSpinning ? "bg-gradient-to-r from-transparent via-accent/30 to-transparent border-accent/40" : "bg-gradient-to-r from-transparent via-primary/20 to-transparent border-primary/30"}`} />
            </div>

            {/* Glass glare */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            {STUDENTS.length === 0 ? (
              <p className="text-muted-foreground">No students available.</p>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                {reelNames.length > 0 ? (
                  <motion.div
                    key={reelNames.join(',')}
                    initial={{ y: 0 }}
                    animate={{ y: -(reelNames.length - 1) * 80 }}
                    transition={{
                      duration: 4,
                      ease: [0.15, 0.85, 0.2, 1],
                    }}
                    className="absolute top-1/2 -mt-[40px] flex flex-col items-center w-full"
                  >
                    {reelNames.map((name, i) => (
                      <div key={i} className="h-[80px] flex items-center justify-center w-full">
                        <span className={`text-2xl sm:text-4xl font-black tracking-widest uppercase text-center w-full px-4 truncate transition-colors duration-300
                          ${i === reelNames.length - 1 ? 'text-success drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]' : 'text-primary/70'}
                        `}>
                          {name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <p className="text-2xl text-muted-foreground/30 font-bold uppercase tracking-widest animate-pulse">Ready...</p>
                )}

                {/* Selection indicators */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.8)]">
                  <ChevronRight className="w-10 h-10" />
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.8)]">
                  <ChevronLeft className="w-10 h-10" />
                </div>
              </div>
            )}
          </div>

          {/* Winner reveal area */}
          <div className="h-auto min-h-[60px] flex items-center justify-center mt-4">
            <AnimatePresence mode="wait">
              {winner && !isSpinning && (
                <motion.div
                  key={winner}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-success/50 shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                      <img src={getProfilePic(winner)} alt={winner} className="h-full w-full object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="text-success font-black text-xl uppercase tracking-wider drop-shadow-[0_0_15px_rgba(74,222,128,0.6)]">
                        {winner}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Trophy className="h-3 w-3 text-success" /> Winner!
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Spin Button */}
          <div className="mt-4 text-center">
            <Button
              onClick={spin}
              disabled={isSpinning || STUDENTS.length === 0}
              size="lg"
              className={`w-full sm:w-auto min-w-[240px] gap-3 text-lg h-16 rounded-2xl transition-all duration-300 font-bold tracking-wider uppercase
                ${isSpinning
                  ? 'bg-black/40 text-muted-foreground/50 border border-white/5 shadow-none'
                  : 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-[0_0_30px_rgba(120,119,198,0.4)] hover:shadow-[0_0_50px_rgba(120,119,198,0.6)] hover:scale-105 border border-white/20'
                }`}
            >
              <Dices className={`h-7 w-7 ${isSpinning ? 'animate-spin' : ''}`} />
              {isSpinning ? 'Rolling...' : 'Spin the Wheel'}
            </Button>
          </div>
        </div>
      </div>

      {/* Spin History Panel */}
      {spinHistory.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" /> Spin History
            </h3>
            <span className="text-xs text-muted-foreground">{spinHistory.length} result{spinHistory.length !== 1 ? "s" : ""}</span>
          </div>
          <div className="space-y-2">
            {spinHistory.map((name, i) => (
              <motion.div
                key={`${name}-${i}`}
                initial={i === 0 ? { opacity: 0, x: -20 } : false}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${
                  i === 0 ? "bg-success/10 border border-success/20" : "bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center justify-center h-7 w-7 rounded-full bg-white/10 text-xs font-bold text-muted-foreground">
                  {i + 1}
                </div>
                <div className="h-8 w-8 overflow-hidden rounded-full border border-white/15">
                  <img src={getProfilePic(name)} alt={name} className="h-full w-full object-cover" />
                </div>
                <span className={`text-sm font-medium flex-1 ${i === 0 ? "text-success" : ""}`}>{name}</span>
                {i === 0 && (
                  <span className="text-[10px] uppercase tracking-widest font-bold text-success flex items-center gap-1">
                    <Zap className="h-3 w-3" /> Latest
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
