import React from "react";
import Image from "next/image";
// import person1 from "@/components/building-software/images/person_1.png";
// import person2 from "@/components/building-software/images/person-2.png";
// import person3 from "@/components/building-software/images/person-3.png";
// import buildingSoftware1 from "@/components/building-software/images/building-software-1.png";
// import buildingSoftware2 from "@/components/building-software/images/building-software-2.png";
// import buildingSoftware3 from "@/components/building-software/images/building-software-3.png";

export const BuildingSoftware = () => {
  return (
    <section id="building-software" className="bg-white px-4 md:px-8 lg:px-24">
      <div className="my-6 md:my-8 lg:my-16">
        <div className="w-full flex justify-center items-center mb-5">
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
        </div>
        <h2 className="flex flex-col text-center text-3xl lg:text-4xl text-[#1A202C]">
          Way of building <span className="font-bold">Great Software</span>
        </h2>
      </div>

      <div>
        <div>
          <div>
            <h3>Build the right team to scale</h3>
            <p>
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers)
            </p>
            <p>
              Our delivery model helps you cut costs and deliver within budget.
            </p>
            <div className="flex">
              <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
              <p>
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </p>
            </div>
            <div className="flex">
              <div>
                {/* <Image src={buildingSoftware1} alt="image" /> */}
              </div>
              <div>
                <h4>Jeewa markram</h4>
                <p>CEO</p>
              </div>
            </div>
          </div>
          <div>
            {/* <Image src={person1} alt="image" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
