import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hhrikriyumefrwjfajac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhocmlrcml5dW1lZnJ3amZhamFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMDY5NjMsImV4cCI6MTk5Mzc4Mjk2M30.xpZqSxp_mOti-B_CzUhsHbMgfIuwnyzHe3oGiVeoAZk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
