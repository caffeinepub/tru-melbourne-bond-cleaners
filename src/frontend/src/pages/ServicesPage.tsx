import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";

const SERVICES = [
  {
    id: "bond-vacate",
    title: "Bond & Vacate Cleaning",
    subtitle: "Complete end-of-lease clean to the Real Estate standard",
    img: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    alt: "Professional bond and vacate cleaning service in Melbourne by Tru Melbourne Bond Cleaners",
    includes: [
      "All kitchen appliances cleaned inside and out (oven, stovetop, rangehood, dishwasher)",
      "Cupboards and drawers wiped inside and out",
      "Benchtops and splashbacks degreased and polished",
      "All bathrooms scrubbed \u2014 tiles, grout, shower screens, toilets",
      "Windows, tracks, and fly screens cleaned",
      "Floors vacuumed, mopped, and edges detailed",
      "Skirting boards, door frames, and light switches wiped",
      "Ceiling fans, light fittings, and air vents dusted",
      "Cobwebs removed throughout",
      "Laundry area and garage cleaned (where applicable)",
    ],
    body: [
      "Moving out of a rental in Melbourne is exciting \u2014 but the pressure of getting your bond back can make it stressful. A bond clean (also called a vacate clean or end-of-lease clean) is not just a regular tidy-up. It is a thorough, systematic clean of every part of your rental property, completed to the standard set out in your lease agreement and the Victorian Residential Tenancies Act.",
      "At Tru Melbourne Bond Cleaners, we follow a comprehensive, real-estate-approved checklist that covers every room, every surface, and every corner. Our team cleans inside and outside of all kitchen appliances \u2014 including the oven, stovetop, rangehood, and dishwasher. We wipe down cupboards and drawers inside and out, clean all benchtops and splashbacks, and leave the kitchen sparkling.",
      "In the bathrooms, we scrub tiles and grout, disinfect toilets, clean shower screens, and remove soap scum and lime scale. We vacuum and mop all floors, steam clean carpets where required, and clean all windows, tracks, and fly screens.",
      "We also cover the details that property managers always check: skirting boards, door frames, light switches, power points, ceiling fans, light fittings, and air conditioning vents. We remove all cobwebs \u2014 including hard-to-reach corners \u2014 and clean the laundry area thoroughly.",
      "Our bond clean comes with a 100% Satisfaction Guarantee. If your property manager finds any area that does not meet the standard, we come back and re-clean it at no extra charge. We have helped hundreds of Melbourne tenants get their full bond back, and we are confident we can do the same for you.",
      "Every member of our team is trained, experienced, and police-checked. We bring all our own professional-grade equipment and cleaning products \u2014 you do not need to provide anything. We work around your schedule and your moving timeline. Whether you are moving out of a studio apartment in the CBD or a four-bedroom house in the outer suburbs, we have you covered.",
      "Book your bond clean with Tru Melbourne Bond Cleaners today and move out with confidence, knowing the property is in perfect condition for your final inspection.",
    ],
  },
  {
    id: "carpet-steam",
    title: "Carpet Steam Cleaning",
    subtitle: "Hot-water extraction for deep, thorough carpet cleaning",
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning service in Melbourne - Tru Melbourne Bond Cleaners",
    includes: [
      "Pre-treatment of stains and high-traffic areas",
      "Hot-water extraction with industrial-grade machine",
      "Treatment for pet stains and odours",
      "All carpet types covered (wool, nylon, polyester, synthetic)",
      "Moisture extraction to minimise drying time",
    ],
    body: [
      "Carpets take a beating during a tenancy. Everyday foot traffic, spills, pet hair, and dust all leave their mark. When it comes to your end-of-lease inspection, dirty or stained carpets are one of the most common reasons property managers make bond deductions. At Tru Melbourne Bond Cleaners, our professional carpet steam cleaning service restores your carpets to a near-new condition, giving you the best chance of a full bond refund.",
      "We use hot-water extraction \u2014 the most effective carpet cleaning method available. Our industrial-grade steam cleaning machines inject hot water and cleaning solution deep into the carpet fibres, then extract it along with dirt, dust mites, allergens, and stains. The result is a deep, thorough clean that regular vacuuming simply cannot achieve.",
      "Before we steam clean, our technicians pre-treat stains and high-traffic areas with professional carpet pre-treatment solutions. We treat common stains including red wine, coffee, pet urine, mud, and grease. While no cleaning method can guarantee 100% stain removal for deeply set stains, our pre-treatment process dramatically improves outcomes.",
      "Our carpet steam cleaning service covers all carpet types, including wool, nylon, polyester, and synthetic blends. We adjust our cleaning method to suit your carpet type and condition, ensuring we get the best results without damaging the fibres.",
      "We also handle the drying process carefully. Our extraction process removes as much moisture as possible, and we advise you on ventilation to ensure carpets dry fully before your inspection. We recommend allowing 4\u20138 hours of drying time after steam cleaning.",
      "Carpet steam cleaning is often required as a separate item in your tenancy agreement, especially if pets have been kept on the property. Even if it is not explicitly required, clean carpets make a strong impression at the final inspection and help avoid disputes.",
      "Book carpet steam cleaning as part of our full bond clean package or as a standalone service. We cover all Melbourne suburbs and offer flexible scheduling to fit around your move-out date.",
    ],
  },
  {
    id: "kitchen-deep",
    title: "Kitchen Deep Cleaning",
    subtitle: "Thorough degreasing of all kitchen appliances and surfaces",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Professional kitchen deep cleaning and degreasing service Melbourne - Tru Melbourne Bond Cleaners",
    includes: [
      "Oven cleaned inside and out including racks, door glass, and grill",
      "Stovetop and burner grates scrubbed and degreased",
      "Rangehood and filter degreased",
      "Dishwasher cleaned inside and out",
      "All cupboards and drawers cleaned inside and out",
      "Benchtops, splashbacks, and sink descaled",
      "Fridge cleaned inside and out (if applicable)",
      "Kitchen floor mopped and skirting boards wiped",
    ],
    body: [
      "The kitchen is the hardest room to clean in any rental property. Months or years of cooking leave baked-on grease in the oven, grime in the rangehood, and residue on benchtops and splashbacks. Property managers inspect the kitchen closely, and a dirty kitchen is one of the fastest ways to lose part of your bond.",
      "Tru Melbourne Bond Cleaners\u2019 kitchen deep cleaning service tackles every surface and every appliance with professional-grade degreasers and cleaning products. We start with the oven \u2014 the toughest job in any kitchen. We apply heavy-duty oven cleaner, allow it to break down the grease, then scrub and wipe every surface inside the oven until it is clean. We clean the oven racks, the oven door glass (inside and out), and the grill element.",
      "Next, we clean the stovetop \u2014 removing the burner grates, soaking them, and scrubbing the stovetop surface. We clean the rangehood thoroughly, including the rangehood filter, which is often clogged with grease. We wipe down the dishwasher inside and out, clean the dishwasher filter, and run a cleaning cycle if needed.",
      "We clean all cupboards and drawers inside and out, removing crumbs and residue. We wipe down all benchtops, splashbacks, and the sink. We clean the tap fittings and remove limescale. We wipe down the fridge (inside and out) if it is included in the tenancy. We mop the kitchen floor and clean the skirting boards.",
      "Our kitchen deep clean leaves every surface spotless and grease-free, meeting the standard expected by Melbourne property managers. When combined with our full bond clean package, it ensures your kitchen passes inspection with flying colours.",
    ],
  },
  {
    id: "bathroom-sanitising",
    title: "Bathroom Sanitising",
    subtitle: "Hospital-grade disinfection of all bathrooms and en-suites",
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Professional bathroom deep cleaning and sanitising service Melbourne - Tru Melbourne Bond Cleaners",
    includes: [
      "Shower recess and bathtub scrubbed \u2014 tiles, grout, shower screen",
      "Showerhead and tap fittings descaled",
      "Toilet disinfected (bowl, seat, lid, cistern, and surrounds)",
      "Vanity, sink, and mirrors cleaned streak-free",
      "All tiles wiped down and grout scrubbed",
      "Exhaust fan covers, towel rails, and toilet roll holders wiped",
      "Bathroom floor mopped and skirting boards cleaned",
      "Hospital-grade disinfectant used on all surfaces",
    ],
    body: [
      "Bathrooms require more than just a quick wipe-down at the end of a tenancy. Soap scum, mould, lime scale, and bacteria build up over time and can be difficult to remove without the right products and techniques. Tru Melbourne Bond Cleaners\u2019 bathroom sanitising service leaves every bathroom in your rental sparkling clean and hygienically sanitised.",
      "We clean and disinfect every surface in the bathroom, starting with the shower recess or bathtub. We remove soap scum and lime scale from tiles, grout, and shower screens using professional-grade tile and glass cleaners. We scrub grout lines to remove mould and discolouration. We clean the showerhead and tap fittings, removing lime scale and hard water deposits.",
      "We clean and disinfect the toilet thoroughly \u2014 the bowl, seat, lid, cistern, and the area around the base. We clean the vanity, sink, and tap fittings. We clean all mirrors and leave them streak-free. We wipe down all tiles, the exhaust fan cover, towel rails, and toilet roll holders. We mop the bathroom floor and clean the skirting boards.",
      "For en-suites and second bathrooms, we apply the same thorough standard. Every bathroom in the property receives a full sanitising clean, not just the main bathroom. We use hospital-grade disinfectants to kill bacteria and leave surfaces hygienically clean.",
      "A spotless bathroom makes a strong impression at the final inspection. Our bathroom sanitising service, as part of our full bond clean package, gives you the best possible chance of getting your full bond back.",
    ],
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    subtitle: "Streak-free windows inside and out, frames, sills, and tracks",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Professional window cleaning service for rental properties in Melbourne - Tru Melbourne Bond Cleaners",
    includes: [
      "Window glass cleaned inside and outside (where accessible)",
      "Window frames, sills, and tracks cleaned",
      "Fly screens removed, washed, and replaced",
      "Sliding door tracks and glass doors cleaned",
      "Professional squeegees for streak-free results",
    ],
    body: [
      "Clean windows make a huge difference to the overall appearance of a property. Dirty, streaky windows are immediately noticeable and can affect the outcome of your bond inspection. Tru Melbourne Bond Cleaners\u2019 window cleaning service covers all accessible internal and external windows, leaving them streak-free and sparkling.",
      "We clean the glass on both sides (internal and external where accessible), the window frames, sills, and tracks. Window tracks are a commonly overlooked area that property managers check \u2014 they collect dust, dead insects, and grime over time. We use professional squeegees and lint-free cloths to achieve a streak-free finish on every pane.",
      "We also clean fly screens where applicable \u2014 removing them, washing them down, and replacing them. We clean sliding door tracks and glass sliding doors as part of this service.",
      "Our window cleaning service covers standard residential windows in Melbourne homes and apartments. For high-rise or unusually large properties, please contact us so we can assess the requirements and provide an accurate quote.",
      "Adding window cleaning to your bond clean package is a cost-effective way to ensure every part of your property is inspection-ready. Clean windows are one of the finishing touches that help your property look its absolute best for the final walkthrough.",
    ],
  },
];

