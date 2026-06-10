const activityLevels = [
  "bg-zinc-800",
  "bg-emerald-900",
  "bg-emerald-700",
  "bg-emerald-500",
];

const activityData = [
  0, 1, 2, 1, 3, 2, 0,
  1, 2, 3, 2, 1, 2, 1,
  0, 1, 2, 3, 2, 1, 0,
  1, 3, 2, 1, 2, 3, 1,
  0, 1, 1, 2, 1, 2, 0,
];

export default function ActivityTile() {
  return (
    <section className="h-full rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 font-semibold">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {activityData.map((level, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded ${activityLevels[level]}`}
          />
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        Learning activity over the last 5 weeks
      </p>
    </section>
  );
}