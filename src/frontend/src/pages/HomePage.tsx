import { ContactForm } from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const SERVICES = [
  {
    title: "Bond & Vacate Clean",
    desc: "Complete top-to-bottom clean for your end-of-lease inspection.",
    img: "/assets/generated/hero-bond-cleaning.dim_1200x600.jpg",
    alt: "Professional bond and vacate cleaning service in a Melbourne home",
  },
  {
    title: "Carpet Steam Cleaning",
    desc: "Hot-water extraction removes stains, allergens, and odours.",
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning in a Melbourne rental property",
  },
  {
    title: "Kitchen Deep Clean",
    desc: "Oven, stovetop, rangehood, and all surfaces degreased and spotless.",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Professional kitchen deep cleaning service in Melbourne",
  },
  {
    title: "Bathroom Sanitising",
    desc: "Tiles, grout, shower screens, and toilets hygienically sanitised.",
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Professional bathroom sanitising service for Melbourne rental properties",
  },
  {
    title: "Window Cleaning",
    desc: "Streak-free windows inside and out, frames, sills, and tracks.",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Professional window cleaning service for Melbourne rental properties",
  },
];

const WHY_US = [
  {
    icon: Star,
    title: "100% Bond Back Guarantee",
    desc: "If your property manager is not happy, we come back and re-clean — at no extra cost. Your bond is our promise.",
  },
  {
    icon: Shield,
    title: "Fully Trained & Insured Cleaners",
    desc: "Every team member is trained, police-checked, and backed by public liability insurance for your protection.",
  },
  {
    icon: MapPin,
    title: "All Melbourne Suburbs Covered",
    desc: "From the CBD to the outer suburbs — we come to you. Flexible scheduling including weekends and short notice.",
  },
];

