import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { c as cn } from "./button-DjOZMqFS.js";
import { c as createSsrRpc } from "./router-B0ohDPEK.js";
import { c as createServerFn } from "./server-BiCOV7P_.js";
import { z } from "zod";
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const getFeatured = createServerFn({
  method: "GET"
}).handler(createSsrRpc("81350ec7aa34e942ff8bb422941384ad3fb1058d41b6d5bec63c21d8a1eb9e9d"));
const uploadFeatured = createServerFn({
  method: "POST"
}).validator((d) => z.object({
  base64: z.string().min(1, "Image data is required"),
  mimeType: z.string().regex(/^image\/(jpeg|png|gif|webp|svg\+xml)$/i, "Invalid image MIME type"),
  fileName: z.string().min(1).max(255),
  description: z.string().optional()
}).parse(d)).handler(createSsrRpc("641977b8460a8417ec67870e93612860c84f16232892c0707d91e0a4fd1da47a"));
const removeFeatured = createServerFn({
  method: "POST"
}).handler(createSsrRpc("ca6a36013cdbc7e758471921aa96b455d1f2efa7e13fbcfac2a1dd75fcf01aca"));
const getAssignments = createServerFn({
  method: "GET"
}).handler(createSsrRpc("1416b5e6c0cedc37dda3615caad941dc2e1cb203a98e25677e88a16e45b26c0f"));
const getStudentCompletions = createServerFn({
  method: "GET"
}).handler(createSsrRpc("a098deac76ddc059d2b7c57fb3f613f02429ac1e9ce7d4dcaeef8547eae758d7"));
const markAssignmentDone = createServerFn({
  method: "POST"
}).validator((d) => z.object({
  assignmentId: z.string().uuid()
}).parse(d)).handler(createSsrRpc("91bd0ee1ed9b80080c77f1beda9049c334df88548c5c61ad9db3c249eb1adfc1"));
const createAssignment = createServerFn({
  method: "POST"
}).validator((d) => z.object({
  title: z.string().min(1),
  instruction: z.string().min(1),
  deadline_at: z.string().nullable(),
  base64Image: z.string().optional(),
  mimeType: z.string().optional(),
  fileName: z.string().optional()
}).parse(d)).handler(createSsrRpc("5437345eefbfb8a244b7030976504e01716e625be069b33c8fd68cf13c85fa82"));
const deleteAssignment = createServerFn({
  method: "POST"
}).validator((d) => z.object({
  id: z.string().uuid()
}).parse(d)).handler(createSsrRpc("f5f19ebf6eb94457b65564c4aa811a089d7678e9c58da8cee33b06cd553ee9ca"));
export {
  Dialog as D,
  DialogContent as a,
  DialogHeader as b,
  DialogTitle as c,
  getAssignments as d,
  getStudentCompletions as e,
  DialogDescription as f,
  getFeatured as g,
  createAssignment as h,
  deleteAssignment as i,
  DialogFooter as j,
  markAssignmentDone as m,
  removeFeatured as r,
  uploadFeatured as u
};
