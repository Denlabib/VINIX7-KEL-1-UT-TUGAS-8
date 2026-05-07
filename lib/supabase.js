import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL=https://qvdgdlxsmwhqywlirpii.supabase.co");
}

if (!supabaseAnonKey) {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_4q4KIoEmLmsts0yGwAbWRQ_eECNtgUA");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
