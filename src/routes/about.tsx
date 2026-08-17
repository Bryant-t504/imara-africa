import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Imara Africa — Youth-Led Innovation" },
      {
        name: "description",
        content:
          "Imara Africa's story, mission and vision: empowering young people to build practical solutions to African challenges.",
      },
      { property: "og:title", content: "About Imara Africa" },
      {
        property: "og:description",
        content: "Our story, mission and vision as a growing youth-led innovation organization.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About us"
        title="A youth-led organization turning ideas into solutions"
        intro="Imara Africa was founded to give young people a place to build. We work on real African challenges using technology, creativity, entrepreneurship and community collaboration."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface-panel rounded-xl p-8">
            <h2 className="text-2xl font-bold">Our mission</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To empower young people to develop practical solutions to African challenges through
              technology, innovation, education and entrepreneurship.
            </p>
          </article>
          <article className="surface-panel rounded-xl p-8">
            <h2 className="text-2xl font-bold">Our vision</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A stronger Africa built by young problem-solvers.
            </p>
          </article>
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold">Our story</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Imara means strong. Imara Africa began as a simple conviction: the challenges around us
            can be solved by the people closest to them. Instead of waiting, we prototype. We take
            everyday problems — flooding, safety, access to learning — and work them into concepts,
            prototypes and projects that communities can actually use.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are early in our journey and growing openly. Everything on this site reflects where
            we are today: projects in development, ideas being tested, and an invitation to young
            innovators, mentors and organizations who want to build alongside us.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">What guides us</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Practical first",
                d: "We favour solutions that can be built, tested and used in real communities.",
              },
              {
                t: "Youth at the centre",
                d: "Young people lead the work, not just participate in it.",
              },
              {
                t: "Honest growth",
                d: "We share what we have actually built, and what is still a concept.",
              },
            ].map((v) => (
              <div key={v.t} className="surface-panel rounded-xl p-6">
                <h3 className="font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
