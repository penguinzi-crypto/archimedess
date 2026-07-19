-- Create the featured buckets if it doesn't exist
INSERT INTO storage.buckets (id, name, public) VALUES ('featured', 'featured', true) ON CONFLICT (id) DO NOTHING;

-- Create the featured_content table for optional descriptions
CREATE TABLE public.featured_content (
  id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  description TEXT NOT NULL
);

-- Apply policies and grants
GRANT SELECT, INSERT, UPDATE, DELETE ON public.featured_content TO anon, authenticated;
GRANT ALL ON public.featured_content TO service_role;

ALTER TABLE public.featured_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public all featured_content" ON public.featured_content FOR ALL USING (true) WITH CHECK (true);
