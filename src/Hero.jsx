import React from "react";
import logo from "./assets/logo.svg";

function Hero() {
  return (
    <section id="hero" className="py-32 w-full">
      <div className="container grid lg:grid-cols-2 gap-24 justify-between items-center">
        <article className="flex flex-col gap-8">
          <h1 className="max-w-[507px] text-5xl lg:text-7xl font-VremenaGro font-bold">
            BUIDLer for Web3 builders{" "}
          </h1>
          <div className="max-w-[522px] text-base font-normal font-VremenaGro] leading-loose tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            praesentium ratione et, ullam veritatis odio enim sit iste,
            accusantium cum cumque, exercitationem aspernatur nesciunt quae
            tenetur eum a suscipit. Tempore.
          </div>
        </article>
        <img src={logo} alt="logo" className="ml-auto" />
      </div>
    </section>
  );
}

export default Hero;
