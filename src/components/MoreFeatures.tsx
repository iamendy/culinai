import Calculator from "./icons/Calculator";
import Carrot from "./icons/Carrot";
import Customize from "./icons/Customize";

const MoreFeatures = () => {
  return (
    <section className="py-12 px-6 lg:py-16 lg:px-8">
      <div className="flex flex-col space-y-12 lg:space-y-16  xl:max-w-[1080px] xl:mx-auto">
        <div className="flex flex-col gap-y-4">
          <h3 className="tracking-[0.25em] leading-[1.7em] text-center">
            MORE FEATURES
          </h3>
          <h2
            className="text-[28px] text-base-100 font-bold tracking-normal leading-[1.2em] text-center  
            lg:text-4xl lg:w-[60%] lg:mx-auto
          "
          >
            Take control of your meal planning and nutrition journey
          </h2>
          <p className="text-sm text-center leading-[1.75em] md:w-[70%] md:mx-auto lg:text-base lg:w-[65%]">
            Take control of your meal planning and nutrition journey with our
            comprehensive Notion template, featuring effortless planning,
            customizable layouts, nutrition tracking, and seamless recipe
            integration.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-12">
            <div className="p-8 flex flex-col gap-y-5 bg-light rounded-xl lg:rounded-2xl lg:col-span-4 lg:gap-y-8">
              <div className="w-9 h-9 lg:w-12 lg:h-12">
                <Customize />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <h3 className="font-bold text-xl text-base-100 leading-[1.2em] lg:text-2xl">
                  Customizable prompts
                </h3>
                <p className="lg:text-lg ">
                  Tailor your prompts to achieve what you need
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-y-5 bg-light rounded-xl lg:rounded-2xl lg:col-span-8 lg:gap-y-8">
              <div className="w-9 h-9 lg:w-12 lg:h-12">
                <Calculator />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <h3 className="font-bold text-xl text-base-100 leading-[1.2em] lg:text-2xl">
                  Nutrition Tracking
                </h3>
                <p className="lg:text-lg lg:w-[90%]">
                  Explain how your template allows users to track their
                  nutritional intake, monitor calorie counts, and maintain a
                  balanced diet effortlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-12 lg:gap-y-8">
            <div className="p-8 flex flex-col gap-y-5 bg-light rounded-xl lg:rounded-2xl lg:col-span-8">
              <div className="w-9 h-9 lg:w-12 lg:h-12">
                <Carrot />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <h3 className="font-bold text-xl text-base-100 leading-[1.2em] lg:text-2xl">
                  Receipe Integration
                </h3>
                <p className="lg:text-lg lg:w-[90%]">
                  Mention that users can access a vast collection of recipes or
                  import their own, making meal planning even more convenient.
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-y-5 text-white rounded-xl lg:rounded-2xl bg-base-100 lg:col-span-4">
              <h3 className="font-bold text-xl text-white leading-[1.2em] lg:text-2xl">
                10+ Pages
              </h3>

              <div className="flex flex-col gap-y-[10px] lg:gap-y-[20px]">
                <p className="lg:text-lg ">
                  To customise and make this template your own.
                </p>
                <button className="bg-yellow w-fit font-bold text-base-100 px-5 py-2 rounded-lg lg:px-9">
                  {" "}
                  Get started →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MoreFeatures;
