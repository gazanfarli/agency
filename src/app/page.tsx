import { AboutUs } from "@/components/about-us";
import { Approach } from "@/components/approach";
import { BuildingSoftware } from "@/components/building-software";
import { CaseStudies } from "@/components/case-studies";
import { Feedbacks } from "@/components/feedbacks";
import { Hero } from "@/components/hero";
import { LogoList } from "@/components/logo-list";
import { Process } from "@/components/process";
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
        <hr className="w-full h-[1px] bg-[#E7DAED]" />
        <Process />
      </main>
    </div>
  );
}
