import { Link } from "@tanstack/react-router";
import { CheckCircle, MapPin, Phone, Shield, Star } from "lucide-react";

const FOOTER_LINKS = [
  { to: "/", label: "Home", ocid: "footer.home.link" },
  { to: "/services", label: "Services", ocid: "footer.services.link" },
  { to: "/about", label: "About", ocid: "footer.about.link" },
  { to: "/contact", label: "Contact", ocid: "footer.contact.link" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/assets/generated/logo-tru-melbourne-transparent.dim_400x120.png"
                alt="Tru Melbourne Bond Cleaners logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-primary-foreground/70 max-w-sm mb-4">
              Melbourne&apos;s trusted bond cleaning specialists. Get your full
              bond back, guaranteed.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a
                  href="https://wa.me/61488841883"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp: 0488 841 883
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Melbourne, Victoria, Australia</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={link.ocid}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust badges */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">
              Our Promise
            </h3>
            <ul className="space-y-3">
              {[
                { icon: Shield, label: "Fully Insured" },
                { icon: Star, label: "100% Bond Back Guarantee" },
                { icon: CheckCircle, label: "Real Estate Approved Checklist" },
                { icon: CheckCircle, label: "All Melbourne Suburbs Covered" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-primary-foreground/70"
                >
                  <Icon className="h-4 w-4 text-accent shrink-0" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© {year} Tru Melbourne Bond Cleaners. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
