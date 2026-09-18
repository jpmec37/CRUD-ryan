import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const SUPABASEKEY = process.env.SUPABASE_ANON_KEY;
const SUPABASEURL = process.env.SUPABASE_URL;

export const supabase = createClient(SUPABASEURL, SUPABASEKEY);