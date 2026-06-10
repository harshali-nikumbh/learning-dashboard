import { motion } from "framer-motion";

interface HeroTileProps {
  activeCourses: number;
  averageProgress: number;
}

export default function HeroTile({
  activeCourses,
  averageProgress,
}: HeroTileProps) {
  return (
    <section className="relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-violet-500/10" />

      <div className="relative z-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, Harshali
        </h1>

        <p className="mt-2 text-zinc-400">
          Continue where you left off.
        </p>

        <div className="mt-8 flex gap-12">
          <div>
            <p className="text-2xl font-semibold">12</p>
            <p className="text-sm text-zinc-500">
              Day Streak
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold">
              {activeCourses}
            </p>
            <p className="text-sm text-zinc-500">
              Active Courses
            </p>
          </div>

          <div>
            <p className="text-2xl font-semibold">
              {averageProgress}%
            </p>
            <p className="text-sm text-zinc-500">
              Avg Progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}