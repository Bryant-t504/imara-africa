export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="hero-surface border-b border-border">
      <div className="circuit-grid">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </p>
          <h1 className="animate-rise mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="animate-rise mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}
