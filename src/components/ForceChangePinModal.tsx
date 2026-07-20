import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Shield } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth";
import { forceChangePin } from "@/lib/auth.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ForceChangePinModal() {
  const { user, setUser } = useAuth();
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [loading, setLoading] = useState(false);
  const doForceChange = useServerFn(forceChangePin);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newPin.length < 4) { toast.error("Password must be at least 4 characters"); return; }
    if (newPin !== confirmPin) { toast.error("Passwords don't match"); return; }
    setLoading(true);
    try {
      await doForceChange({ data: { newPin } });
      if (user) setUser({ ...user, pinMustChange: false });
      toast.success("Password updated successfully!");
    } catch (err: any) {
      toast.error(err?.message ?? "Could not change password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="glass-strong rounded-3xl p-8 max-w-md w-full border-2 border-primary/20 shadow-[0_0_60px_-15px_rgba(120,119,198,0.3)] relative overflow-hidden bg-background/95 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="relative z-10">
          <div className="text-center mb-6">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 glow">
              <Shield className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Set Your New Password</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Your account has a temporary password. You must set a new one before continuing.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>New Password</Label>
              <Input
                type="password"
                value={newPin}
                onChange={(e) => setNewPin(e.target.value)}
                placeholder="Enter new password (min 4 chars)"
                className="h-12 bg-input/40 border-white/10 font-mono text-center tracking-[0.3em] text-lg"
                autoFocus
              />
            </div>
            <div>
              <Label>Confirm New Password</Label>
              <Input
                type="password"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value)}
                placeholder="Re-enter new password"
                className="h-12 bg-input/40 border-white/10 font-mono text-center tracking-[0.3em] text-lg"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground glow">
              {loading ? "Updating..." : "Set New Password"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
