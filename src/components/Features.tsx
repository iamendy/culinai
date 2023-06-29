import Image from "next/image";
import planning from "../../public/img/planning.webp";
import shopping from "../../public/img/shopping.webp";

const Features = () => {
  return (
    <section className="py-12 px-6 lg:py-16 lg:px-8">
      <div className="flex flex-col space-y-12 ">
        <div className="flex flex-col gap-y-4">
          <h3 className="tracking-[0.25em] leading-[1.7em] text-center">
            FEATURES
          </h3>
          <h2
            className="text-[28px] text-base-100 font-bold tracking-normal leading-[1.2em] text-center  
            lg:text-4xl
          "
          >
            Streamline your meal planning process
          </h2>
          <p className="text-sm text-center leading-[1.75em] md:w-[70%] md:mx-auto lg:text-base lg:w-[65%]">
            Streamline your meal planning process and ensure you never miss an
            ingredient with our Notion template, offering effortless planning
            and automatic generation of comprehensive grocery lists.
          </p>
        </div>

        <div className="flex flex-col gap-y-4 md:flex-row md:space-x-9 justify-center max-w-[1080px] mx-auto">
          <div className="p-4 bg-light flex flex-col gap-y-10 rounded-[16px] lg:p-8">
            <div>
              <Image src={planning} alt="meal planning" />
            </div>
            <div className="flex flex-col gap-y-4">
              <h4 className="text-base-100 text-xl font-bold leading-[1.2em] lg:24px lg:leading-[1.4em]">
                {" "}
                Effortless Planning
              </h4>
              <p className="lg:text-lg lg:leading-[1.75em]">
                Streamline your meal planning process with our Notion template,
                designed to be intuitive and user-friendly. With its
                drag-and-drop functionality, you can easily organise your meals
                for the week.
              </p>
            </div>
          </div>

          <div className="p-4 bg-light flex flex-col gap-y-10 rounded-[16px] lg:p-8">
            <div className="">
              <Image src={shopping} alt="meal planning" />
            </div>
            <div className="flex flex-col gap-y-4">
              <h4 className="text-base-100 text-xl font-bold leading-[1.2em] lg:24px lg:leading-[1.4em]">
                {" "}
                Effortless Planning
              </h4>
              <p className="lg:text-lg lg:leading-[1.75em]">
                Streamline your meal planning process with our Notion template,
                designed to be intuitive and user-friendly. With its
                drag-and-drop functionality, you can easily organise your meals
                for the week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
