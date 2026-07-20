import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Plus, LogOut, Users as UsersIcon, FileText, BarChart3,
  Eye, Trash2, ToggleLeft, ToggleRight, Image, BookOpen, Dices,
  Play, AlertTriangle, Lock, Shield, KeyRound, RefreshCw,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import {
  ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";
import {
  listAdminForms, createForm, deleteForm, getFormReview, startExam,
} from "@/lib/forms.functions";
import { getDashboardStats } from "@/lib/submissions.functions";
import {
  listStudents, createStudent, toggleStudentDisabled, deleteStudent, resetStudentPin,
  listAdmins, createAdmin, deleteAdmin, resetAdminPin,
} from "@/lib/users.functions";
import {
  uploadFeatured, removeFeatured, getFeatured,
} from "@/lib/featured.functions";
import { getAssignments, createAssignment, deleteAssignment } from "@/lib/assignments.functions";
import { changeMyPin, forceChangePin } from "@/lib/auth.functions";
import { ForceChangePinModal } from "@/components/ForceChangePinModal";

const serverGuardAdmin = createServerFn({ method: "GET" }).handler(async () => {
  const { redirectUnlessAdmin } = await import("@/lib/guards.server");
  await redirectUnlessAdmin();
});

export const Route = createFileRoute("/admin")({
  component: AdminPanel,
  beforeLoad: async () => {
    await serverGuardAdmin();
  },
  head: () => ({ meta: [{ title: "Admin — School Portal" }] }),
});

function AdminPanel() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [changePinOpen, setChangePinOpen] = useState(false);

  if (!user) return null;

  // Forced PIN change blocks all other actions
  if (user.pinMustChange) {
    return <ForceChangePinModal />;
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:px-8">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Command Center</p>
          <h1 className="text-2xl font-bold sm:text-3xl text-gradient">Admin Console</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => setChangePinOpen(true)} className="gap-2">
            <KeyRound className="h-4 w-4" /> Change PIN
          </Button>
          <Button variant="ghost" onClick={async () => { await logout(); navigate({ to: "/" }); }} className="gap-2">
            <LogOut className="h-4 w-4" /> Sign out
          </Button>
        </div>
      </header>

      <div className="mx-auto mt-8 max-w-6xl">
        <Tabs defaultValue="dashboard">
          <TabsList className="glass border border-white/10 bg-transparent flex-wrap h-auto p-1">
            <TabsTrigger value="dashboard" className="gap-2"><BarChart3 className="h-4 w-4" /> Dashboard</TabsTrigger>
            <TabsTrigger value="forms" className="gap-2"><FileText className="h-4 w-4" /> Forms</TabsTrigger>
            <TabsTrigger value="students" className="gap-2"><UsersIcon className="h-4 w-4" /> Students</TabsTrigger>
            <TabsTrigger value="assignments" className="gap-2"><BookOpen className="h-4 w-4" /> Assignments</TabsTrigger>
            <TabsTrigger value="featured" className="gap-2"><Image className="h-4 w-4" /> Featured</TabsTrigger>
            {user.isSuperAdmin && (
              <TabsTrigger value="admins" className="gap-2"><Shield className="h-4 w-4" /> Admins</TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="dashboard" className="mt-6"><DashboardTab /></TabsContent>
          <TabsContent value="forms" className="mt-6"><FormsTab /></TabsContent>
          <TabsContent value="students" className="mt-6"><StudentsTab /></TabsContent>
          <TabsContent value="assignments" className="mt-6"><AssignmentsTab /></TabsContent>
          <TabsContent value="featured" className="mt-6"><FeaturedTab /></TabsContent>
          {user.isSuperAdmin && (
            <TabsContent value="admins" className="mt-6"><AdminsTab /></TabsContent>
          )}
        </Tabs>
      </div>

      <ChangePinDialog open={changePinOpen} onClose={() => setChangePinOpen(false)} />
    </main>
  );
}

/* ============== DASHBOARD ============== */
function DashboardTab() {
  const fetchStats = useServerFn(getDashboardStats);
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: () => fetchStats(),
  });

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="md:col-span-2 grid gap-4 grid-cols-1 md:grid-cols-3">
        <StatCard label="Total Submissions" value={stats?.total ?? 0} />
        <StatCard label="Average Score" value={`${stats?.avg ?? 0}%`} />
        <StatCard label="Forms / Students" value={`${stats?.formCount ?? 0} / ${stats?.studentCount ?? 0}`} />
      </div>

      <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-2xl border border-border/50 bg-card/30">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
        <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground/80 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          Pass vs Fail
        </h3>
        <div className="h-64">
          <ResponsiveContainer>
            <BarChart data={[
                { name: "Pass", value: stats?.pass ?? 0, fill: "url(#colorPass)" },
                { name: "Fail", value: stats?.fail ?? 0, fill: "url(#colorFail)" },
              ]}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPass" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity={1} />
                  <stop offset="100%" stopColor="#059669" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="colorFail" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fb7185" stopOpacity={1} />
                  <stop offset="100%" stopColor="#e11d48" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.05} vertical={false} />
              <XAxis dataKey="name" stroke="currentColor" strokeOpacity={0.4} fontSize={12} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="currentColor" strokeOpacity={0.4} fontSize={12} allowDecimals={false} tickLine={false} axisLine={false} dx={-10} />
              <Tooltip cursor={false} content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-2xl border border-border/50 bg-card/30">
        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
        <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground/80 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          Avg Score per Form
        </h3>
        <div className="h-64">
          <ResponsiveContainer>
            <BarChart data={stats?.perForm ?? []} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorScore0" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a3e635" stopOpacity={1} /><stop offset="100%" stopColor="#4d7c0f" stopOpacity={0.8} /></linearGradient>
                <linearGradient id="colorScore1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#60a5fa" stopOpacity={1} /><stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.8} /></linearGradient>
                <linearGradient id="colorScore2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fde047" stopOpacity={1} /><stop offset="100%" stopColor="#a16207" stopOpacity={0.8} /></linearGradient>
                <linearGradient id="colorScore3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f472b6" stopOpacity={1} /><stop offset="100%" stopColor="#be185d" stopOpacity={0.8} /></linearGradient>
                <linearGradient id="colorScore4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c084fc" stopOpacity={1} /><stop offset="100%" stopColor="#6d28d9" stopOpacity={0.8} /></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.05} vertical={false} />
              <XAxis dataKey="name" stroke="currentColor" strokeOpacity={0.4} fontSize={12} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="currentColor" strokeOpacity={0.4} fontSize={12} tickLine={false} axisLine={false} dx={-10} />
              <Tooltip cursor={false} content={<CustomTooltip />} />
              <Bar dataKey="avg" radius={[6, 6, 0, 0]} maxBarSize={60}>
                {(stats?.perForm ?? []).map((entry: any, index: number) => {
                  return <Cell key={`cell-${index}`} fill={`url(#colorScore${index % 5})`} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-4 rounded-xl border border-border/50 shadow-2xl backdrop-blur-xl bg-background/80 min-w-[140px] animate-in fade-in zoom-in duration-200">
        <p className="text-[10px] font-bold text-muted-foreground mb-3 uppercase tracking-widest">{label || payload[0]?.name}</p>
        {payload.map((entry: any, index: number) => {
          let color = entry.color || entry.payload.fill || entry.fill || "currentColor";
          if (typeof color === 'string' && color.startsWith('url(#colorScore')) {
            const colors = ["#a3e635", "#60a5fa", "#fde047", "#f472b6", "#c084fc"];
            const idxMatch = color.match(/\d/);
            color = idxMatch ? colors[Number(idxMatch[0])] : color;
          } else if (color === "url(#colorPass)") color = "#34d399";
          else if (color === "url(#colorFail)") color = "#fb7185";

          return (
            <div key={`item-${index}`} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
                <p className="text-sm font-medium text-foreground/80">{entry.name}</p>
              </div>
              <p className="text-sm font-bold text-foreground">{entry.value}</p>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass relative overflow-hidden rounded-3xl p-6 shadow-xl border border-border/50 bg-card/30">
      <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-foreground/5 blur-3xl" />
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{label}</p>
      <p className="mt-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground">{value}</p>
    </motion.div>
  );
}

/* ============== FORMS ============== */
function FormsTab() {
  const qc = useQueryClient();
  const { user } = useAuth();
  const [wizardOpen, setWizardOpen] = useState(false);
  const [reviewFormId, setReviewFormId] = useState<string | null>(null);
  const fetchForms = useServerFn(listAdminForms);
  const removeForm = useServerFn(deleteForm);
  const startExamFn = useServerFn(startExam);

  const { data: forms = [] } = useQuery({
    queryKey: ["admin-forms"],
    queryFn: () => fetchForms(),
  });

  async function handleDelete(id: string) {
    if (!confirm("Delete this form and all submissions?")) return;
    try {
      await removeForm({ data: { formId: id } });
      qc.invalidateQueries({ queryKey: ["admin-forms"] });
      toast.success("Form deleted");
    } catch {
      toast.error("Could not delete");
    }
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">All Forms</h2>
        <Button onClick={() => setWizardOpen(true)} className="gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground glow">
          <Plus className="h-4 w-4" /> New Form
        </Button>
      </div>

      {forms.length === 0 ? (
        <div className="glass rounded-2xl p-8 text-center text-muted-foreground">No forms yet. Create your first one.</div>
      ) : (
        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-xs uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Timer</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((f: any) => (
                <tr key={f.id} className="border-t border-white/5">
                  <td className="px-4 py-3 font-medium">{f.title}</td>
                  <td className="px-4 py-3 capitalize text-muted-foreground">{f.type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{f.has_timer ? `${f.time_limit_minutes}m` : "—"}</td>
                  <td className="px-4 py-3 text-right">
                    {f.start_mode === 'synchronized' && f.status !== 'in_progress' && (
                       <Button variant="ghost" size="sm" onClick={async () => {
                          await startExamFn({ data: { formId: f.id } });
                          qc.invalidateQueries({ queryKey: ["admin-forms"] });
                          toast.success("Exam Started!");
                       }} className="gap-1 text-primary"><Play className="h-4 w-4" /> Start Exam</Button>
                    )}
                    {(!f.created_by || f.created_by === user?.id) ? (
                      <Button variant="ghost" size="sm" onClick={() => setReviewFormId(f.id)} className="gap-1"><Eye className="h-4 w-4" /> Review</Button>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground px-2 py-1"><Lock className="h-3 w-3" /> Owner only</span>
                    )}
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(f.id)} className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <NewFormWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
      <SubmissionsReview formId={reviewFormId} onClose={() => setReviewFormId(null)} />
    </div>
  );
}

/* ===== Submissions review ===== */
function SubmissionsReview({ formId, onClose }: { formId: string | null; onClose: () => void }) {
  const [viewing, setViewing] = useState<any | null>(null);
  const fetchReview = useServerFn(getFormReview);

  const { data } = useQuery({
    queryKey: ["review", formId],
    enabled: !!formId,
    queryFn: () => fetchReview({ data: { formId: formId! } }),
  });

  return (
    <Dialog open={!!formId} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="glass-strong border-white/10 sm:max-w-3xl max-h-[85vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>{data?.form?.title ?? "Submissions"}</DialogTitle>
          <DialogDescription>Submission overview for this form.</DialogDescription>
        </DialogHeader>
        {data && (
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="py-2 text-left">Student</th>
                <th className="py-2 text-left">Status</th>
                <th className="py-2 text-left">Score</th>
                <th className="py-2 text-left">%</th>
                <th className="py-2 text-left">Time</th>
                <th className="py-2 text-left">Anti-Cheat</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {data.students.map((s: any) => {
                const sub = data.subs.find((x: any) => x.student_id === s.id);
                const pct = sub ? Math.round((sub.score / Math.max(1, sub.total_questions)) * 100) : 0;
                const cheatLogs = Array.isArray(sub?.cheat_logs) ? sub.cheat_logs : [];
                return (
                  <tr key={s.id} className="border-t border-white/5">
                    <td className="py-2 font-medium">{s.name}</td>
                    <td className="py-2">{sub ? <span className="text-success">Submitted</span> : <span className="text-muted-foreground">Pending</span>}</td>
                    <td className="py-2">{sub ? `${sub.score}/${sub.total_questions}` : "—"}</td>
                    <td className="py-2">{sub ? `${pct}%` : "—"}</td>
                    <td className="py-2 font-mono text-xs">{sub ? formatDur(sub.duration_seconds) : "—"}</td>
                    <td className="py-2">
                      {cheatLogs.length > 0 ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive">
                          <AlertTriangle className="h-3 w-3" /> {cheatLogs.length} Flags
                        </span>
                      ) : sub ? (
                        <span className="text-xs text-muted-foreground">Clean</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="py-2 text-right">
                      {sub && (
                        <Button size="sm" variant="ghost" onClick={() => setViewing({ student: s, sub, questions: data.questions })} className="gap-1">
                          <Eye className="h-4 w-4" /> View
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        <Dialog open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
          <DialogContent className="glass-strong border-white/10 sm:max-w-xl max-h-[80vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>{viewing?.student?.name}'s answers</DialogTitle>
              <DialogDescription>Score: {viewing?.sub?.score}/{viewing?.sub?.total_questions}</DialogDescription>
            </DialogHeader>
            {viewing?.sub?.cheat_logs?.length > 0 && (
              <div className="mb-4 rounded-xl border border-destructive/20 bg-destructive/10 p-4">
                <h3 className="mb-2 font-bold text-destructive flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> Anti-Cheat Flags ({viewing.sub.cheat_logs.length})</h3>
                <ul className="space-y-1 text-sm text-destructive/90 list-disc pl-5">
                  {viewing.sub.cheat_logs.map((log: any, i: number) => (
                    <li key={i}><strong>{log.time}</strong> — {log.reason}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="space-y-3">
              {viewing?.questions.map((q: any, i: number) => {
                const a = (viewing.sub.answers_json?.[q.id] ?? "").toString();
                const correct = a.trim().toLowerCase() === q.correct_answer.trim().toLowerCase();
                return (
                  <div key={q.id} className="rounded-xl border border-white/10 bg-background/40 p-4">
                    <p className="text-xs text-muted-foreground">Q{i + 1}</p>
                    <p className="font-medium">{q.question_text}</p>
                    <p className={`mt-2 text-sm ${correct ? "text-success" : "text-destructive"}`}>
                      Answer: {a || <em className="text-muted-foreground">no answer</em>}
                    </p>
                    {!correct && <p className="text-xs text-muted-foreground">Correct: {q.correct_answer}</p>}
                  </div>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}

function formatDur(s: number) {
  const m = Math.floor(s / 60); const r = s % 60;
  return `${m}m ${r}s`;
}

/* ===== New Form Wizard ===== */
function NewFormWizard({ open, onClose }: { open: boolean; onClose: () => void }) {
  const qc = useQueryClient();
  const [step, setStep] = useState(1);
  const [type, setType] = useState<"quiz" | "test">("quiz");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hasTimer, setHasTimer] = useState(false);
  const [timeLimit, setTimeLimit] = useState(30);
  const [requirePin, setRequirePin] = useState(false);
  const [accessPin, setAccessPin] = useState("");
  const [startMode, setStartMode] = useState<"immediate" | "synchronized">("immediate");
  const [questions, setQuestions] = useState<Array<{
    question_text: string; question_type: "multiple_choice" | "short_answer";
    options: string[]; correct_answer: string;
  }>>([]);
  const saveForm = useServerFn(createForm);

  function reset() {
    setStep(1); setType("quiz"); setTitle(""); setDescription("");
    setHasTimer(false); setTimeLimit(30); setQuestions([]);
    setRequirePin(false); setAccessPin(""); setStartMode("immediate");
  }

  function addQuestion() {
    setQuestions((q) => [...q, { question_text: "", question_type: "multiple_choice", options: ["", "", "", ""], correct_answer: "" }]);
  }

  async function save() {
    if (!title.trim()) { toast.error("Title required"); return; }
    if (questions.length === 0) { toast.error("Add at least one question"); return; }
    try {
      await saveForm({
        data: {
          title, description: description || null, type,
          has_timer: hasTimer, time_limit_minutes: hasTimer ? timeLimit : null,
          require_pin: requirePin, access_pin: requirePin ? accessPin : null,
          start_mode: startMode,
          questions,
        },
      });
      qc.invalidateQueries({ queryKey: ["admin-forms"] });
      qc.invalidateQueries({ queryKey: ["forms-published"] });
      toast.success("Form created");
      reset(); onClose();
    } catch (e: any) {
      toast.error(e?.message ?? "Could not create form");
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) { reset(); onClose(); } }}>
      <DialogContent className="glass-strong border-white/10 sm:max-w-2xl max-h-[85vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>New Form · Step {step} of 4</DialogTitle>
          <DialogDescription>Build a custom quiz or test.</DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-3">
            <Label>Type</Label>
            <Select value={type} onValueChange={(v) => setType(v as any)}>
              <SelectTrigger className="bg-input/40 border-white/10"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="quiz">Quiz</SelectItem><SelectItem value="test">Test</SelectItem></SelectContent>
            </Select>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-3">
            <div><Label>Title</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} className="bg-input/40 border-white/10" /></div>
            <div><Label>Description</Label><Textarea value={description} onChange={(e) => setDescription(e.target.value)} className="bg-input/40 border-white/10" /></div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-white/10 p-4">
              <div><p className="font-medium">Enable Timer</p><p className="text-xs text-muted-foreground">Auto-submit when time runs out</p></div>
              <Switch checked={hasTimer} onCheckedChange={setHasTimer} />
            </div>
            {hasTimer && (
              <div><Label>Duration (minutes)</Label>
                <Input type="number" min={1} value={timeLimit} onChange={(e) => setTimeLimit(parseInt(e.target.value) || 1)} className="bg-input/40 border-white/10" />
              </div>
            )}
            
            <div className="flex items-center justify-between rounded-xl border border-white/10 p-4 mt-4">
              <div><p className="font-medium">Require Access PIN</p><p className="text-xs text-muted-foreground">Students must enter a PIN to start</p></div>
              <Switch checked={requirePin} onCheckedChange={setRequirePin} />
            </div>
            {requirePin && (
              <div><Label>Access PIN</Label>
                <Input type="text" value={accessPin} onChange={(e) => setAccessPin(e.target.value)} placeholder="e.g. MATH101" className="bg-input/40 border-white/10 font-mono" />
              </div>
            )}

            <div className="mt-4 space-y-2 rounded-xl border border-white/10 p-4">
              <div><p className="font-medium">Start Mode</p><p className="text-xs text-muted-foreground">How students begin the exam</p></div>
              <Select value={startMode} onValueChange={(v: any) => setStartMode(v)}>
                <SelectTrigger className="bg-input/40 border-white/10 mt-2"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate (Start upon joining)</SelectItem>
                  <SelectItem value="synchronized">Synchronized (Waiting Room Lobby)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-3">
            {questions.map((q, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-background/40 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Q{i + 1}</span>
                  <Button variant="ghost" size="sm" onClick={() => setQuestions((qs) => qs.filter((_, k) => k !== i))} className="text-destructive h-7"><Trash2 className="h-3.5 w-3.5" /></Button>
                </div>
                <Input placeholder="Question text" value={q.question_text}
                  onChange={(e) => setQuestions((qs) => qs.map((x, k) => k === i ? { ...x, question_text: e.target.value } : x))}
                  className="bg-input/40 border-white/10" />
                <Select value={q.question_type} onValueChange={(v: any) => setQuestions((qs) => qs.map((x, k) => k === i ? { ...x, question_type: v } : x))}>
                  <SelectTrigger className="bg-input/40 border-white/10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multiple_choice">Multiple choice</SelectItem>
                    <SelectItem value="short_answer">Short answer</SelectItem>
                  </SelectContent>
                </Select>
                {q.question_type === "multiple_choice" && (
                  <div className="grid grid-cols-2 gap-2">
                    {q.options.map((opt, oi) => (
                      <Input key={oi} placeholder={`Option ${oi + 1}`} value={opt}
                        onChange={(e) => setQuestions((qs) => qs.map((x, k) => k === i ? { ...x, options: x.options.map((o, m) => m === oi ? e.target.value : o) } : x))}
                        className="bg-input/40 border-white/10" />
                    ))}
                  </div>
                )}
                <Input placeholder="Correct answer (exact match)" value={q.correct_answer}
                  onChange={(e) => setQuestions((qs) => qs.map((x, k) => k === i ? { ...x, correct_answer: e.target.value } : x))}
                  className="bg-input/40 border-white/10" />
              </div>
            ))}
            <Button variant="outline" onClick={addQuestion} className="w-full gap-2 border-dashed border-white/15"><Plus className="h-4 w-4" /> Add question</Button>
          </div>
        )}

        <DialogFooter className="gap-2">
          {step > 1 && <Button variant="outline" onClick={() => setStep((s) => s - 1)} className="border-white/10">Back</Button>}
          {step < 4 ? (
            <Button onClick={() => setStep((s) => s + 1)} className="bg-gradient-to-r from-primary to-accent text-primary-foreground">Next</Button>
          ) : (
            <Button onClick={save} className="bg-gradient-to-r from-success to-primary text-primary-foreground glow">Create Form</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/* ============== STUDENTS ============== */
function StudentsTab() {
  const qc = useQueryClient();
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const fetchStudents = useServerFn(listStudents);
  const addStudentFn = useServerFn(createStudent);
  const toggleFn = useServerFn(toggleStudentDisabled);
  const deleteFn = useServerFn(deleteStudent);
  const resetPinFn = useServerFn(resetStudentPin);

  const [resetId, setResetId] = useState<string | null>(null);
  const [resetPin, setResetPin] = useState("");

  const { data: students = [] } = useQuery({
    queryKey: ["admin-students"],
    queryFn: () => fetchStudents(),
  });

  async function addStudent() {
    if (!name.trim() || pin.trim().length < 4) { toast.error("Name + Password (min 4 chars) required"); return; }
    try {
      await addStudentFn({ data: { name: name.trim(), pin: pin.trim() } });
      setName(""); setPin("");
      qc.invalidateQueries({ queryKey: ["admin-students"] });
      toast.success("Student added");
    } catch {
      toast.error("Failed to add");
    }
  }

  async function toggleDisabled(s: any) {
    await toggleFn({ data: { id: s.id, disabled: !s.disabled } });
    qc.invalidateQueries({ queryKey: ["admin-students"] });
  }

  async function remove(id: string) {
    if (!confirm("Delete this student?")) return;
    await deleteFn({ data: { id } });
    qc.invalidateQueries({ queryKey: ["admin-students"] });
  }

  return (
    <div className="space-y-4">
      <div className="glass rounded-2xl p-4 flex flex-col gap-2 sm:flex-row sm:items-end">
        <div className="flex-1"><Label>Name</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Student name" className="bg-input/40 border-white/10" /></div>
        <div className="flex-1"><Label>Temporary Password</Label><Input value={pin} onChange={(e) => setPin(e.target.value)} placeholder="e.g. temp1234" className="bg-input/40 border-white/10 font-mono" /></div>
        <Button onClick={addStudent} className="gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground"><Plus className="h-4 w-4" /> Add</Button>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-widest text-muted-foreground">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Password Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s: any) => (
              <tr key={s.id} className="border-t border-white/5">
                <td className="px-4 py-3 font-medium">{s.name}</td>
                <td className="px-4 py-3">
                  {s.disabled ? <span className="text-destructive">Disabled</span> : <span className="text-success">Active</span>}
                </td>
                <td className="px-4 py-3">
                  {s.pin_must_change ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-500">
                      <AlertTriangle className="h-3 w-3" /> Temp Password
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">Set</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="sm" onClick={() => { setResetId(s.id); setResetPin(""); }} className="gap-1">
                    <RefreshCw className="h-4 w-4" /> Reset Password
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => toggleDisabled(s)}>
                    {s.disabled ? <ToggleLeft className="h-4 w-4" /> : <ToggleRight className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => remove(s.id)} className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                </td>
              </tr>
            ))}
            {students.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No students yet.</td></tr>}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">Passwords are hashed in the database and cannot be viewed after creation.</p>

      <Dialog open={!!resetId} onOpenChange={(o) => !o && setResetId(null)}>
        <DialogContent className="glass-strong border-white/10 sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
            <DialogDescription>Set a new temporary password. The student will be forced to change it on their next login.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <Label>New Temporary Password</Label>
              <Input
                value={resetPin}
                onChange={(e) => setResetPin(e.target.value)}
                placeholder="min 4 chars"
                className="bg-input/40 border-white/10 font-mono"
              />
            </div>
            <Button
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
              onClick={async () => {
                if (resetPin.length < 4) { toast.error("Password must be at least 4 characters"); return; }
                try {
                  await resetPinFn({ data: { id: resetId!, newPin: resetPin } });
                  qc.invalidateQueries({ queryKey: ["admin-students"] });
                  toast.success("Password reset — student must change on next login");
                  setResetId(null); setResetPin("");
                } catch (err: any) {
                  toast.error(err?.message ?? "Failed to reset password");
                }
              }}
            >
              Confirm Reset
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* ============== FEATURED OF THE DAY ============== */
function FeaturedTab() {
  const qc = useQueryClient();
  const [uploading, setUploading] = useState(false);
  const [description, setDescription] = useState("");
  const fetchFeatured = useServerFn(getFeatured);
  const doUpload = useServerFn(uploadFeatured);
  const doRemove = useServerFn(removeFeatured);

  const { data: featuredData, isLoading } = useQuery({
    queryKey: ["admin-featured"],
    queryFn: () => fetchFeatured(),
  });

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File is too large (max 5MB)");
      return;
    }

    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = (reader.result as string).split(",")[1];
        await doUpload({
          data: {
            base64: base64String,
            mimeType: file.type,
            fileName: file.name,
            description: description.trim() || undefined,
          },
        });
        qc.invalidateQueries({ queryKey: ["admin-featured"] });
        qc.invalidateQueries({ queryKey: ["featured-of-day"] });
        toast.success("Featured post uploaded successfully");
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      toast.error(err.message ?? "Failed to upload featured post");
    } finally {
      setUploading(false);
    }
  }

  async function handleRemove() {
    if (!confirm("Remove the current featured post?")) return;
    setUploading(true);
    try {
      await doRemove();
      qc.invalidateQueries({ queryKey: ["admin-featured"] });
      qc.invalidateQueries({ queryKey: ["featured-of-day"] });
      setDescription("");
      toast.success("Featured post removed");
    } catch {
      toast.error("Failed to remove featured post");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="glass rounded-2xl p-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Featured Post</h2>
          <p className="text-sm text-muted-foreground">
            This image and optional explanation will be shown on the student dashboard homepage.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4 min-h-[250px] flex flex-col items-center justify-center gap-4">
          {isLoading ? (
            <p className="text-muted-foreground animate-pulse">Loading...</p>
          ) : featuredData?.url ? (
            <div className="flex flex-col items-center gap-4 w-full">
              <img src={featuredData.url} alt="Current featured" className="max-h-[400px] rounded-lg" />
              {featuredData.description && (
                <div className="w-full bg-black/40 p-4 rounded-lg text-sm text-white/80 whitespace-pre-wrap text-left">
                  {featuredData.description}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center text-muted-foreground gap-2">
              <Image className="h-8 w-8 opacity-50" />
              <p>No featured post currently</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label>Optional Explanation/Details</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add more details about this featured post..."
              rows={3}
            />
          </div>

          <div className="flex items-center gap-4">
            <Button asChild disabled={uploading} className="gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground glow cursor-pointer">
              <label>
                <Plus className="h-4 w-4" />
                {uploading ? "Uploading..." : "Upload New Image"}
                <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={uploading} />
              </label>
            </Button>

            {featuredData?.url && (
              <Button variant="outline" onClick={handleRemove} disabled={uploading} className="border-destructive/30 text-destructive hover:bg-destructive/10">
                <Trash2 className="h-4 w-4 mr-2" /> Remove Post
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== ASSIGNMENTS ============== */
function AssignmentsTab() {
  const qc = useQueryClient();
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [instruction, setInstruction] = useState("");
  const [deadline, setDeadline] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchAssignments = useServerFn(getAssignments);
  const doCreate = useServerFn(createAssignment);
  const doDelete = useServerFn(deleteAssignment);

  const { data: assignments, isLoading } = useQuery({
    queryKey: ["admin-assignments"],
    queryFn: () => fetchAssignments(),
  });

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !instruction.trim()) return toast.error("Title and Instruction are required.");
    setSubmitting(true);
    try {
      let base64Image, mimeType, fileName;
      if (imageFile) {
        const buffer = await imageFile.arrayBuffer();
        base64Image = Buffer.from(buffer).toString("base64");
        mimeType = imageFile.type;
        fileName = imageFile.name;
      }

      await doCreate({
        data: {
          title,
          instruction,
          deadline_at: deadline ? new Date(deadline).toISOString() : null,
          base64Image,
          mimeType,
          fileName,
        }
      });
      toast.success("Assignment created!");
      setIsCreating(false);
      setTitle(""); setInstruction(""); setDeadline(""); setImageFile(null);
      qc.invalidateQueries({ queryKey: ["admin-assignments"] });
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this assignment?")) return;
    try {
      await doDelete({ data: { id } });
      toast.success("Deleted successfully.");
      qc.invalidateQueries({ queryKey: ["admin-assignments"] });
    } catch (err: any) {
      toast.error(err.message);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Class Assignments</h2>
          <p className="text-sm text-muted-foreground">Post tasks or activities for students.</p>
        </div>
        <Button onClick={() => setIsCreating(true)} className="gap-2 bg-primary text-primary-foreground">
          <Plus className="h-4 w-4" /> New Assignment
        </Button>
      </div>

      <Dialog open={isCreating} onOpenChange={setIsCreating}>
        <DialogContent className="glass-strong border-white/10 sm:max-w-[500px]">
          <form onSubmit={handleCreate}>
            <DialogHeader>
              <DialogTitle>Create Assignment</DialogTitle>
              <DialogDescription>Add a new assignment for your students.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Title</Label>
                <Input value={title} onChange={e => setTitle(e.target.value)} required placeholder="e.g., Math Homework 5" />
              </div>
              <div className="grid gap-2">
                <Label>Instructions</Label>
                <Textarea value={instruction} onChange={e => setInstruction(e.target.value)} required rows={4} placeholder="Describe the task..." />
              </div>
              <div className="grid gap-2">
                <Label>Deadline (Optional)</Label>
                <Input type="datetime-local" value={deadline} onChange={e => setDeadline(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label>Attach Image (Optional)</Label>
                <Input type="file" accept="image/*" onChange={e => setImageFile(e.target.files?.[0] || null)} />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsCreating(false)}>Cancel</Button>
              <Button type="submit" disabled={submitting} className="bg-primary">{submitting ? "Creating..." : "Create"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {isLoading ? (
        <div className="glass rounded-2xl p-8 text-center animate-pulse">Loading...</div>
      ) : assignments?.length === 0 ? (
        <div className="glass rounded-2xl p-12 text-center text-muted-foreground">
          <BookOpen className="mx-auto mb-4 h-12 w-12 opacity-20" />
          <p>No assignments posted yet.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {assignments?.map((a: any) => (
            <div key={a.id} className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg">{a.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap mt-1">{a.instruction}</p>
                {a.deadline_at && (
                  <p className="text-xs text-primary mt-2 font-medium">
                    Deadline: {new Date(a.deadline_at).toLocaleString()}
                  </p>
                )}
                {a.image_url && (
                  <a href={a.image_url} target="_blank" rel="noreferrer" className="text-xs text-blue-400 mt-2 block underline hover:opacity-80">
                    <img src={a.image_url} alt="Attached image" className="max-h-32 mt-2 rounded-lg object-contain" />
                  </a>
                )}
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleDelete(a.id)} className="text-destructive hover:bg-destructive/10 hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


/* ============== CHANGE PIN DIALOG ============== */
function ChangePinDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [loading, setLoading] = useState(false);
  const doChangePin = useServerFn(changeMyPin);

  function reset() { setCurrentPin(""); setNewPin(""); setConfirmPin(""); }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newPin.length < 4) { toast.error("PIN must be at least 4 characters"); return; }
    if (newPin !== confirmPin) { toast.error("PINs don't match"); return; }
    setLoading(true);
    try {
      await doChangePin({ data: { currentPin, newPin } });
      toast.success("PIN changed successfully!");
      reset();
      onClose();
    } catch (err: any) {
      toast.error(err?.message ?? "Could not change PIN");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) { reset(); onClose(); } }}>
      <DialogContent className="glass-strong border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Change My PIN</DialogTitle>
          <DialogDescription>Enter your current PIN and choose a new one.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Current PIN</Label>
            <Input type="password" value={currentPin} onChange={(e) => setCurrentPin(e.target.value)} placeholder="Your current PIN" className="bg-input/40 border-white/10 font-mono" autoFocus />
          </div>
          <div>
            <Label>New PIN</Label>
            <Input type="password" value={newPin} onChange={(e) => setNewPin(e.target.value)} placeholder="New PIN (min 4 chars)" className="bg-input/40 border-white/10 font-mono" />
          </div>
          <div>
            <Label>Confirm New PIN</Label>
            <Input type="password" value={confirmPin} onChange={(e) => setConfirmPin(e.target.value)} placeholder="Re-enter new PIN" className="bg-input/40 border-white/10 font-mono" />
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => { reset(); onClose(); }}>Cancel</Button>
            <Button type="submit" disabled={loading} className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              {loading ? "Changing..." : "Change PIN"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

/* ============== ADMINS TAB (Super Admin Only) ============== */
function AdminsTab() {
  const qc = useQueryClient();
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [resetId, setResetId] = useState<string | null>(null);
  const [resetPin, setResetPin] = useState("");

  const fetchAdmins = useServerFn(listAdmins);
  const addAdminFn = useServerFn(createAdmin);
  const deleteFn = useServerFn(deleteAdmin);
  const resetFn = useServerFn(resetAdminPin);

  const { data: admins = [] } = useQuery({
    queryKey: ["admin-admins"],
    queryFn: () => fetchAdmins(),
  });

  async function addAdmin() {
    if (!name.trim() || pin.trim().length < 4) { toast.error("Name + Temp PIN (min 4 chars) required"); return; }
    try {
      await addAdminFn({ data: { name: name.trim(), pin: pin.trim() } });
      setName(""); setPin("");
      qc.invalidateQueries({ queryKey: ["admin-admins"] });
      toast.success("Admin created with temporary PIN");
    } catch (err: any) {
      toast.error(err?.message ?? "Failed to create admin");
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this admin?")) return;
    try {
      await deleteFn({ data: { id } });
      qc.invalidateQueries({ queryKey: ["admin-admins"] });
      toast.success("Admin deleted");
    } catch (err: any) {
      toast.error(err?.message ?? "Failed to delete");
    }
  }

  async function handleReset() {
    if (!resetId || resetPin.length < 4) { toast.error("PIN must be at least 4 characters"); return; }
    try {
      await resetFn({ data: { id: resetId, newPin: resetPin } });
      qc.invalidateQueries({ queryKey: ["admin-admins"] });
      toast.success("PIN reset \u2014 admin must change on next login");
      setResetId(null); setResetPin("");
    } catch (err: any) {
      toast.error(err?.message ?? "Failed to reset PIN");
    }
  }

  return (
    <div className="space-y-4">
      <div className="glass rounded-2xl p-4 flex flex-col gap-2 sm:flex-row sm:items-end">
        <div className="flex-1"><Label>Admin Name</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="New admin name" className="bg-input/40 border-white/10" /></div>
        <div className="flex-1"><Label>Temporary PIN</Label><Input value={pin} onChange={(e) => setPin(e.target.value)} placeholder="e.g. temp1234" className="bg-input/40 border-white/10 font-mono" /></div>
        <Button onClick={addAdmin} className="gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground"><Plus className="h-4 w-4" /> Add Admin</Button>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-xs uppercase tracking-widest text-muted-foreground">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">PIN Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a: any) => (
              <tr key={a.id} className="border-t border-white/5">
                <td className="px-4 py-3 font-medium">{a.name}</td>
                <td className="px-4 py-3">
                  {a.disabled ? <span className="text-destructive">Disabled</span> : <span className="text-success">Active</span>}
                </td>
                <td className="px-4 py-3">
                  {a.pin_must_change ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-500">
                      <AlertTriangle className="h-3 w-3" /> Temp PIN
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">Set</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="sm" onClick={() => { setResetId(a.id); setResetPin(""); }} className="gap-1">
                    <RefreshCw className="h-4 w-4" /> Reset PIN
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(a.id)} className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
            {admins.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No other admins yet.</td></tr>}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">Admins with \u201cTemp PIN\u201d must change their PIN on next login. PINs are hashed and cannot be viewed after creation.</p>

      <Dialog open={!!resetId} onOpenChange={(o) => !o && setResetId(null)}>
        <DialogContent className="glass-strong border-white/10 sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Reset Admin PIN</DialogTitle>
            <DialogDescription>Set a new temporary PIN. The admin will be forced to change it on their next login.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div><Label>New Temporary PIN</Label><Input type="text" value={resetPin} onChange={(e) => setResetPin(e.target.value)} placeholder="e.g. temp1234" className="bg-input/40 border-white/10 font-mono" autoFocus /></div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setResetId(null)}>Cancel</Button>
            <Button onClick={handleReset} className="bg-gradient-to-r from-primary to-accent text-primary-foreground">Reset PIN</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

