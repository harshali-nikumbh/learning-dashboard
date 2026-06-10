"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Layers,
  FileCode,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  icon_name: string;
}

const icons = {
  Code,
  Rocket,
  Layers,
  FileCode,
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: CourseCardProps) {
  const Icon =
    icons[icon_name as keyof typeof icons] || Code;

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="h-6 w-6 text-blue-400" />

          <h3 className="font-semibold">
            {title}
          </h3>
        </div>

        <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-blue-500"
          />
        </div>

        <p className="mt-3 text-sm text-zinc-400">
  {progress}% completed
</p>

      </div>
    </motion.article>
  );
}