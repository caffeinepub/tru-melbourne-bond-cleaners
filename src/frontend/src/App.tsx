import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Toaster } from "@/components/ui/sonner";
import { SUBURBS } from "@/data/suburbs-data";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { SuburbPage } from "@/pages/SuburbPage";
import { SuburbsIndexPage } from "@/pages/SuburbsIndexPage";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppFab />
      <Toaster />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const suburbsIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs",
  component: SuburbsIndexPage,
});

// Create a dynamic suburb route that resolves the suburb data
const suburbRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/$suburbSlug",
  component: function SuburbRouteComponent() {
    const { suburbSlug } = suburbRoute.useParams();
    const suburb = SUBURBS.find((s) => s.slug === suburbSlug);
    if (!suburb) {
      return (
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Suburb Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            We couldn&apos;t find a page for that suburb. Please check our
            suburbs list.
          </p>
          <a
            href="/suburbs"
            className="text-primary font-semibold hover:underline"
          >
            View all suburbs &rarr;
          </a>
        </div>
      );
    }
    return <SuburbPage suburb={suburb} />;
  },
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  suburbsIndexRoute,
  suburbRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
