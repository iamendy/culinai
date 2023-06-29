import Star from "./Star";

const Testimonial = () => {
  return (
    <section className="py-12  lg:py-16 ">
      <div className="flex flex-col gap-y-9 ">
        <div className="px-6 flex flex-col gap-y-4">
          <h3 className="tracking-[0.25em] leading-[1.7em] text-center">
            TESTIMONIALS
          </h3>
          <h2
            className="text-[28px] text-base-100 font-bold tracking-normal leading-[1.2em] text-center  
            md:w-[50%] md:mx-auto lg:text-4xl 
          "
          >
            This is what our customers have to say about us
          </h2>
        </div>

        <div className="flex p-5 space-x-5 md:px-0 overflow-scroll">
          <div className="bg-light rounded-2xl p-8 flex flex-col space-y-5 text-sm">
            <h3 className="font-bold lg:text-[16px]">Sarah Joe</h3>
            <p className="leading-[1.75em] lg:text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              perspiciatis ipsa aliquam vitae labore a unde! Minima, voluptatum
              pariatur consequuntur voluptatibus.
            </p>
            <div className="flex items-center space-x-2">
              <Star />
              <Star />
              <Star />
            </div>
          </div>

          <div className="bg-light rounded-2xl p-8 flex flex-col space-y-5 text-sm ">
            <h3 className="font-bold lg:text-[16px]">John Deep</h3>
            <p className="leading-[1.75em] lg:text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              perspiciatis ipsa aliquam vitae labore a unde! Minima, voluptatum
              pariatur consequuntur voluptatibus.
            </p>
            <div className="flex items-center space-x-2">
              <Star />
              <Star />
              <Star />
            </div>
          </div>

          <div className="bg-light rounded-2xl p-8 flex flex-col space-y-5 text-sm lg:py-12 ">
            <h3 className="font-bold lg:text-[16px]">Brain Hugo</h3>
            <p className="leading-[1.75em] lg:text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              perspiciatis ipsa aliquam vitae labore a unde! Minima, voluptatum
              pariatur consequuntur voluptatibus.
            </p>
            <div className="flex items-center space-x-2">
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
