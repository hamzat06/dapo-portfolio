import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Work } from "@/components/sections/work";
import { Portfolios } from "@/components/sections/portfolios";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Portfolios />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