const FAQS = [
  {
    id: "faq-1",
    question: "What is Bond Cleaning and Why Is It Required?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Bond cleaning (also called vacate cleaning or end-of-lease cleaning)
          is a thorough, top-to-bottom clean of a rental property before you
          hand back the keys.
        </p>
        <p>
          When you sign a lease, you pay a security bond — usually four
          weeks&apos; rent — that your landlord holds. At the end of your
          tenancy, your landlord or property manager checks the property against
          a condition report. If the property is not clean enough, they can
          claim money from your bond to pay for professional cleaning.
        </p>
        <p>
          Bond cleaning makes sure the home is returned to the same clean
          condition it was in when you moved in, so you get every cent of your
          bond refunded.
        </p>
        <p>
          In Victoria, the Residential Tenancies Act sets out exactly what
          standard a property must meet at the end of a lease. A professional
          bond clean covers every corner of the property — from oven degreasing
          to window tracks and skirting boards — so you meet that standard
          without stress.
        </p>
      </div>
    ),
  },
  {
    id: "faq-2",
    question: "Why Is Bond Cleaning Important?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Bond cleaning is important because your money is on the line. Your
          security deposit can be worth thousands of dollars.
        </p>
        <p>
          If your property manager finds the home is not clean, they will
          arrange their own cleaners and deduct the cost from your bond — often
          at a much higher rate than if you had booked a professional cleaner
          yourself.
        </p>
        <p>
          A proper bond clean also protects your rental history. Landlords and
          property managers talk, and a clean exit from a property helps you get
          approved for your next rental.
        </p>
        <p>
          Bond cleaning also reduces stress at moving time. Moving is one of the
          most stressful life events. Handing over a spotless property means you
          can focus on settling into your new home instead of worrying about
          bond disputes.
        </p>
        <p>
          At Tru Melbourne Bond Cleaners, we follow the Real Estate Institute of
          Victoria (REIV) standards, so you can be confident the property meets
          your agent&apos;s expectations.
        </p>
      </div>
    ),
  },
  {
    id: "faq-3",
    question: "How Much Does a Bond Clean Cost?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          The cost of a bond clean in Melbourne depends on the size of the
          property, its condition, and the services included. Here is a rough
          guide:
        </p>
        <ul className="list-none space-y-2 pl-4">
          {[
            ["Studio or 1-bedroom", "$200–$280"],
            ["2-bedroom unit", "$280–$380"],
            ["3-bedroom house", "$380–$500"],
            ["4-bedroom house", "$500–$650+"],
          ].map(([type, price]) => (
            <li key={type} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-accent shrink-0" />
              <span>
                <strong>{type}:</strong> {price}
              </span>
            </li>
          ))}
        </ul>
        <p>
          Carpet steam cleaning, window cleaning, and flea treatment are usually
          priced separately. Always ask for a checklist-based quote so you know
          exactly what is included.
        </p>
        <p>
          At Tru Melbourne Bond Cleaners, we give you a transparent, no-surprise
          quote upfront.{" "}
          <Link
            to="/contact"
            className="text-accent font-semibold hover:underline"
          >
            Contact us today for a fast, free quote.
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq-4",
    question: "What Is a Full Bond Cleaning?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          A full bond clean is a complete, room-by-room clean of your entire
          rental property to the standard required by your lease agreement and
          the Residential Tenancies Act. It is much more thorough than a regular
          clean.
        </p>
        <p>A full bond clean includes:</p>
        <ul className="list-none space-y-1.5 pl-4">
          {[
            "Cleaning inside and outside of all kitchen appliances (oven, stovetop, rangehood, dishwasher)",
            "Wiping down all cupboards and drawers inside and out",
            "Cleaning all bathrooms and toilets, scrubbing tiles and grout",
            "Cleaning all windows and tracks",
            "Vacuuming and mopping all floors",
            "Steam cleaning carpets (if required)",
            "Dusting light fittings and ceiling fans",
            "Cleaning skirting boards, door frames, and light switches",
            "Removing all cobwebs",
            "Cleaning laundry areas and garages if applicable",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          A full bond clean can take anywhere from 4 hours for a small unit to a
          full day for a large house. It is hard, detailed work — which is why
          most tenants choose to hire professionals.
        </p>
      </div>
    ),
  },
  {
    id: "faq-5",
    question: "Which Are the Top-Rated Bond Cleaning Companies Near Me?",
    answer: (
      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          Here are five highly regarded bond cleaning companies in Melbourne and
          surrounding areas:
        </p>
        <ol className="space-y-4">
          {[
            {
              num: 1,
              name: "Pristine Home",
              url: "https://pristinehome.com.au",
              desc: "Pristine Home is a well-established Melbourne cleaning company offering end-of-lease and bond cleaning services. They cover most Melbourne suburbs and are known for their detailed checklists and trained staff. Their team uses eco-friendly products and offers a re-clean guarantee if the property manager is not satisfied.",
            },
            {
              num: 2,
              name: "Jim's Cleaning",
              url: "https://jimscleaning.com.au",
              desc: "Jim's Cleaning is part of the famous Jim's Group franchise network. They have cleaners across Melbourne and the rest of Australia. Jim's offers bond cleaning, carpet cleaning, and window cleaning. Their franchise model means you get a local cleaner backed by a national brand with strong accountability.",
            },
            {
              num: 3,
              name: "Clean To Perfection",
              url: "https://cleantoperfection.com.au",
              desc: "Clean To Perfection specialises in end-of-lease and bond cleaning across Melbourne's northern and western suburbs. They are known for competitive pricing and flexible scheduling, including weekend appointments. Their team is police-checked and fully insured.",
            },
            {
              num: 4,
              name: "VIP Home Services",
              url: "https://viphomeservices.com.au",
              desc: "VIP Home Services is one of Australia's oldest and most trusted home service franchises. They offer bond cleaning, carpet cleaning, and pest control packages across Melbourne. VIP has decades of experience and a long track record of helping tenants get their full bond back.",
            },
            {
              num: 5,
              name: "Tru Bond Cleaning",
              url: "https://trubondcleaningbrisbane.com",
              desc: "Tru Bond Cleaning is a top-rated bond cleaning specialist serving Melbourne and Brisbane. With a strong reputation for delivering thorough, checklist-based bond cleans, Tru Bond Cleaning uses professional-grade equipment and eco-friendly products. Their experienced team understands exactly what property managers look for and backs every clean with a satisfaction guarantee. Whether you need a full vacate clean, carpet steam cleaning, or oven deep clean, Tru Bond Cleaning delivers results that get your bond back.",
            },
          ].map(({ num, name, url, desc }) => (
            <li key={num} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {num}
              </span>
              <div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary hover:underline"
                >
                  {name}
                </a>
                {" — "}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-xs"
                >
                  {url.replace("https://", "")}
                </a>
                <p className="mt-1 text-muted-foreground">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
  {
    id: "faq-6",
    question: "Which Cleaning Products Are Best for Bond Cleaning?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Professional bond cleaners use commercial-grade products that are
          stronger and more effective than regular supermarket cleaners. Here
          are the best product categories:
        </p>
        <ul className="space-y-2">
          {[
            {
              category: "Oven & Grill Cleaner",
              product:
                "Easy-Off Heavy Duty Oven Cleaner — a favourite among professionals for cutting through baked-on grease.",
            },
            {
              category: "Bathroom & Tile Cleaner",
              product:
                "Domestos Thick Bleach and Shower Power — go-to products for removing soap scum, mould, and lime scale.",
            },
            {
              category: "Multi-Surface Spray",
              product:
                "Ajax Spray N' Wipe and Glen 20 — versatile and safe for most surfaces.",
            },
            {
              category: "Floor Cleaner",
              product:
                "Pine O Cleen and Selleys Sugar Soap — excellent for stripping built-up grime from floors before mopping.",
            },
            {
              category: "Glass Cleaner",
              product:
                "Windex Original Glass Cleaner — leaves streak-free windows and mirrors.",
            },
            {
              category: "Carpet Pre-Treatment",
              product:
                "Preen Carpet Stain Remover and Bissell Professional Pet Stain & Odour Remover — tackle stubborn carpet stains before steam cleaning.",
            },
          ].map(({ category, product }) => (
            <li key={category} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>
                <strong>{category}:</strong> {product}
              </span>
            </li>
          ))}
        </ul>
        <p>
          Always check product compatibility with your surfaces and ventilate
          the area well when using strong chemicals.
        </p>
      </div>
    ),
  },
  {
    id: "faq-7",
    question: "How Much Does Professional Bond Cleaning Typically Cost?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Professional bond cleaning in Melbourne typically costs between $200
          and $700 or more, depending on the size and condition of your
          property. A standard 3-bedroom home in average condition costs roughly
          $380–$480 for a full bond clean.
        </p>
        <p>Additional services add to the total:</p>
        <ul className="space-y-2 pl-4">
          {[
            "Carpet steam cleaning (3-bed home): $100–$180 extra",
            "Window cleaning: $80–$150 extra",
            "Fridge and oven cleaning (each): $40–$80 extra",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Always compare quotes that include a detailed checklist — a cheap
          quote that misses key items will not pass your property manager&apos;s
          inspection. At Tru Melbourne Bond Cleaners, our quotes are
          all-inclusive and checklist-based so there are no hidden surprises.
        </p>
      </div>
    ),
  },
  {
    id: "faq-8",
    question: "What Products Are Best for Bond Cleaning Carpets?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Carpet cleaning during a bond clean usually requires both a
          pre-treatment spray and a hot-water extraction (steam clean). Here are
          the best products professionals use:
        </p>
        <ul className="space-y-2">
          {[
            {
              name: "Preen Carpet Stain Remover",
              url: "https://www.preen.com.au",
              desc: "Great for spot-treating stains before the full steam clean.",
            },
            {
              name: "Bissell Professional Pet Stain & Odour Remover",
              url: "https://www.bissell.com.au",
              desc: "Excellent for homes with pets, neutralising odours and lifting stains.",
            },
            {
              name: "Selleys Carpet Stain Remover",
              url: "https://www.selleys.com.au",
              desc: "A trusted Australian brand for general carpet stains.",
            },
            {
              name: "Britex Carpet Care Range",
              url: "https://britex.com.au",
              desc: "Widely available in Woolworths and Coles, Britex products are popular for DIY carpet pre-treatment.",
            },
            {
              name: "Goo Gone Carpet & Upholstery Cleaner",
              url: "https://googone.com",
              desc: "Ideal for sticky or adhesive-based stains.",
            },
          ].map(({ name, url, desc }) => (
            <li key={name} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  {name}
                </a>{" "}
                — {desc}
              </span>
            </li>
          ))}
        </ul>
        <p>
          For best results, always pre-treat stains 10–15 minutes before
          hot-water extraction, and ensure the carpet is fully dry before the
          final inspection.
        </p>
      </div>
    ),
  },
  {
    id: "faq-9",
    question: "How Do I Choose a Reliable Bond Cleaner?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Choosing the right bond cleaner saves you money and stress. Here is
          what to look for:
        </p>
        <ol className="space-y-2">
          {[
            [
              "Checklist-based service",
              "A good bond cleaner works from a real-estate-approved checklist, not guesswork.",
            ],
            [
              "Bond-back guarantee",
              "Look for companies that offer a free re-clean if your property manager is not satisfied.",
            ],
            [
              "Insurance",
              "Always hire insured cleaners. Accidents happen, and you need to be protected.",
            ],
            [
              "Transparent pricing",
              "Avoid cleaners who quote by the hour for bond cleans. Fixed-price, checklist-based quotes are fairer and more predictable.",
            ],
            [
              "Reviews",
              "Check Google reviews and look for patterns in feedback. Consistent praise for thoroughness and communication is a good sign.",
            ],
            [
              "Experience",
              "Ask how long they have been doing bond cleans specifically. Bond cleaning is different from regular domestic cleaning.",
            ],
            [
              "Availability",
              "Make sure they can work around your move-out date and property manager inspection time.",
            ],
          ].map(([title, desc], i) => (
            <li key={title} className="flex items-start gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary mt-0.5">
                {i + 1}
              </span>
              <span>
                <strong>{title}</strong> — {desc}
              </span>
            </li>
          ))}
        </ol>
        <p>
          Tru Melbourne Bond Cleaners ticks all of these boxes.{" "}
          <Link
            to="/contact"
            className="text-accent font-semibold hover:underline"
          >
            Contact us today for a free, no-obligation quote.
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq-10",
    question:
      "Can I Book a Bond Cleaning Company Online with a Satisfaction Guarantee?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Yes! Tru Melbourne Bond Cleaners makes it easy to book online. Simply
          fill in our contact form with your property details, preferred date,
          and any special requirements. We will get back to you within a few
          hours with a fixed-price, checklist-based quote.
        </p>
        <p>
          Every clean comes with our{" "}
          <strong>100% Satisfaction Guarantee</strong> — if your property
          manager is not happy with any area we cleaned, we will come back and
          re-clean it at no extra cost.
        </p>
        <p>
          You can also contact us directly on WhatsApp for a faster response.
          Booking online is the quickest and easiest way to secure your date —
          especially as end-of-month slots fill up fast in Melbourne.
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          <Link to="/contact">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book Online Now
            </Button>
          </Link>
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" variant="outline">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "faq-11",
    question: "How Much Is a Cleaner Per Hour in Melbourne?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          In Melbourne, a general domestic cleaner typically charges between{" "}
          <strong>$35 and $55 per hour</strong>. Specialised cleaning services
          like bond cleaning or deep cleaning are often quoted at a fixed price
          rather than an hourly rate, because the scope of work is defined by a
          checklist.
        </p>
        <p>
          If you are booking an hourly cleaner for regular maintenance, expect
          to pay <strong>$40–$50 per hour</strong> for a reputable service.
        </p>
        <p>
          For bond cleaning, always request a fixed-price quote based on a
          checklist — this protects you from bill shock if the job takes longer
          than expected.
        </p>
      </div>
    ),
  },
  {
    id: "faq-12",
    question:
      "How Much Is End of Lease Cleaning in Australia? How Much to Pay a Cleaner for 3 Hours? What Is the 20-Minute Rule in Cleaning?",
    answer: (
      <div className="space-y-4 text-sm leading-relaxed">
        <div>
          <h4 className="font-bold text-foreground mb-1">
            End of lease cleaning costs in Australia
          </h4>
          <p>
            Costs vary by state and property size. In Melbourne and Victoria:
          </p>
          <ul className="space-y-1 pl-4 mt-2">
            {[
              ["2-bedroom unit", "$280–$380"],
              ["3-bedroom house", "$380–$500"],
            ].map(([type, price]) => (
              <li key={type} className="flex items-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>
                  {type}: {price}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-2">
            Sydney prices run slightly higher. Brisbane tends to be slightly
            lower. Always get a fixed quote based on a room-by-room checklist.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-1">
            Paying a cleaner for 3 hours
          </h4>
          <p>
            At Melbourne rates of $40–$50/hour, 3 hours of general cleaning
            costs <strong>$120–$150</strong>. This is suitable for a small
            1-bedroom apartment top-up clean, but is not enough time for a
            thorough bond clean of a larger property.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-1">The 20-minute rule</h4>
          <p>
            The 20-minute cleaning rule is a popular time-management trick where
            you set a timer for 20 minutes and clean as much as you can before
            it goes off. It works for regular maintenance cleaning and helps
            avoid procrastination.
          </p>
          <p className="mt-1">
            However, for a full bond clean, the 20-minute rule is not enough — a
            professional bond clean takes several hours of systematic work to
            meet property manager standards.
          </p>
        </div>
      </div>
    ),
  },
];

export function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[560px] flex items-center"
        aria-label="Hero section"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-bond-cleaning.dim_1200x600.jpg"
            alt="Professional bond cleaners at work in a Melbourne home - Tru Melbourne Bond Cleaners"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container relative z-10 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/40 px-4 py-1.5 text-xs font-bold text-accent mb-6 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Melbourne&apos;s #1 Bond Cleaning Specialists
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance mb-5">
              Melbourne&apos;s Most Trusted Bond Cleaners — Get Your Full Bond
              Back, Guaranteed
            </h1>
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
              We make moving out stress-free. Tru Melbourne Bond Cleaners
              delivers spotless vacate cleans across Melbourne, so your landlord
              signs off and you get every dollar of your deposit back.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                data-ocid="hero.primary_button"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base h-13 px-7"
              >
                <a href="#contact">Get a Free Quote →</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="hero.secondary_button"
                className="border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-bold text-base h-13 px-7"
              >
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary py-4" aria-label="Trust indicators">
        <div className="container">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              "✓  100% Bond Back Guarantee",
              "✓  Real Estate Approved Checklist",
              "✓  Police-Checked & Insured Team",
              "✓  All Melbourne Suburbs",
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

      {/* Why choose us */}
      <section
        className="py-16 md:py-20 gradient-section"
        aria-label="Why choose Tru Melbourne Bond Cleaners"
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why Melbourne Renters Choose Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We are not just cleaners — we are bond-back specialists. Here is
              what makes us different.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {WHY_US.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="text-center shadow-card card-hover">
                <CardContent className="pt-8 pb-7 px-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
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

      {/* Services */}
      <section
        className="py-16 md:py-20 bg-card"
        aria-label="Our cleaning services"
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Our Bond Cleaning Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From a full vacate clean to carpet steam cleaning and kitchen
              degreasing — we cover everything your property manager checks.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ title, desc, img, alt }) => (
              <Card
                key={title}
                className="overflow-hidden shadow-card card-hover group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-1.5">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold gap-2"
            >
              <Link to="/services">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 md:py-24 gradient-section"
        aria-label="Frequently asked questions"
      >
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about bond cleaning in Melbourne.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map(({ id, question, answer }, idx) => (
              <AccordionItem
                key={id}
                value={id}
                data-ocid={`faq.item.${idx + 1}`}
                className="rounded-xl border border-border bg-card shadow-xs px-1"
              >
                <AccordionTrigger className="px-5 py-4 text-left font-display font-bold text-sm md:text-base text-foreground hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Service Areas – internal links for SEO */}
      <section
        id="service-areas"
        className="py-16 md:py-20 bg-muted/40"
        aria-label="Bond cleaning service areas in Melbourne"
      >
        <div className="container max-w-4xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Bond Cleaning Across Melbourne's Best Suburbs
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Tru Melbourne Bond Cleaners services all major Melbourne suburbs.
            Click your suburb below to see local pricing, tips, and what's
            included in your bond clean.
          </p>
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
            aria-label="Melbourne suburb bond cleaning pages"
          >
            {[
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
            ].map((suburb) => (
              <li key={suburb.slug}>
                <Link
                  to="/suburbs/$suburbSlug"
                  params={{ suburbSlug: suburb.slug }}
                  data-ocid={`service-areas.${suburb.slug}.link`}
                  className="block rounded-xl border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors px-4 py-3 text-sm font-semibold text-foreground shadow-sm"
                  aria-label={`Bond cleaning in ${suburb.name}, Melbourne`}
                >
                  {suburb.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Don't see your suburb?{" "}
            <a
              href="#contact"
              data-ocid="service-areas.contact.link"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Contact us
            </a>{" "}
            — we cover all of Melbourne and surrounding areas.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-card"
        aria-label="Get a free quote"
      >
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Get Your Free Bond Clean Quote Today
            </h2>
            <p className="text-muted-foreground">
              Fill in your details below and we will send you a fixed-price,
              no-surprise quote within a few hours.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
