import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import type { Session } from "@supabase/supabase-js"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cartItemsDemo, enrolledCoursesDemo } from "@/data/account-demo"
import { signOut } from "@/lib/auth"
import { supabase } from "@/lib/supabase"

type AccountTab = "courses" | "cart" | "settings"

const tabLabels: Record<AccountTab, string> = {
  courses: "My Courses",
  cart: "Cart",
  settings: "Settings",
}

export default function AccountPage() {
  const navigate = useNavigate()
  const [session, setSession] = useState<Session | null>(null)
  const [activeTab, setActiveTab] = useState<AccountTab>("courses")
  const [signOutOpen, setSignOutOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    void supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const user = session?.user
    if (!user) return
    setEmail(user.email ?? "")
    const meta = user.user_metadata as { full_name?: string } | undefined
    setFullName(meta?.full_name ?? "")
  }, [session])

  const handleSignOutConfirm = async () => {
    setSigningOut(true)
    try {
      await signOut()
      setSignOutOpen(false)
      void navigate("/")
    } catch {
      setSigningOut(false)
    }
  }

  const cartSubtotal = cartItemsDemo.reduce((sum, item) => sum + item.price, 0)

  const tabButtonClass = (tab: AccountTab) =>
    [
      "w-full text-left rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
      "lg:border-l-4 lg:border-b-0 border-b-2 lg:rounded-l-lg lg:rounded-r-md",
      activeTab === tab
        ? "border-primary bg-primary-soft/40 text-primary-deep"
        : "border-transparent text-muted-foreground hover:bg-muted/60 hover:text-foreground",
    ].join(" ")

  const mobileTabClass = (tab: AccountTab) =>
    [
      "flex-1 min-w-[calc(33.333%-0.5rem)] rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors border-b-2 lg:hidden",
      activeTab === tab
        ? "border-primary bg-primary-soft/40 text-primary-deep"
        : "border-transparent text-muted-foreground hover:bg-muted/60",
    ].join(" ")

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Account
          </h1>

          {/* Mobile / tablet tab row */}
          <div className="flex flex-wrap gap-2 mb-6 lg:hidden">
            {(Object.keys(tabLabels) as AccountTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={mobileTabClass(tab)}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-56 shrink-0 space-y-1">
              {(Object.keys(tabLabels) as AccountTab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={tabButtonClass(tab)}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </aside>

            <div className="flex-1 min-w-0">
              {activeTab === "courses" && (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {enrolledCoursesDemo.map((course) => (
                    <Card
                      key={course.id}
                      className="overflow-hidden border-border/60 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-video bg-muted overflow-hidden">
                        <img
                          src={course.thumbnail}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg leading-tight line-clamp-2">
                            {course.title}
                          </CardTitle>
                          <Badge variant="secondary" className="shrink-0">
                            {course.progressLabel}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {course.teacherName}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {course.description}
                        </p>
                        <Button className="w-full" asChild>
                          <Link to="/courses">Continue Learning</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === "cart" && (
                <div className="space-y-6 max-w-3xl">
                  <Card className="border-border/60">
                    <CardHeader>
                      <CardTitle>Your cart</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-0 divide-y divide-border">
                      {cartItemsDemo.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 first:pt-0 last:pb-0"
                        >
                          <div>
                            <p className="font-medium text-foreground">
                              {item.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.teacherName}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-semibold text-primary-deep">
                              ${item.price.toFixed(2)}
                            </span>
                            <Button type="button" variant="outline" size="sm">
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 bg-primary-soft/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Order summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">
                          ${cartSubtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-base font-semibold border-t border-border pt-4">
                        <span>Total</span>
                        <span>${cartSubtotal.toFixed(2)}</span>
                      </div>
                      <Button
                        type="button"
                        className="w-full"
                        disabled
                        title="Checkout is not connected in this demo"
                      >
                        Checkout
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="max-w-lg space-y-8">
                  <Card className="border-border/60">
                    <CardHeader>
                      <CardTitle>Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="account-full-name"
                          className="text-sm font-medium text-foreground block"
                        >
                          Full Name
                        </label>
                        <Input
                          id="account-full-name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="account-email"
                          className="text-sm font-medium text-foreground block"
                        >
                          Email
                        </label>
                        <Input
                          id="account-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="account-password"
                          className="text-sm font-medium text-foreground block"
                        >
                          New password
                        </label>
                        <Input
                          id="account-password"
                          type="password"
                          placeholder="••••••••"
                          autoComplete="new-password"
                        />
                        <p className="text-xs text-muted-foreground">
                          Leave blank to keep your current password.
                        </p>
                      </div>
                      <Button type="button" variant="secondary">
                        Save Changes
                      </Button>
                    </CardContent>
                  </Card>

                  <div>
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => setSignOutOpen(true)}
                    >
                      Sign Out
                    </Button>
                  </div>

                  <Dialog open={signOutOpen} onOpenChange={setSignOutOpen}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Sign out?</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to sign out?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="gap-2 sm:gap-0">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setSignOutOpen(false)}
                          disabled={signingOut}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => void handleSignOutConfirm()}
                          disabled={signingOut}
                        >
                          {signingOut ? "Signing out…" : "Sign Out"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
