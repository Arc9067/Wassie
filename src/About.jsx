import React from "react";
import about from "./assets/about.svg";
import aboutImg from "./assets/aboutImg.svg";
import abso1 from "./assets/abso1.svg";
import abso2 from "./assets/abso2.svg";
import abso3 from "./assets/abso3.svg";

function About() {
  return (
    <section id="about" className="py-32 w-full">
      <div className="container relative flex justify-center items-center flex-col">
        <img src={about} alt="" className="pointer-events-none" />

        <div className="grid relative mt-20 lg:grid-cols-2 gap-24 justify-between items-center">
          <img src={aboutImg} alt="logo" className="ml-auto" />

          <article className="flex flex-col gap-8">
            <h1 className="max-w-[507px] text-white text-5xl font-bold font-VremenaGro]">
              About Wassie
            </h1>

            <p className="max-w-[522px] text-white text-base font-normal font-['Space Grotesk'] leading-loose tracking-tight">
              Wassie isn't just a token; it's a vibe tribe. And if you're not
              feeling it, don't worry – Wassie has a "vibe booster" feature that
              fills your digital wallet with positive energy and memes,
              guaranteed to make you LOL even during market dips. So, join
              Wassie, where the community is so tight-knit, they might as well
              be knitting Ethereum sweaters for each other!
            </p>
            <a
              href="https://t.me/wassiesol"
              className="w-[181px] h-[52px] block relative"
            >
              <div className="w-[173px] h-11 left-[8px] top-[8px] absolute bg-yellow-400" />
              <div className="w-[177px] px-6 py-3.5 left-0 top-0 absolute bg-red-600 border border-red-600 justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base font-bold font-['Space Grotesk']">
                  Telegram
                </div>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
