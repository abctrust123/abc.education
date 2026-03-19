const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim())
}

export function formatAuthError(error: { message?: string } | null): string {
  if (!error?.message) return "An unexpected error occurred."

  const msg = error.message.toLowerCase()

  if (msg.includes("user already registered") || msg.includes("already been registered")) {
    return "This email is already registered. Please sign in instead."
  }
  if (msg.includes("invalid login") || msg.includes("invalid credentials")) {
    return "Invalid email or password."
  }
  if (msg.includes("email not confirmed")) {
    return "Please confirm your email before signing in."
  }

  return error.message
}

export interface PasswordChecks {
  minLength: boolean
  hasNumber: boolean
  hasSpecialChar: boolean
  noWhitespace: boolean
}

export function checkPasswordRequirements(password: string): PasswordChecks {
  return {
    minLength: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(password),
    noWhitespace: password === password.trim(),
  }
}

export function meetsAllPasswordRequirements(password: string): boolean {
  const checks = checkPasswordRequirements(password)
  return (
    checks.minLength &&
    checks.hasNumber &&
    checks.hasSpecialChar &&
    checks.noWhitespace
  )
}
