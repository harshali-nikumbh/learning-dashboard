export const dynamic = "force-dynamic";
import { supabase } from "../lib/supabase";
import Sidebar from "../components/Sidebar";
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";
import FadeIn from "../components/FadeIn";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export default async function Home() {
  const {
  data: courses,
  error,
} = await supabase
  .from("courses")
  .select("*");

  const typedCourses = courses as Course[] | null;

  if (error) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
        <h2 className="text-lg font-semibold">
          Failed to load courses
        </h2>

        <p className="mt-2 text-zinc-400">
          Please try again later.
        </p>
      </div>
    </main>
  );
}

   const activeCourses = typedCourses?.length || 0;

const averageProgress =
  typedCourses && typedCourses.length > 0
    ? Math.round(
        typedCourses.reduce(
          (sum, course) => sum + course.progress,
          0
        ) / typedCourses.length
      )
    : 0;

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-20 min-h-screen">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-[220px]">
            
            {/* Hero Tile */}
           <div className="lg:col-span-2">
  <FadeIn delay={0}>
  <HeroTile
    activeCourses={activeCourses}
    averageProgress={averageProgress}
  />
</FadeIn>
</div>
            {/* Activity Tile */}
            <FadeIn delay={0.1}>
  <ActivityTile />
</FadeIn>

            {/* Dynamic Course Cards */}
           {typedCourses?.map((course, index) => (
  <FadeIn
    key={course.id}
    delay={0.3 + index * 0.2}
  >
    <CourseCard
      title={course.title}
      progress={course.progress}
      icon_name={course.icon_name}
    />
  </FadeIn>
))}
          </div>
        </section>
      </div>
    </main>
  );
}