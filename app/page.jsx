import Link from "next/link";

const demos = [
  {
    slug: "architect",
    name: "Proyecto Civil Integral",
    description: "Mockup de rediseño para empresa de ingeniería civil mexicana.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-500 mb-2">
          Demos Propal
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-10">
          Propuestas de rediseño web
        </h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {demos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/${demo.slug}`}
              className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:-translate-y-1"
            >
              <div className="text-sm font-semibold text-amber-400 mb-2">
                {demo.slug}
              </div>
              <div className="text-xl font-semibold mb-2">{demo.name}</div>
              <p className="text-sm text-slate-400 leading-7">{demo.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
