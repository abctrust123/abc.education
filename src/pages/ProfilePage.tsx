import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-foreground">Profile</h1>
          <p className="mt-2 text-muted-foreground text-sm">
            Your profile settings will appear here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
