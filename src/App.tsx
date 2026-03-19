import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { CategoriesPage } from "@/pages/CategoriesPage"
import { CoursesPage } from "@/pages/CoursesPage"
import { CourseDetailsPage } from "@/pages/CourseDetailsPage"
import { TeachersPage } from "@/pages/TeachersPage"
import { TeacherProfilePage } from "@/pages/TeacherProfilePage"
import { OffersPage } from "@/pages/OffersPage"
import { AboutPage } from "@/pages/AboutPage"
import { SignUpPage } from "@/pages/SignUpPage"
import { SignInPage } from "@/pages/SignInPage"

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
