// config.js - Centralized Supabase Configuration

const SUPABASE_URL = "https://bxqdyjkpbyqatdiajssi.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4cWR5amtwYnlxYXRkaWFqc3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MjkzMjIsImV4cCI6MjEwMDIwNTMyMn0._uxy3fHVPW1aCxii-nGsYOQDA01H8ttRnYpdLduQowY";

// Initialize Supabase client globally
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);