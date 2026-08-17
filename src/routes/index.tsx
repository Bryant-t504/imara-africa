import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Lightbulb, Users, Leaf, Wrench, Handshake } from "lucide-react";
import hero from "@/assets/hero-africa-tech.jpg";
import floodguard from "@/assets/floodguard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imara Africa — Building a Stronger Africa" },
      {
        name: "description",
        content:
          "Imara Africa is a youth-led innovation organization creating practical solutions to African challenges through technology, creativity and entrepreneurship.",
      },
      { property: "og:title", content: "Imara Africa — Building a Stronger Africa" },
      {
        property: "og:description",
        content: "Ideas. Innovation. Impact. Youth-led innovation for African challenges.",
      },
    ],
  }),
  component: Index,
});

const areas = [
  { icon: Cpu, title: "Technology & Digital Solutions" },
  { icon: Lightbulb, title: "Innovation & Prototyping" },
  { icon: Users, title: "Youth Empowerment & STEM" },
  { icon: Wrench, title: "Community Problem-Solving" },
  { icon: Leaf, title: "Environmental & Public-Safety Solutions" },
  { icon: Handshake, title: "Partnerships & Collaboration" },
];

function Index() {
  return (
    <div>
      <section className="hero-surface relative overflow-hidden border-b border-border">
        <img
          src={hero}
          alt="Map of Africa formed from glowing circuit lines"
          width={1600}
          height={1008}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="circuit-grid relative">
          <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
            <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="animate-pulse-soft h-1.5 w-1.5 rounded-full bg-primary" />
              Ideas. Innovation. Impact.
            </p>
            <h1 className="animate-rise mt-6 max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl">
              Building a <span className="text-neon-gradient">Stronger Africa</span>
            </h1>
            <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Imara Africa is a youth-led innovation organization focused on creating practical
              solutions to African challenges through technology, creativity, entrepreneurship and
              community collaboration.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="glow-ring inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See our projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/partner"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Join or partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Our mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To empower young people to develop practical solutions to African challenges through
              technology, innovation, education and entrepreneurship.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Our vision</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A stronger Africa built by young problem-solvers.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">What we do</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ icon: Icon, title }) => (
              <div key={title} className="surface-panel rounded-xl p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
              </div>
            ))}
          </div>
          <Link
            to="/our-work"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Explore our work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={floodguard}
              alt="Imara FloodGuard flood-warning sensor concept beside a rising river"
              width={1408}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Featured project
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Imara FloodGuard</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A smart flood-warning concept designed to monitor rising water levels and provide
              early alerts, helping communities respond to flooding more quickly.
            </p>
            <Link
              to="/projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Read the project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
