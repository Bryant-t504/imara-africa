import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Waves, CircuitBoard, Radio, BellRing } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import floodguard from "@/assets/floodguard.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Imara FloodGuard | Imara Africa" },
      {
        name: "description",
        content:
          "Imara FloodGuard is a smart flood-warning concept that monitors rising water levels and provides early alerts to communities.",
      },
      { property: "og:title", content: "Projects — Imara Africa" },
      {
        property: "og:description",
        content: "Imara FloodGuard: a smart flood-warning concept in development.",
      },
    ],
  }),
  component: Projects,
});

const tech = [
  { icon: Waves, label: "Water-level sensing", body: "Ultrasonic distance sensing to track how fast water is rising." },
  { icon: CircuitBoard, label: "Microcontroller unit", body: "A low-cost board reads the sensor and applies alert thresholds." },
  { icon: Radio, label: "Connectivity", body: "Mobile or radio connectivity to send readings from the riverside." },
  { icon: BellRing, label: "Alerting", body: "Local siren or light plus messages to community contacts." },
];

function Projects() {
  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="What we are building"
        intro="Our projects start as concepts and grow through prototyping and testing. Here is what we are working on right now."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src={floodguard}
            alt="Imara FloodGuard concept device monitoring a rising river"
            width={1408}
            height={912}
            loading="lazy"
            className="h-64 w-full object-cover md:h-96"
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <h2 className="text-3xl font-bold md:text-4xl">Imara FloodGuard</h2>
          <span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Concept in development
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="surface-panel rounded-xl p-7">
            <h3 className="text-xl font-bold">The problem</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Flooding often arrives with very little warning. Families living near rivers and
              drainage channels frequently learn that water is rising only when it reaches their
              homes, leaving almost no time to move people, livestock or belongings to safety.
            </p>
          </article>
          <article className="surface-panel rounded-xl p-7">
            <h3 className="text-xl font-bold">The solution</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Imara FloodGuard is a smart flood-warning concept designed to monitor rising water
              levels continuously and trigger an early alert once the water crosses a set threshold
              — giving communities more time to respond.
            </p>
          </article>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold">The technology</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tech.map(({ icon: Icon, label, body }) => (
              <div key={label} className="surface-panel rounded-xl p-6">
                <Icon className="h-5 w-5 text-primary" />
                <h4 className="mt-3 text-sm font-semibold">{label}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel mt-10 rounded-xl p-7">
          <h3 className="text-xl font-bold">Future development</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            {[
              "Build and field-test a working prototype at a real river location.",
              "Add solar power so the unit can run independently for long periods.",
              "Develop a simple dashboard showing live water levels and alert history.",
              "Work with local communities to set thresholds and alert routines that fit them.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-xl border border-dashed border-border p-8 text-center">
          <h3 className="text-lg font-bold">More projects coming</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            New concepts in technology, environment and youth STEM are in development and will be
            published here as they take shape.
          </p>
          <Link
            to="/partner"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Build one with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
