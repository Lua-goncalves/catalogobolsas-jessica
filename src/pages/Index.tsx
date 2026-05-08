import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Payments from "@/components/Payments";
const SaleSection = lazy(() => import("@/components/SaleSection"));
const Products = lazy(() => import("@/components/Products"));
const Features = lazy(() => import("@/components/Features"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const SectionFallback = () => (
  <div className="py-20 flex justify-center">
    <div className="w-8 h-8 border-2 border-luxury/30 border-t-luxury rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="inicio">
        <Hero />
      </div>
      <Payments />
      <Suspense fallback={<SectionFallback />}>
        <SaleSection />
        <Products />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
