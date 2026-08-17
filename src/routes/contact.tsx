import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, User } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Imara Africa" },
      {
        name: "description",
        content:
          "Get in touch with Imara Africa by email at imaraafrica@gmail.com or by phone on 0720 264 191.",
      },
      { property: "og:title", content: "Contact Imara Africa" },
      {
        property: "og:description",
        content: "Email, phone and enquiries for Imara Africa.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        intro="Questions, ideas, collaborations or media enquiries — we would like to hear from you."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:imaraafrica@gmail.com"
            className="surface-panel rounded-xl p-7 no-underline"
          >
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Email
            </h2>
            <p className="mt-1 break-all text-base font-semibold">imaraafrica@gmail.com</p>
          </a>

          <a href="tel:+254720264191" className="surface-panel rounded-xl p-7 no-underline">
            <Phone className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Phone
            </h2>
            <p className="mt-1 text-base font-semibold">0720 264 191</p>
          </a>

          <div className="surface-panel rounded-xl p-7">
            <User className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Founder &amp; CEO
            </h2>
            <p className="mt-1 text-base font-semibold">Melvin Muiruri</p>
          </div>
        </div>

        <div className="surface-panel mt-10 rounded-xl p-8">
          <h2 className="text-2xl font-bold">Social media</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Our social media channels are being set up and will be listed here once they are live.
            Until then, email is the fastest way to reach the team.
          </p>
        </div>
      </section>
    </div>
  );
}
