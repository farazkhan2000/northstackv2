import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyNorthstack } from "@/components/sections/WhyNorthstack";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Insights } from "@/components/sections/Insights";
import { DevelopmentCTA } from "@/components/sections/DevelopmentCTA";
import { CompanyShowreel } from "@/components/sections/CompanyShowreel";
import { Partners } from "@/components/sections/Partners";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <DevelopmentCTA />
      <CompanyShowreel />
      <WhyNorthstack />
      <SelectedWork />
      <Partners />
      <Insights />
      <ContactForm />
    </main>
  );
}
