import Image from "next/image";
import preview from "../../public/img/preview.webp";
import Stroke from "./icons/Stroke";

const Hero = () => {
  return (
    <section className="py-8 px-4 lg:pt-24 lg:px-7 pb-16">
      <header className="flex flex-col gap-y-12">
        <div className="flex flex-col space-y-6">
          <h1
            className="font-inter font-bold tracking-[-0.04em] leading-[1.2em] text-base-100 text-4xl text-center
          md:w-[70%] md:mx-auto lg:text-[56px]"
          >
            <span className="relative inline-block">
              Supercharge <Stroke />
            </span>{" "}
            your health and save time with Notion
          </h1>

          <p
            className="text-lg font-medium leading-[1.75em] text-center 
          md:w-[70%] md:mx-auto lg:w-[60%] lg:text-2xl"
          >
            Our meal planner helps you to manage your shopping list and stay in
            complete control of your diet.
          </p>

          <div className="flex items-center justify-center">
            <button className="bg-yellow font-bold text-base-100 px-5 py-2 rounded-lg lg:px-9">
              {" "}
              Get started →
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[60%]">
            <Image src={preview} alt="culinAI preview" />
          </div>
        </div>
      </header>
    </section>
  );
};
export default Hero;
