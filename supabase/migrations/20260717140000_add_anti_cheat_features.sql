-- Add Anti-Cheat and Synchronization features to forms
ALTER TABLE public.forms 
  ADD COLUMN IF NOT EXISTS require_pin BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS access_pin TEXT,
  ADD COLUMN IF NOT EXISTS start_mode TEXT NOT NULL DEFAULT 'immediate' CHECK (start_mode IN ('immediate', 'synchronized')),
  ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'waiting', 'in_progress', 'completed'));

-- Add cheat_logs to submissions
ALTER TABLE public.submissions 
  ADD COLUMN IF NOT EXISTS cheat_logs JSONB NOT NULL DEFAULT '[]'::jsonb;
