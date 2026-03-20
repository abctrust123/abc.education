import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Check, Circle, X } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { signUpWithEmail } from "@/lib/auth"
import {
  isValidEmail,
  formatAuthError,
  checkPasswordRequirements,
  meetsAllPasswordRequirements,
} from "@/lib/validation"

export function SignUpPage() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)

  const passwordChecks = checkPasswordRequirements(password)
  const showPasswordError = passwordTouched && error?.includes("password")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const trimmedName = fullName.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName || !trimmedEmail || !password) {
      setError("Please fill in all fields.")
      return
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.")
      return
    }

    if (!meetsAllPasswordRequirements(password)) {
      setPasswordTouched(true)
      setError("Please meet all password requirements.")
      return
    }

    setLoading(true)
    const { error: authError } = await signUpWithEmail(
      trimmedName,
      trimmedEmail,
      password.trim()
    )
    setLoading(false)

    if (authError) {
      setError(formatAuthError(authError))
      return
    }

    setShowSuccessModal(true)
  }

  function dismissSuccessModal() {
    setShowSuccessModal(false)
    void navigate("/sign-in")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <Card className="border-border">
              <CardHeader>
                <h1 className="text-2xl font-bold text-foreground">
                  Create your account
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Join LearnHub to start your learning journey
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <form
                  onSubmit={(e) => {
                    void handleSubmit(e)
                  }}
                  className="space-y-4"
                >
                  {error && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground block mb-2"
                    >
                      Full name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      disabled={loading}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground block mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-foreground block mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                          setError(null)
                        }}
                        disabled={loading}
                        autoComplete="new-password"
                        className={`pr-10 ${
                          showPasswordError
                            ? "border-red-300 focus-visible:ring-red-500"
                            : ""
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        tabIndex={-1}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 rounded-lg border border-border overflow-hidden">
                      <p className="text-xs font-medium text-muted-foreground px-3 py-2 bg-muted/50">
                        Password requirements
                      </p>
                      <ul className="divide-y divide-border" role="list">
                        <li
                          className={`flex items-center gap-2 px-3 py-2 text-sm ${
                            passwordChecks.minLength
                              ? "bg-primary-soft/50 text-primary-deep"
                              : "bg-red-50/50 text-muted-foreground"
                          }`}
                        >
                          {passwordChecks.minLength ? (
                            <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                          ) : (
                            <Circle className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                          )}
                          <span>At least 8 characters</span>
                        </li>
                        <li
                          className={`flex items-center gap-2 px-3 py-2 text-sm ${
                            passwordChecks.hasNumber
                              ? "bg-primary-soft/50 text-primary-deep"
                              : "bg-red-50/50 text-muted-foreground"
                          }`}
                        >
                          {passwordChecks.hasNumber ? (
                            <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                          ) : (
                            <Circle className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                          )}
                          <span>At least 1 number</span>
                        </li>
                        <li
                          className={`flex items-center gap-2 px-3 py-2 text-sm ${
                            passwordChecks.hasSpecialChar
                              ? "bg-primary-soft/50 text-primary-deep"
                              : "bg-red-50/50 text-muted-foreground"
                          }`}
                        >
                          {passwordChecks.hasSpecialChar ? (
                            <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                          ) : (
                            <Circle className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                          )}
                          <span>At least 1 special character</span>
                        </li>
                        <li
                          className={`flex items-center gap-2 px-3 py-2 text-sm ${
                            passwordChecks.noWhitespace
                              ? "bg-primary-soft/50 text-primary-deep"
                              : "bg-red-50/50 text-muted-foreground"
                          }`}
                        >
                          {passwordChecks.noWhitespace ? (
                            <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                          ) : (
                            <Circle className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                          )}
                          <span>No leading or trailing whitespace</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to="/sign-in"
                    className="font-medium text-primary hover:text-primary-deep"
                  >
                    Sign In
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />

      <Dialog
        open={showSuccessModal}
        onOpenChange={(open) => {
          if (!open) return
        }}
      >
        <DialogContent
          className="sm:max-w-md"
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <button
            type="button"
            onClick={dismissSuccessModal}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogHeader>
            <DialogTitle>Signup Successful</DialogTitle>
            <DialogDescription className="text-base text-foreground pt-2">
              Please check your inbox to confirm your email.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-row gap-2 sm:justify-end">
            <Button type="button" variant="outline" onClick={dismissSuccessModal}>
              Close
            </Button>
            <Button type="button" onClick={dismissSuccessModal}>
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
