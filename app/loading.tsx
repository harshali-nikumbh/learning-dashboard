export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="animate-pulse bg-zinc-900/80">

        <div className="h-48 rounded-3xl bg-zinc-900" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-56 rounded-3xl bg-zinc-900"
            />
          ))}
        </div>

      </div>
    </main>
  );
}