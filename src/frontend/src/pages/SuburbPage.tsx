import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { SuburbData } from "@/data/suburbs-data";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, MapPin, Phone, Star } from "lucide-react";
import { useEffect } from "react";

interface SuburbPageProps {
  suburb: SuburbData;
}

export function SuburbPage({ suburb }: SuburbPageProps) {
  useEffect(() => {
    document.title = suburb.seo.title;

    // Description
    let metaDesc = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta") as HTMLMetaElement;
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = suburb.seo.description;

    // Keywords
    let metaKw = document.querySelector(
      'meta[name="keywords"]',
    ) as HTMLMetaElement | null;
    if (!metaKw) {
      metaKw = document.createElement("meta") as HTMLMetaElement;
      metaKw.name = "keywords";
      document.head.appendChild(metaKw);
    }
    metaKw.content = suburb.seo.keywords;

    // OG title
    let ogTitle = document.querySelector(
      'meta[property="og:title"]',
    ) as HTMLMetaElement | null;
    if (!ogTitle) {
      ogTitle = document.createElement("meta") as HTMLMetaElement;
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = suburb.seo.title;

    // OG description
    let ogDesc = document.querySelector(
      'meta[property="og:description"]',
    ) as HTMLMetaElement | null;
    if (!ogDesc) {
      ogDesc = document.createElement("meta") as HTMLMetaElement;
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = suburb.seo.description;

    // OG image
    let ogImg = document.querySelector(
      'meta[property="og:image"]',
    ) as HTMLMetaElement | null;
    if (!ogImg) {
      ogImg = document.createElement("meta") as HTMLMetaElement;
      ogImg.setAttribute("property", "og:image");
      document.head.appendChild(ogImg);
    }
    ogImg.content = suburb.heroImage;

    return () => {
      document.title =
        "Tru Melbourne Bond Cleaners | Professional Vacate Cleaning Melbourne";
      const desc = document.querySelector(
        'meta[name="description"]',
      ) as HTMLMetaElement | null;
      if (desc)
        desc.content =
          "Tru Melbourne Bond Cleaners offers professional bond cleaning, vacate cleaning, and end-of-lease cleaning services across Melbourne. 100% bond return guarantee. Call or WhatsApp 0488841883.";
    };
  }, [
    suburb.seo.title,
    suburb.seo.description,
    suburb.seo.keywords,
    suburb.heroImage,
  ]);

  const otherSuburbs = [
    { name: "South Yarra", slug: "south-yarra" },
    { name: "Richmond", slug: "richmond" },
    { name: "St Kilda", slug: "st-kilda" },
    { name: "Fitzroy", slug: "fitzroy" },
    { name: "Carlton", slug: "carlton" },
    { name: "Collingwood", slug: "collingwood" },
    { name: "Hawthorn", slug: "hawthorn" },
    { name: "Prahran", slug: "prahran" },
    { name: "Toorak", slug: "toorak" },
    { name: "Docklands", slug: "docklands" },
  ].filter((s) => s.slug !== suburb.slug);

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[400px] flex items-end"
        aria-label={`Bond cleaning ${suburb.name} hero`}
      >
        <div className="absolute inset-0">
          <img
            src={suburb.heroImage}
            alt={suburb.heroAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container relative z-10 py-12 md:py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-3 py-1 text-xs font-bold text-accent mb-4 backdrop-blur-sm">
              <MapPin className="h-3 w-3" />
              {suburb.region}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance mb-4">
              Bond Cleaning {suburb.name} &mdash; Get Your Full Bond Back,
              Guaranteed
            </h1>
            <p className="text-base text-white/85 leading-relaxed mb-6 max-w-xl">
              {suburb.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                data-ocid="suburb.primary_button"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base h-12 px-6"
              >
                <a href="#suburb-contact">Get a Free Quote</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="suburb.secondary_button"
                className="border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-bold text-base h-12 px-6"
              >
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary py-3" aria-label="Trust indicators">
        <div className="container">
          <ul className="flex flex-wrap justify-center gap-5 md:gap-10">
            {[
              "\u2713  100% Bond Back Guarantee",
              "\u2713  Real Estate Approved Checklist",
              "\u2713  Police-Checked & Insured Team",
              `\u2713  ${suburb.name} Specialists`,
            ].map((item) => (
              <li
                key={item}
                className="text-xs sm:text-sm font-bold text-primary-foreground/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main content */}
      <section
        className="py-14 md:py-20 bg-background"
        aria-label={`Bond cleaning information for ${suburb.name}`}
      >
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Body copy */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
                Bond Cleaning in {suburb.name} &mdash; Everything You Need to
                Know
              </h2>
              <div className="space-y-4">
                {suburb.body.map((para) => (
                  <p
                    key={para.slice(0, 50)}
                    className="text-sm md:text-base text-muted-foreground leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Why choose us */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Star,
                    title: "Bond Back Guarantee",
                    desc: "We re-clean for free if your property manager is not 100% satisfied.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Real Estate Checklist",
                    desc: "We use the same checklist your property manager uses at inspection.",
                  },
                  {
                    icon: MapPin,
                    title: `${suburb.name} Experts`,
                    desc: `We know ${suburb.name} rentals and what local agents expect.`,
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <Card key={title} className="shadow-xs">
                    <CardContent className="p-4">
                      <Icon className="h-5 w-5 text-accent mb-2" />
                      <h3 className="font-display font-bold text-sm text-foreground mb-1">
                        {title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Secondary image */}
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={suburb.secondaryImage}
                  alt={suburb.secondaryAlt}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>

              {/* What's included */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-base text-foreground mb-4">
                    What&apos;s Included in Your {suburb.name} Bond Clean
                  </h3>
                  <ul className="space-y-2.5">
                    {suburb.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4 border-t border-border">
                    <a
                      href="https://wa.me/61488841883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                    >
                      <Phone className="h-4 w-4" />
                      WhatsApp: 0488 841 883
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      We reply fast &mdash; usually within the hour.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Postcode info */}
              <div className="rounded-xl bg-muted/50 border border-border p-4">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Service area:</strong>{" "}
                  {suburb.name} ({suburb.postcode}) and surrounding suburbs.
                  Same-week bookings available. Weekend and short-notice
                  appointments welcomed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="suburb-contact"
        className="py-14 md:py-20 gradient-section"
        aria-label={`Get a free bond clean quote for ${suburb.name}`}
      >
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Get a Free {suburb.name} Bond Clean Quote
            </h2>
            <p className="text-muted-foreground">
              Fill in your details below. We will send you a fixed-price,
              checklist-based quote within a few hours.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Other suburbs */}
      <section
        className="py-12 bg-card"
        aria-label="Other Melbourne suburbs we service"
      >
        <div className="container">
          <h2 className="font-display text-xl font-bold text-foreground mb-5 text-center">
            We Also Service These Melbourne Suburbs
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSuburbs.map((s) => (
              <a
                key={s.slug}
                href={`/suburbs/${s.slug}`}
                data-ocid="suburb_links.item"
                className="px-4 py-2 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button asChild variant="outline" size="sm">
              <Link to="/suburbs" data-ocid="suburb_links.view_all.link">
                View All Suburbs <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
