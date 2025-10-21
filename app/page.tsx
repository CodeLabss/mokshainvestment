import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
// import Logos from "@/components/Logos";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-20"> {/* offset for fixed navbar */}
        <Hero />
        <Stats />
        <Features />
        
        <Services />
        <Testimonials />
        
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
