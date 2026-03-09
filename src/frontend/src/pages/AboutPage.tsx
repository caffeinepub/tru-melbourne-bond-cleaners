import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Users,
} from "lucide-react";

const VALUES = [
  {
    icon: Star,
    title: "100% Satisfaction Guarantee",
    desc: "If your property manager is not satisfied with any area we cleaned, we return and re-clean it at no extra charge.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Police-Checked",
    desc: "Every team member is police-checked and we carry public liability insurance. Your property and belongings are protected.",
  },
  {
    icon: CheckCircle,
    title: "Real Estate Approved Checklist",
    desc: "We follow REIV standards. Our checklist matches what Melbourne property managers use at final inspection.",
  },
  {
    icon: Users,
    title: "Bond Cleaning Specialists",
    desc: "Bond cleaning is our core business — not an add-on. We do it every day and we do it exceptionally well.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Weekends, short notice, tight timelines — we work around your move-out date and property manager inspection.",
  },
  {
    icon: CheckCircle,
    title: "All Melbourne Suburbs",
    desc: "Inner city, middle ring, outer suburbs — we cover all of Melbourne and bring our own professional-grade equipment.",
  },
];

export function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="gradient-hero py-16 md:py-20"
        aria-label="About page header"
      >
        <div className="container text-center text-white">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-balance mb-4">
            About Tru Melbourne Bond Cleaners
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-base md:text-lg">
            Melbourne&apos;s trusted bond cleaning specialists — helping renters
            get their full bond back since day one.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 md:py-20 bg-background" aria-label="Our story">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
                We Take the Stress Out of Moving Out
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Tru Melbourne Bond Cleaners is a professional vacate and bond
                  cleaning company based in Melbourne, Victoria. We help renters
                  across Melbourne get their full bond back at the end of their
                  tenancy, without the stress of doing it themselves.
                </p>
                <p>
                  We understand how much pressure comes with moving out. You are
                  managing removalists, utilities, address changes, and a dozen
                  other tasks — all while watching the clock before your final
                  inspection. That is why we take the cleaning completely off
                  your hands. We arrive on time, work systematically through
                  every room, and leave your property in perfect condition.
                </p>
                <p>
                  Our team is made up of experienced, trained cleaning
                  professionals who specialise in bond and vacate cleaning. We
                  are not a general cleaning service that does bond cleans on
                  the side — bond cleaning is our core business, and we do it
                  exceptionally well.
                </p>
                <p>
                  Every clean we perform is based on a comprehensive,
                  real-estate-approved checklist aligned with the requirements
                  of Victoria&apos;s Residential Tenancies Act and the standards
                  used by Melbourne property managers. We know exactly what
                  agents look for, and we deliver it every time.
                </p>
                <p>
                  We bring all our own professional-grade equipment and cleaning
                  products. You do not need to supply anything. We also carry
                  public liability insurance, so you are protected in the
                  unlikely event of any damage.
                </p>
                <p className="font-semibold text-foreground">
                  Trustworthy. Reliable. Thorough. That is Tru Melbourne Bond
                  Cleaners.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold gap-2"
                >
                  <Link to="/contact">
                    Get a Free Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/assets/generated/about-team.dim_1000x600.jpg"
                alt="Tru Melbourne Bond Cleaners professional team ready to deliver expert bond cleaning across Melbourne"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 md:py-20 gradient-section"
        aria-label="Our values and commitments"
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              What You Can Expect From Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These are not just promises — they are the standards we hold
              ourselves to on every job.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="shadow-card card-hover">
                <CardContent className="pt-6 pb-6 px-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary" aria-label="Call to action">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Let Us Help You Get Your Bond Back
          </h2>
          <p className="text-primary-foreground/75 mb-7 max-w-lg mx-auto">
            Contact us today for a free, no-obligation quote. We respond within
            a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold gap-2"
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
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: 0488 841 883
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
