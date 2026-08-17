import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Melvin Muiruri — Founder & CEO | Imara Africa" },
      {
        name: "description",
        content:
          "Melvin Muiruri is a young entrepreneur and innovator who founded Imara Africa to turn ideas into practical solutions for African challenges.",
      },
      { property: "og:title", content: "Melvin Muiruri — Founder & CEO, Imara Africa" },
      {
        property: "og:description",
        content: "Meet the founder behind Imara Africa's youth-led innovation work.",
      },
    ],
  }),
  component: Founder,
});

function Founder() {
  return (
    <div>
      <PageHeader
        eyebrow="Leadership"
        title="Melvin Muiruri"
        intro="Founder & CEO, Imara Africa."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[280px_1fr]">
          <div className="surface-panel glow-ring flex aspect-square items-center justify-center rounded-2xl">
            <span className="font-display text-6xl font-bold text-neon-gradient">MM</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Founder &amp; CEO</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Melvin Muiruri is a young entrepreneur and innovator who founded Imara Africa to turn
              ideas into practical solutions and encourage young people to participate in technology
              and innovation.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              His focus is simple: start with a real problem, build something that works, and bring
              other young people into the process. That approach shapes how Imara Africa selects
              projects — from flood early-warning concepts to community and STEM initiatives — and
              how the organization grows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:imaraafrica@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Contact the founder
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                See the projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
