import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SUBURBS } from "@/data/suburbs-data";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";

export function SuburbsIndexPage() {
  useEffect(() => {
    document.title =
      "Bond Cleaning Melbourne Suburbs | Tru Melbourne Bond Cleaners";
    const metaDesc = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (metaDesc)
      metaDesc.content =
        "Tru Melbourne Bond Cleaners provides professional bond cleaning and vacate cleaning across Melbourne&apos;s inner suburbs. Find your suburb and get a free quote today.";
    return () => {
      document.title =
        "Tru Melbourne Bond Cleaners | Professional Vacate Cleaning Melbourne";
    };
  }, []);

  return (
    <main>
      {/* Header */}
      <section
        className="gradient-hero py-14 md:py-20"
        aria-label="Suburbs page header"
      >
        <div className="container text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-3 py-1 text-xs font-bold text-white mb-4">
            <MapPin className="h-3 w-3" />
            All Melbourne Inner Suburbs
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-balance mb-4">
            Bond Cleaning Across Melbourne Suburbs
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-base">
            Tru Melbourne Bond Cleaners services all inner Melbourne suburbs.
            Click your suburb to find out more about our local bond cleaning
            service and get a free, fixed-price quote.
          </p>
        </div>
      </section>

      {/* Suburb cards */}
      <section
        className="py-14 md:py-20 bg-background"
        aria-label="Melbourne suburbs we service"
      >
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUBURBS.map((suburb, idx) => (
              <a
                key={suburb.slug}
                href={`/suburbs/${suburb.slug}`}
                data-ocid={`suburbs.item.${idx + 1}`}
                className="group block"
              >
                <Card className="overflow-hidden shadow-card card-hover h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={suburb.heroImage}
                      alt={suburb.heroAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h2 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {suburb.name}
                      </h2>
                      <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
                        {suburb.postcode}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {suburb.region}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {suburb.intro}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                      View bond cleaning in {suburb.name}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary" aria-label="Get a free quote">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Don&apos;t See Your Suburb?
          </h2>
          <p className="text-primary-foreground/75 mb-6 max-w-lg mx-auto">
            We service all Melbourne suburbs &mdash; not just the ones listed
            here. Contact us and we will confirm availability for your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold gap-2"
              data-ocid="suburbs.contact.primary_button"
            >
              <Link to="/contact">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 font-bold"
              data-ocid="suburbs.whatsapp.button"
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp: 0488 841 883
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
