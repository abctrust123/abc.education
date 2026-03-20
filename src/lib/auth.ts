import { supabase } from './supabase';

const PRODUCTION_APP_ORIGIN = 'https://abc-educationx.pages.dev'

/** Base URL for auth email links (e.g. confirm signup). Always ends at /sign-in. */
function getEmailConfirmRedirectUrl(): string {
  const fromEnv = import.meta.env.VITE_APP_URL?.replace(/\/$/, '')
  if (fromEnv) {
    return `${fromEnv}/sign-in`
  }
  if (import.meta.env.DEV && typeof window !== 'undefined') {
    return `${window.location.origin}/sign-in`
  }
  return `${PRODUCTION_APP_ORIGIN}/sign-in`
}

export async function signUpWithEmail(
  fullName: string,
  email: string,
  password: string
) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: getEmailConfirmRedirectUrl(),
      data: {
        full_name: fullName,
      },
    },
  });
}

export async function signInWithEmail(email: string, password: string) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return await supabase.auth.signOut();
}

export async function getCurrentSession() {
  return await supabase.auth.getSession();
}

export async function getCurrentUser() {
  return await supabase.auth.getUser();
}