import React from "react";
import logo from "./assets/logo.svg";

function Hero() {
  return (
    <section id="hero" className="py-32 w-full">
      <div className="container grid lg:grid-cols-2 gap-24 justify-between items-center">
        <article className="flex flex-col gap-8">
          <h1 className="max-w-[507px] text-5xl lg:text-7xl font-VremenaGro font-bold">
            Welcome to Wassie
          </h1>
          <div className="max-w-[522px] text-base font-normal font-VremenaGro] leading-loose tracking-tight">
            Introducing "Wassie," the revolutionary crypto project that's not
            just about making money, it's about community vibes! Imagine this:
            in the mystical land of decentralized finance, where unicorns roam
            freely and blockchain dreams come true, there's a place called
            Wassie. Here, instead of shouting "To the moon!" they chant, "Wee
            cum togetha, wee vibe, wee mewn" while doing a synchronized dance
            with their NFT avatars.
          </div>
        </article>
        <img src={logo} alt="logo" className="ml-auto" />
      </div>
    </section>
  );
}

export default Hero;
