import { handleAuth } from '@supabase/auth-helpers-nextjs';

export default handleAuth({
  logout: { returnTo: '/' },
  cookieOptions: { lifetime: 24 * 60 * 60 } // Keep the user logged in for a day.
});