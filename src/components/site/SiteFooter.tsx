import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold">
            IMARA <span className="text-neon-gradient">AFRICA</span>
          </h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Building a Stronger Africa. Ideas. Innovation. Impact.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/our-work" className="transition-colors hover:text-primary">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/partner" className="transition-colors hover:text-primary">
                Join / Partner
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:imaraafrica@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" /> imaraafrica@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+254720264191"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" /> 0720 264 191
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-5 py-5">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Imara Africa. A youth-led innovation organization.
        </p>
      </div>
    </footer>
  );
}
