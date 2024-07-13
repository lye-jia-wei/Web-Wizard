import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://chtvizfdrwxypdhecgju.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNodHZpemZkcnd4eXBkaGVjZ2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3NTMyNzYsImV4cCI6MjAzNjMyOTI3Nn0.H1dA0AKcbSoWaoFePe6RGvdfxY_ytpYaQ-jen6Fxz7U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
