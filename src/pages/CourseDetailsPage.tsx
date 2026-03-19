import { useParams, Link } from "react-router-dom"
import { Star, Heart, Check } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PriceDisplay } from "@/components/shared/PriceDisplay"
import { courses } from "@/data/courses"
import { teachers } from "@/data/teachers"

export function CourseDetailsPage() {
  const { id } = useParams()
  const course = courses.find((c) => c.id === id) ?? courses[0]
  const teacher = teachers.find((t) => t.id === course.teacherId) ?? teachers[0]

  const originalPrice =
    course.discount > 0 ? course.price / (1 - course.discount / 100) : undefined

  const features = [
    "Lifetime access",
    "Certificate of completion",
    "Downloadable resources",
    "Mobile and desktop access",
    "Q&A support",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    {course.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <Link
                      to={`/teachers/${teacher.id}`}
                      className="flex items-center gap-2 hover:text-primary"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={teacher.avatar} />
                        <AvatarFallback>
                          {teacher.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{teacher.name}</span>
                    </Link>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {course.students.toLocaleString()} students enrolled
                    </span>
                  </div>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-4">
                    <p className="text-muted-foreground">
                      This comprehensive course covers everything you need to
                      know. You&apos;ll learn through hands-on projects, video
                      lessons, and practical exercises. Perfect for beginners and
                      those looking to level up their skills.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Level: {course.level}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Duration: {course.duration}</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="curriculum" className="mt-4">
                    <p className="text-muted-foreground">
                      Course curriculum will be displayed here. Module 1, 2, 3...
                    </p>
                  </TabsContent>
                  <TabsContent value="reviews" className="mt-4">
                    <p className="text-muted-foreground">
                      Student reviews and ratings will appear here.
                    </p>
                  </TabsContent>
                  <TabsContent value="instructor" className="mt-4">
                    <div className="flex gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={teacher.avatar} />
                        <AvatarFallback>
                          {teacher.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{teacher.name}</h3>
                        <p className="text-sm text-primary">
                          {teacher.specialization}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {teacher.bio}
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <PriceDisplay
                      price={course.price}
                      originalPrice={originalPrice}
                      discount={course.discount > 0 ? course.discount : undefined}
                    />
                    <ul className="mt-4 space-y-2">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 space-y-2">
                      <Button className="w-full" size="lg">
                        Enroll Now
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <Heart className="h-4 w-4 mr-2" />
                        Add to Wishlist
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      30-day money-back guarantee
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
