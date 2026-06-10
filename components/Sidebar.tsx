import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="hidden md:flex flex-col gap-4 p-4 border-r border-zinc-800 bg-zinc-950">
      <Home />
      <BookOpen />
      <BarChart3 />
      <Settings />
    </nav>
  );
}