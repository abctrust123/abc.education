import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const HomePage = lazy(() =>
  import("@/pages/HomePage").then((m) => ({ default: m.HomePage }))
)
const CategoriesPage = lazy(() =>
  import("@/pages/CategoriesPage").then((m) => ({ default: m.CategoriesPage }))
)
const CoursesPage = lazy(() =>
  import("@/pages/CoursesPage").then((m) => ({ default: m.CoursesPage }))
)
const CourseDetailsPage = lazy(() =>
  import("@/pages/CourseDetailsPage").then((m) => ({
    default: m.CourseDetailsPage,
  }))
)
const TeachersPage = lazy(() =>
  import("@/pages/TeachersPage").then((m) => ({ default: m.TeachersPage }))
)
const TeacherProfilePage = lazy(() =>
  import("@/pages/TeacherProfilePage").then((m) => ({
    default: m.TeacherProfilePage,
  }))
)
const OffersPage = lazy(() =>
  import("@/pages/OffersPage").then((m) => ({ default: m.OffersPage }))
)
const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage }))
)
const SignUpPage = lazy(() =>
  import("@/pages/SignUpPage").then((m) => ({ default: m.SignUpPage }))
)
const SignInPage = lazy(() =>
  import("@/pages/SignInPage").then((m) => ({ default: m.SignInPage }))
)
const ProfilePage = lazy(() =>
  import("@/pages/ProfilePage").then((m) => ({ default: m.ProfilePage }))
)

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/teachers/:id" element={<TeacherProfilePage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
