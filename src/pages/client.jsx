import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oystvtsxejmoyljmemhz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95c3R2dHN4ZWptb3lsam1lbWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzOTkwOTMsImV4cCI6MjAyMDk3NTA5M30.Y_AkZdamDPNkL_LOvQP__zIev8emzH7-nDkiAy_yreA";
export const supabase = createClient(supabaseUrl, supabaseKey);
