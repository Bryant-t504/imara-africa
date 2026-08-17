import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Users, Building2, HeartHandshake, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Join or Partner With Imara Africa" },
      {
        name: "description",
        content:
          "Young innovators, mentors, schools, businesses and organizations are welcome to join or partner with Imara Africa.",
      },
      { property: "og:title", content: "Join or Partner With Imara Africa" },
      {
        property: "og:description",
        content: "Ways to get involved with a growing youth-led innovation organization.",
      },
    ],
  }),
  component: Partner,
});

const groups = [
  {
    icon: Users,
    title: "Young innovators",
    body: "Bring an idea or a skill — coding, electronics, design, writing, research — and work on live projects with the team.",
  },
  {
    icon: HeartHandshake,
    title: "Mentors",
    body: "Share experience in technology, engineering or business and help guide young builders through real projects.",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    body: "Introduce students to hands-on STEM and innovation activities linked to problems in their own communities.",
  },
  {
    icon: Building2,
    title: "Businesses & organizations",
    body: "Support prototyping, provide tools or expertise, or collaborate on a challenge you would like solved.",
  },
];

function Partner() {
  return (
    <div>
      <PageHeader
        eyebrow="Get involved"
        title="Join or partner with us"
        intro="Imara Africa is growing, and it grows through people. Whether you want to build, mentor, teach or collaborate, there is a place for you here."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map(({ icon: Icon, title, body }) => (
            <article key={title} className="surface-panel rounded-xl p-7">
              <Icon className="h-6 w-6 text-primary" />
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>

        <div className="surface-panel mt-10 rounded-xl p-8">
          <h2 className="text-2xl font-bold">How to reach out</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Send us a short message telling us who you are, what you are interested in and how you
            would like to be involved. We reply to every genuine enquiry.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:imaraafrica@gmail.com?subject=Joining%20Imara%20Africa"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> imaraafrica@gmail.com
            </a>
            <a
              href="tel:+254720264191"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Phone className="h-4 w-4" /> 0720 264 191
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
