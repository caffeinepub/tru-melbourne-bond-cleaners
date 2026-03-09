import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home", ocid: "nav.home.link" },
  { to: "/services", label: "Services", ocid: "nav.services.link" },
  { to: "/suburbs", label: "Suburbs", ocid: "nav.suburbs.link" },
  { to: "/about", label: "About", ocid: "nav.about.link" },
  { to: "/contact", label: "Contact", ocid: "nav.contact.link" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-card/95 backdrop-blur-md shadow-xs">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/assets/generated/logo-tru-melbourne-transparent.dim_400x120.png"
            alt="Tru Melbourne Bond Cleaners logo"
            className="h-10 w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive(link.to)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold gap-2"
          >
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="whatsapp.button"
            >
              <Phone className="h-4 w-4" />
              0488 841 883
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                isActive(link.to)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm"
          >
            <Phone className="h-4 w-4" />
            WhatsApp: 0488 841 883
          </a>
        </div>
      )}
    </header>
  );
}
