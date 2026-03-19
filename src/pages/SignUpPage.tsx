import { Link } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function SignUpPage() {
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
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground block mb-2"
                  >
                    Full name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground block mb-2"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-foreground block mb-2"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Sign Up
                </Button>
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
    </div>
  )
}