export function ServicesPage() {
  return (
    <main>
      {/* Page header */}
      <section
        className="gradient-hero py-16 md:py-20"
        aria-label="Services page header"
      >
        <div className="container text-center text-white">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-balance mb-4">
            Our Bond Cleaning Services in Melbourne
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-base md:text-lg">
            We cover every room, every surface, and every detail your property
            manager checks. Explore our full range of vacate cleaning services.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-16 md:py-20 bg-background"
        aria-label="Service details"
      >
        <div className="container max-w-4xl space-y-20">
          {SERVICES.map(
            ({ id, title, subtitle, img, alt, includes, body }, idx) => (
              <article
                key={id}
                id={id}
                className={`grid gap-10 md:grid-cols-2 items-start ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
                }`}
              >
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={img}
                    alt={alt}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                    {title}
                  </h2>
                  <p className="text-accent font-semibold text-sm mb-4">
                    {subtitle}
                  </p>

                  {body.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-sm text-muted-foreground leading-relaxed mb-3"
                    >
                      {para}
                    </p>
                  ))}

                  <div className="mt-5 rounded-xl bg-muted/50 border border-border p-4">
                    <h3 className="font-display font-bold text-sm text-foreground mb-3">
                      What&apos;s included:
                    </h3>
                    <ul className="space-y-2">
                      {includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary" aria-label="Book a service">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Ready to Book Your Bond Clean?
          </h2>
          <p className="text-primary-foreground/75 mb-7 max-w-lg mx-auto">
            Get a free, fixed-price quote today. We respond within a few hours.
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
