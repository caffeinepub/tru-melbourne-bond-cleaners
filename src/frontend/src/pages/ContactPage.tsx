import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Phone, Shield, Star } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const SUBURBS = [
  "CBD",
  "Southbank",
  "St Kilda",
  "Richmond",
  "Brunswick",
  "Fitzroy",
  "Carlton",
  "Footscray",
  "Box Hill",
  "Glen Waverley",
  "Dandenong",
  "Frankston",
  "Werribee",
  "Sunshine",
  "and more",
];

const TRUST_BADGES = [
  { icon: Shield, label: "Fully Insured" },
  { icon: Star, label: "100% Satisfaction Guarantee" },
  { icon: CheckCircle, label: "Real Estate Approved Checklist" },
  { icon: MapPin, label: "All Melbourne Suburbs" },
];

export function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section
        className="gradient-hero py-16 md:py-20"
        aria-label="Contact page header"
      >
        <div className="container text-center text-white">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-balance mb-4">
            Contact Tru Melbourne Bond Cleaners
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-base md:text-lg">
            Get your free bond clean quote today. We respond within a few hours
            — or chat with us on WhatsApp for an instant reply.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section
        className="py-16 md:py-20 bg-background"
        aria-label="Contact details and form"
      >
        <div className="container max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 items-start">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 p-4 mb-4 hover:bg-green-100 transition-colors group"
                  aria-label="Chat with us on WhatsApp"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full whatsapp-green text-white shrink-0">
                    <SiWhatsapp className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-sm text-green-900">
                      Chat on WhatsApp
                    </p>
                    <p className="text-green-700 font-semibold text-base">
                      0488 841 883
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:0488841883"
                  className="flex items-center gap-3 rounded-xl bg-primary/5 border border-primary/20 p-4 hover:bg-primary/10 transition-colors"
                  aria-label="Call us on 0488841883"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="font-bold text-sm text-foreground">Call Us</p>
                    <p className="text-primary font-semibold text-base">
                      0488 841 883
                    </p>
                  </div>
                </a>
              </div>

              {/* Service area */}
              <div>
                <h3 className="font-display font-bold text-sm text-foreground mb-2">
                  Service Area
                </h3>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p>
                    We service all Melbourne suburbs including{" "}
                    {SUBURBS.join(", ")}.
                  </p>
                </div>
              </div>

              {/* Trust badges */}
              <div>
                <h3 className="font-display font-bold text-sm text-foreground mb-3">
                  Our Promise to You
                </h3>
                <ul className="space-y-2">
                  {TRUST_BADGES.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-2 text-sm">
                      <Icon className="h-4 w-4 text-accent shrink-0" />
                      <span className="font-semibold text-foreground">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <Card className="shadow-card">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">
                    Get Your Free Quote
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
