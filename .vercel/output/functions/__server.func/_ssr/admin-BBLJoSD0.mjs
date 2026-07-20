import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery, a as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { u as useAuth, a as useServerFn, c as createSsrRpc } from "./router-XPOIPsTP.mjs";
import { B as Button, c as cn } from "./button-DjOZMqFS.mjs";
import { I as Input } from "./input-D_U8fI25.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { d as getAssignments, h as createAssignment, i as deleteAssignment, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, f as DialogDescription, j as DialogFooter, g as getFeatured, u as uploadFeatured, r as removeFeatured } from "./assignments.functions-OqtNG9iY.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { S as Switch$1, a as SwitchThumb } from "../_libs/radix-ui__react-switch.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectTrigger$1, c as SelectIcon, d as SelectPortal, e as SelectContent$1, f as SelectViewport, g as SelectItem$1, h as SelectItemIndicator, i as SelectItemText, j as SelectScrollUpButton$1, k as SelectScrollDownButton$1, l as SelectLabel$1, m as SelectSeparator$1 } from "../_libs/radix-ui__react-select.mjs";
import { u as ue } from "../_libs/sonner.mjs";
import { b as getDashboardStats, c as listAdminForms, d as deleteForm, s as startExam, e as createForm, f as getFormReview } from "./submissions.functions-BsjqY3T8.mjs";
import { c as createServerFn } from "./server-Bh35ipan.mjs";
import "../_libs/seroval.mjs";
import { L as LogOut, o as ChartColumn, F as FileText, U as Users, B as BookOpen, I as Image, P as Plus, p as Play, E as Eye, q as Trash2, r as ToggleLeft, s as ToggleRight, t as TriangleAlert, u as ChevronDown, d as Check, v as ChevronUp } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Bar, b as Cell } from "../_libs/recharts.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType, b as booleanType } from "../_libs/zod.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Switch$1,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SwitchThumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Switch$1.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Select = Select$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectTrigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollUpButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollDownButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectContent$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectViewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectContent$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectLabel$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectLabel$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectItem$1.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectSeparator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectSeparator$1.displayName;
const listStudents = createServerFn({
  method: "GET"
}).handler(createSsrRpc("f6a17220f53f43f0be0bb4675b08bc7d0abc86f67b0a49eb578011f1aff6e341"));
const createStudent = createServerFn({
  method: "POST"
}).validator((d) => objectType({
  name: stringType().min(1).max(100),
  pin: stringType().min(4).max(32)
}).parse(d)).handler(createSsrRpc("6b2368e01b9d9c0b0581503c38eb8a4885eb357baa4378729db997d501be91ca"));
const toggleStudentDisabled = createServerFn({
  method: "POST"
}).validator((d) => objectType({
  id: stringType().uuid(),
  disabled: booleanType()
}).parse(d)).handler(createSsrRpc("d74d4b29fbab4cd8ae68e79af262cca14fc64b667ddcf518d8c2f4bd7a163261"));
const deleteStudent = createServerFn({
  method: "POST"
}).validator((d) => objectType({
  id: stringType().uuid()
}).parse(d)).handler(createSsrRpc("781bc413e9193340db58fe33e2fc1fc9399b3fdca04efa600bdb8c106512e914"));
function AdminPanel() {
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  if (!user) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen px-4 py-8 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mx-auto flex max-w-6xl items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Command Center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold sm:text-3xl text-gradient", children: "Admin Console" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: async () => {
        await logout();
        navigate({
          to: "/"
        });
      }, className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        " Sign out"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-8 max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "dashboard", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "glass border border-white/10 bg-transparent flex-wrap h-auto p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "dashboard", className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4" }),
          " Dashboard"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "forms", className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
          " Forms"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "students", className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
          " Students"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "assignments", className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
          " Assignments"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "featured", className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-4 w-4" }),
          " Featured"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "dashboard", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "forms", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormsTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "students", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StudentsTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "assignments", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AssignmentsTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "featured", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedTab, {}) })
    ] }) })
  ] });
}
function DashboardTab() {
  const fetchStats = useServerFn(getDashboardStats);
  const {
    data: stats
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: () => fetchStats()
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 grid gap-4 grid-cols-1 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Submissions", value: stats?.total ?? 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Average Score", value: `${stats?.avg ?? 0}%` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Forms / Students", value: `${stats?.formCount ?? 0} / ${stats?.studentCount ?? 0}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass relative overflow-hidden rounded-3xl p-6 shadow-2xl border border-border/50 bg-card/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-6 text-sm font-bold uppercase tracking-widest text-foreground/80 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" }),
        "Pass vs Fail"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: [{
        name: "Pass",
        value: stats?.pass ?? 0,
        fill: "url(#colorPass)"
      }, {
        name: "Fail",
        value: stats?.fail ?? 0,
        fill: "url(#colorFail)"
      }], margin: {
        top: 10,
        right: 10,
        left: -20,
        bottom: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorPass", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#34d399", stopOpacity: 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#059669", stopOpacity: 0.8 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorFail", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#fb7185", stopOpacity: 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#e11d48", stopOpacity: 0.8 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "currentColor", strokeOpacity: 0.05, vertical: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: "currentColor", strokeOpacity: 0.4, fontSize: 12, tickLine: false, axisLine: false, dy: 10 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "currentColor", strokeOpacity: 0.4, fontSize: 12, allowDecimals: false, tickLine: false, axisLine: false, dx: -10 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { cursor: false, content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", radius: [6, 6, 0, 0], maxBarSize: 60 })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass relative overflow-hidden rounded-3xl p-6 shadow-2xl border border-border/50 bg-card/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-6 text-sm font-bold uppercase tracking-widest text-foreground/80 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" }),
        "Avg Score per Form"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: stats?.perForm ?? [], margin: {
        top: 10,
        right: 10,
        left: -20,
        bottom: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorScore0", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#a3e635", stopOpacity: 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#4d7c0f", stopOpacity: 0.8 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorScore1", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#60a5fa", stopOpacity: 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#1d4ed8", stopOpacity: 0.8 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorScore2", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#fde047", stopOpacity: 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#a16207", stopOpacity: 0.8 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorScore3", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#f472b6", stopOpacity: 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#be185d", stopOpacity: 0.8 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorScore4", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#c084fc", stopOpacity: 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#6d28d9", stopOpacity: 0.8 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "currentColor", strokeOpacity: 0.05, vertical: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: "currentColor", strokeOpacity: 0.4, fontSize: 12, tickLine: false, axisLine: false, dy: 10 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "currentColor", strokeOpacity: 0.4, fontSize: 12, tickLine: false, axisLine: false, dx: -10 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { cursor: false, content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "avg", radius: [6, 6, 0, 0], maxBarSize: 60, children: (stats?.perForm ?? []).map((entry, index) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: `url(#colorScore${index % 5})` }, `cell-${index}`);
        }) })
      ] }) }) })
    ] })
  ] });
}
const CustomTooltip = ({
  active,
  payload,
  label
}) => {
  if (active && payload && payload.length) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-4 rounded-xl border border-border/50 shadow-2xl backdrop-blur-xl bg-background/80 min-w-[140px] animate-in fade-in zoom-in duration-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-muted-foreground mb-3 uppercase tracking-widest", children: label || payload[0]?.name }),
      payload.map((entry, index) => {
        let color = entry.color || entry.payload.fill || entry.fill || "currentColor";
        if (typeof color === "string" && color.startsWith("url(#colorScore")) {
          const colors = ["#a3e635", "#60a5fa", "#fde047", "#f472b6", "#c084fc"];
          const idxMatch = color.match(/\d/);
          color = idxMatch ? colors[Number(idxMatch[0])] : color;
        } else if (color === "url(#colorPass)") color = "#34d399";
        else if (color === "url(#colorFail)") color = "#fb7185";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full shadow-sm", style: {
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground/80", children: entry.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: entry.value })
        ] }, `item-${index}`);
      })
    ] });
  }
  return null;
};
function StatCard({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 10
  }, animate: {
    opacity: 1,
    y: 0
  }, className: "glass relative overflow-hidden rounded-3xl p-6 shadow-xl border border-border/50 bg-card/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-foreground/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-bold", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground", children: value })
  ] });
}
function FormsTab() {
  const qc = useQueryClient();
  const [wizardOpen, setWizardOpen] = reactExports.useState(false);
  const [reviewFormId, setReviewFormId] = reactExports.useState(null);
  const fetchForms = useServerFn(listAdminForms);
  const removeForm = useServerFn(deleteForm);
  const startExamFn = useServerFn(startExam);
  const {
    data: forms = []
  } = useQuery({
    queryKey: ["admin-forms"],
    queryFn: () => fetchForms()
  });
  async function handleDelete(id) {
    if (!confirm("Delete this form and all submissions?")) return;
    try {
      await removeForm({
        data: {
          formId: id
        }
      });
      qc.invalidateQueries({
        queryKey: ["admin-forms"]
      });
      ue.success("Form deleted");
    } catch {
      ue.error("Could not delete");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "All Forms" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setWizardOpen(true), className: "gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " New Form"
      ] })
    ] }),
    forms.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-8 text-center text-muted-foreground", children: "No forms yet. Create your first one." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-white/5 text-xs uppercase tracking-widest text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Timer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: forms.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 capitalize text-muted-foreground", children: f.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: f.has_timer ? `${f.time_limit_minutes}m` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right", children: [
          f.start_mode === "synchronized" && f.status !== "in_progress" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: async () => {
            await startExamFn({
              data: {
                formId: f.id
              }
            });
            qc.invalidateQueries({
              queryKey: ["admin-forms"]
            });
            ue.success("Exam Started!");
          }, className: "gap-1 text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
            " Start Exam"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setReviewFormId(f.id), className: "gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
            " Review"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => handleDelete(f.id), className: "text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
        ] })
      ] }, f.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewFormWizard, { open: wizardOpen, onClose: () => setWizardOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubmissionsReview, { formId: reviewFormId, onClose: () => setReviewFormId(null) })
  ] });
}
function SubmissionsReview({
  formId,
  onClose
}) {
  const [viewing, setViewing] = reactExports.useState(null);
  const fetchReview = useServerFn(getFormReview);
  const {
    data
  } = useQuery({
    queryKey: ["review", formId],
    enabled: !!formId,
    queryFn: () => fetchReview({
      data: {
        formId
      }
    })
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!formId, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "glass-strong border-white/10 sm:max-w-3xl max-h-[85vh] overflow-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: data?.form?.title ?? "Submissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Submission overview for this form." })
    ] }),
    data && /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-left", children: "Student" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-left", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-left", children: "Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-left", children: "%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-left", children: "Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-left", children: "Anti-Cheat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: data.students.map((s) => {
        const sub = data.subs.find((x) => x.student_id === s.id);
        const pct = sub ? Math.round(sub.score / Math.max(1, sub.total_questions) * 100) : 0;
        const cheatLogs = Array.isArray(sub?.cheat_logs) ? sub.cheat_logs : [];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-medium", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: sub ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success", children: "Submitted" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Pending" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: sub ? `${sub.score}/${sub.total_questions}` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: sub ? `${pct}%` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-mono text-xs", children: sub ? formatDur(sub.duration_seconds) : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: cheatLogs.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3" }),
            " ",
            cheatLogs.length,
            " Flags"
          ] }) : sub ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Clean" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "—" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-right", children: sub && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: () => setViewing({
            student: s,
            sub,
            questions: data.questions
          }), className: "gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
            " View"
          ] }) })
        ] }, s.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!viewing, onOpenChange: (o) => !o && setViewing(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "glass-strong border-white/10 sm:max-w-xl max-h-[80vh] overflow-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
          viewing?.student?.name,
          "'s answers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
          "Score: ",
          viewing?.sub?.score,
          "/",
          viewing?.sub?.total_questions
        ] })
      ] }),
      viewing?.sub?.cheat_logs?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 rounded-xl border border-destructive/20 bg-destructive/10 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-2 font-bold text-destructive flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
          " Anti-Cheat Flags (",
          viewing.sub.cheat_logs.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-sm text-destructive/90 list-disc pl-5", children: viewing.sub.cheat_logs.map((log, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: log.time }),
          " — ",
          log.reason
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: viewing?.questions.map((q, i) => {
        const a = (viewing.sub.answers_json?.[q.id] ?? "").toString();
        const correct = a.trim().toLowerCase() === q.correct_answer.trim().toLowerCase();
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-background/40 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Q",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: q.question_text }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `mt-2 text-sm ${correct ? "text-success" : "text-destructive"}`, children: [
            "Answer: ",
            a || /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-muted-foreground", children: "no answer" })
          ] }),
          !correct && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Correct: ",
            q.correct_answer
          ] })
        ] }, q.id);
      }) })
    ] }) })
  ] }) });
}
function formatDur(s) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}m ${r}s`;
}
function NewFormWizard({
  open,
  onClose
}) {
  const qc = useQueryClient();
  const [step, setStep] = reactExports.useState(1);
  const [type, setType] = reactExports.useState("quiz");
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [hasTimer, setHasTimer] = reactExports.useState(false);
  const [timeLimit, setTimeLimit] = reactExports.useState(30);
  const [requirePin, setRequirePin] = reactExports.useState(false);
  const [accessPin, setAccessPin] = reactExports.useState("");
  const [startMode, setStartMode] = reactExports.useState("immediate");
  const [questions, setQuestions] = reactExports.useState([]);
  const saveForm = useServerFn(createForm);
  function reset() {
    setStep(1);
    setType("quiz");
    setTitle("");
    setDescription("");
    setHasTimer(false);
    setTimeLimit(30);
    setQuestions([]);
    setRequirePin(false);
    setAccessPin("");
    setStartMode("immediate");
  }
  function addQuestion() {
    setQuestions((q) => [...q, {
      question_text: "",
      question_type: "multiple_choice",
      options: ["", "", "", ""],
      correct_answer: ""
    }]);
  }
  async function save() {
    if (!title.trim()) {
      ue.error("Title required");
      return;
    }
    if (questions.length === 0) {
      ue.error("Add at least one question");
      return;
    }
    try {
      await saveForm({
        data: {
          title,
          description: description || null,
          type,
          has_timer: hasTimer,
          time_limit_minutes: hasTimer ? timeLimit : null,
          require_pin: requirePin,
          access_pin: requirePin ? accessPin : null,
          start_mode: startMode,
          questions
        }
      });
      qc.invalidateQueries({
        queryKey: ["admin-forms"]
      });
      qc.invalidateQueries({
        queryKey: ["forms-published"]
      });
      ue.success("Form created");
      reset();
      onClose();
    } catch (e) {
      ue.error(e?.message ?? "Could not create form");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (o) => {
    if (!o) {
      reset();
      onClose();
    }
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "glass-strong border-white/10 sm:max-w-2xl max-h-[85vh] overflow-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
        "New Form · Step ",
        step,
        " of 4"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Build a custom quiz or test." })
    ] }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: type, onValueChange: (v) => setType(v), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "bg-input/40 border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "quiz", children: "Quiz" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "test", children: "Test" })
        ] })
      ] })
    ] }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: title, onChange: (e) => setTitle(e.target.value), className: "bg-input/40 border-white/10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: description, onChange: (e) => setDescription(e.target.value), className: "bg-input/40 border-white/10" })
      ] })
    ] }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-white/10 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Enable Timer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Auto-submit when time runs out" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: hasTimer, onCheckedChange: setHasTimer })
      ] }),
      hasTimer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Duration (minutes)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, value: timeLimit, onChange: (e) => setTimeLimit(parseInt(e.target.value) || 1), className: "bg-input/40 border-white/10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-white/10 p-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Require Access PIN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Students must enter a PIN to start" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: requirePin, onCheckedChange: setRequirePin })
      ] }),
      requirePin && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Access PIN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", value: accessPin, onChange: (e) => setAccessPin(e.target.value), placeholder: "e.g. MATH101", className: "bg-input/40 border-white/10 font-mono" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 rounded-xl border border-white/10 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Start Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "How students begin the exam" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: startMode, onValueChange: (v) => setStartMode(v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "bg-input/40 border-white/10 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "immediate", children: "Immediate (Start upon joining)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "synchronized", children: "Synchronized (Waiting Room Lobby)" })
          ] })
        ] })
      ] })
    ] }),
    step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      questions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-background/40 p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "Q",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => setQuestions((qs) => qs.filter((_, k) => k !== i)), className: "text-destructive h-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Question text", value: q.question_text, onChange: (e) => setQuestions((qs) => qs.map((x, k) => k === i ? {
          ...x,
          question_text: e.target.value
        } : x)), className: "bg-input/40 border-white/10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: q.question_type, onValueChange: (v) => setQuestions((qs) => qs.map((x, k) => k === i ? {
          ...x,
          question_type: v
        } : x)), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "bg-input/40 border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "multiple_choice", children: "Multiple choice" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "short_answer", children: "Short answer" })
          ] })
        ] }),
        q.question_type === "multiple_choice" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: q.options.map((opt, oi) => /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: `Option ${oi + 1}`, value: opt, onChange: (e) => setQuestions((qs) => qs.map((x, k) => k === i ? {
          ...x,
          options: x.options.map((o, m) => m === oi ? e.target.value : o)
        } : x)), className: "bg-input/40 border-white/10" }, oi)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Correct answer (exact match)", value: q.correct_answer, onChange: (e) => setQuestions((qs) => qs.map((x, k) => k === i ? {
          ...x,
          correct_answer: e.target.value
        } : x)), className: "bg-input/40 border-white/10" })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: addQuestion, className: "w-full gap-2 border-dashed border-white/15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Add question"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", children: [
      step > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setStep((s) => s - 1), className: "border-white/10", children: "Back" }),
      step < 4 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setStep((s) => s + 1), className: "bg-gradient-to-r from-primary to-accent text-primary-foreground", children: "Next" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, className: "bg-gradient-to-r from-success to-primary text-primary-foreground glow", children: "Create Form" })
    ] })
  ] }) });
}
function StudentsTab() {
  const qc = useQueryClient();
  const [name, setName] = reactExports.useState("");
  const [pin, setPin] = reactExports.useState("");
  const fetchStudents = useServerFn(listStudents);
  const addStudentFn = useServerFn(createStudent);
  const toggleFn = useServerFn(toggleStudentDisabled);
  const deleteFn = useServerFn(deleteStudent);
  const {
    data: students = []
  } = useQuery({
    queryKey: ["admin-students"],
    queryFn: () => fetchStudents()
  });
  async function addStudent() {
    if (!name.trim() || pin.trim().length < 4) {
      ue.error("Name + PIN (min 4 chars) required");
      return;
    }
    try {
      await addStudentFn({
        data: {
          name: name.trim(),
          pin: pin.trim()
        }
      });
      setName("");
      setPin("");
      qc.invalidateQueries({
        queryKey: ["admin-students"]
      });
      ue.success("Student added");
    } catch {
      ue.error("Failed to add");
    }
  }
  async function toggleDisabled(s) {
    await toggleFn({
      data: {
        id: s.id,
        disabled: !s.disabled
      }
    });
    qc.invalidateQueries({
      queryKey: ["admin-students"]
    });
  }
  async function remove(id) {
    if (!confirm("Delete this student?")) return;
    await deleteFn({
      data: {
        id
      }
    });
    qc.invalidateQueries({
      queryKey: ["admin-students"]
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-4 flex flex-col gap-2 sm:flex-row sm:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value), placeholder: "Student name", className: "bg-input/40 border-white/10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Login PIN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: pin, onChange: (e) => setPin(e.target.value), placeholder: "e.g. 12345678", className: "bg-input/40 border-white/10 font-mono" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: addStudent, className: "gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Add"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-white/5 text-xs uppercase tracking-widest text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        students.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: s.disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "Disabled" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success", children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => toggleDisabled(s), children: s.disabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLeft, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => remove(s.id), className: "text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] })
        ] }, s.id)),
        students.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 3, className: "px-4 py-8 text-center text-muted-foreground", children: "No students yet." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "PINs are hashed in the database and cannot be viewed after creation. Reset by deleting and re-adding the student." })
  ] });
}
function FeaturedTab() {
  const qc = useQueryClient();
  const [uploading, setUploading] = reactExports.useState(false);
  const [description, setDescription] = reactExports.useState("");
  const fetchFeatured = useServerFn(getFeatured);
  const doUpload = useServerFn(uploadFeatured);
  const doRemove = useServerFn(removeFeatured);
  const {
    data: featuredData,
    isLoading
  } = useQuery({
    queryKey: ["admin-featured"],
    queryFn: () => fetchFeatured()
  });
  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      ue.error("File is too large (max 5MB)");
      return;
    }
    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result.split(",")[1];
        await doUpload({
          data: {
            base64: base64String,
            mimeType: file.type,
            fileName: file.name,
            description: description.trim() || void 0
          }
        });
        qc.invalidateQueries({
          queryKey: ["admin-featured"]
        });
        qc.invalidateQueries({
          queryKey: ["featured-of-day"]
        });
        ue.success("Featured post uploaded successfully");
      };
      reader.readAsDataURL(file);
    } catch (err) {
      ue.error(err.message ?? "Failed to upload featured post");
    } finally {
      setUploading(false);
    }
  }
  async function handleRemove() {
    if (!confirm("Remove the current featured post?")) return;
    setUploading(true);
    try {
      await doRemove();
      qc.invalidateQueries({
        queryKey: ["admin-featured"]
      });
      qc.invalidateQueries({
        queryKey: ["featured-of-day"]
      });
      setDescription("");
      ue.success("Featured post removed");
    } catch {
      ue.error("Failed to remove featured post");
    } finally {
      setUploading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Featured Post" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This image and optional explanation will be shown on the student dashboard homepage." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-white/10 bg-black/20 p-4 min-h-[250px] flex flex-col items-center justify-center gap-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground animate-pulse", children: "Loading..." }) : featuredData?.url ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featuredData.url, alt: "Current featured", className: "max-h-[400px] rounded-lg" }),
      featuredData.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-black/40 p-4 rounded-lg text-sm text-white/80 whitespace-pre-wrap text-left", children: featuredData.description })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-muted-foreground gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-8 w-8 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No featured post currently" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Optional Explanation/Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Add more details about this featured post...", rows: 3 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, disabled: uploading, className: "gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground glow cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          uploading ? "Uploading..." : "Upload New Image",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: handleFile, disabled: uploading })
        ] }) }),
        featuredData?.url && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: handleRemove, disabled: uploading, className: "border-destructive/30 text-destructive hover:bg-destructive/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 mr-2" }),
          " Remove Post"
        ] })
      ] })
    ] })
  ] }) });
}
function AssignmentsTab() {
  const qc = useQueryClient();
  const [isCreating, setIsCreating] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState("");
  const [instruction, setInstruction] = reactExports.useState("");
  const [deadline, setDeadline] = reactExports.useState("");
  const [imageFile, setImageFile] = reactExports.useState(null);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const fetchAssignments = useServerFn(getAssignments);
  const doCreate = useServerFn(createAssignment);
  const doDelete = useServerFn(deleteAssignment);
  const {
    data: assignments,
    isLoading
  } = useQuery({
    queryKey: ["admin-assignments"],
    queryFn: () => fetchAssignments()
  });
  async function handleCreate(e) {
    e.preventDefault();
    if (!title.trim() || !instruction.trim()) return ue.error("Title and Instruction are required.");
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
          fileName
        }
      });
      ue.success("Assignment created!");
      setIsCreating(false);
      setTitle("");
      setInstruction("");
      setDeadline("");
      setImageFile(null);
      qc.invalidateQueries({
        queryKey: ["admin-assignments"]
      });
    } catch (err) {
      ue.error(err.message);
    } finally {
      setSubmitting(false);
    }
  }
  async function handleDelete(id) {
    if (!confirm("Delete this assignment?")) return;
    try {
      await doDelete({
        data: {
          id
        }
      });
      ue.success("Deleted successfully.");
      qc.invalidateQueries({
        queryKey: ["admin-assignments"]
      });
    } catch (err) {
      ue.error(err.message);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Class Assignments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Post tasks or activities for students." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setIsCreating(true), className: "gap-2 bg-primary text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " New Assignment"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isCreating, onOpenChange: setIsCreating, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "glass-strong border-white/10 sm:max-w-[500px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCreate, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Create Assignment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Add a new assignment for your students." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: title, onChange: (e) => setTitle(e.target.value), required: true, placeholder: "e.g., Math Homework 5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Instructions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: instruction, onChange: (e) => setInstruction(e.target.value), required: true, rows: 4, placeholder: "Describe the task..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Deadline (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: deadline, onChange: (e) => setDeadline(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Attach Image (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "file", accept: "image/*", onChange: (e) => setImageFile(e.target.files?.[0] || null) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", onClick: () => setIsCreating(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: submitting, className: "bg-primary", children: submitting ? "Creating..." : "Create" })
      ] })
    ] }) }) }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-8 text-center animate-pulse", children: "Loading..." }) : assignments?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-12 text-center text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mx-auto mb-4 h-12 w-12 opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No assignments posted yet." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: assignments?.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 flex flex-col md:flex-row md:items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap mt-1", children: a.instruction }),
        a.deadline_at && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary mt-2 font-medium", children: [
          "Deadline: ",
          new Date(a.deadline_at).toLocaleString()
        ] }),
        a.image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: a.image_url, target: "_blank", rel: "noreferrer", className: "text-xs text-blue-400 mt-2 block underline hover:opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.image_url, alt: "Attached image", className: "max-h-32 mt-2 rounded-lg object-contain" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleDelete(a.id), className: "text-destructive hover:bg-destructive/10 hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
    ] }, a.id)) })
  ] });
}
export {
  AdminPanel as component
};
