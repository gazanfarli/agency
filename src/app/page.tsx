import { AboutUs } from "@/components/about-us";
import { Approach } from "@/components/approach";
import { BuildingSoftware } from "@/components/building-software";
import { CaseStudies } from "@/components/case-studies";
import { Feedbacks } from "@/components/feedbacks";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { Process } from "@/components/process";
import { Resources } from "@/components/resources";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col">
        <Hero />
        <Services />
        <AboutUs />
        <LogoList />
        <Feedbacks />
        <CaseStudies />
        <BuildingSoftware />
        <Approach />
        <TechStack />
        <Process />
        <Resources />
      </main>
    </div>
  );
}
