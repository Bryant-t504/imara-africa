import { createFileRoute, Link } from "@tanstack/react-router";
import { Cpu, Lightbulb, Users, Leaf, Wrench, Handshake, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work — Imara Africa" },
      {
        name: "description",
        content:
          "Technology, prototyping, STEM empowerment, community problem-solving, environmental and public-safety solutions, and partnerships at Imara Africa.",
      },
      { property: "og:title", content: "Our Work — Imara Africa" },
      {
        property: "og:description",
        content: "The six areas where Imara Africa focuses its innovation work.",
      },
    ],
  }),
  component: OurWork,
});

const areas = [
  {
    icon: Cpu,
    title: "Technology & Digital Solutions",
    body: "Designing digital tools, apps and connected devices that address everyday problems in African communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Prototyping",
    body: "Moving from idea to working prototype — sketching, testing and refining concepts until they hold up in the real world.",
  },
  {
    icon: Users,
    title: "Youth Empowerment & STEM",
    body: "Creating opportunities for young people to learn science, technology, engineering and maths by building real things.",
  },
  {
    icon: Wrench,
    title: "Community Problem-Solving",
    body: "Listening to communities, identifying practical challenges and developing solutions with the people affected.",
  },
  {
    icon: Leaf,
    title: "Environmental & Public-Safety Solutions",
    body: "Working on climate, environment and safety concepts such as flood monitoring and early-warning systems.",
  },
  {
    icon: Handshake,
    title: "Partnerships & Collaboration",
    body: "Working with schools, mentors, businesses and organizations that want to support youth-led innovation.",
  },
];

function OurWork() {
  return (
    <div>
      <PageHeader
        eyebrow="Our work"
        title="Six areas where we build"
        intro="Our work spans technology, prototyping and community collaboration. Each area is a place where young innovators can contribute skills and ideas."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, body }) => (
            <article key={title} className="surface-panel rounded-xl p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/60">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <h2 className="mt-4 text-base font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>

        <div className="surface-panel mt-12 rounded-xl p-8">
          <h2 className="text-2xl font-bold">Have a challenge worth solving?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We are always looking for real problems to work on with communities, schools and
            organizations.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
