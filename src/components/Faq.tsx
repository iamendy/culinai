const Faq = () => {
  return (
    <section className="py-12 px-6 lg:py-16 lg:px-8">
      <div className="flex flex-col space-y-12 lg:space-y-16">
        <div className="flex flex-col gap-y-4">
          <h3 className="tracking-[0.25em] leading-[1.7em] text-center">FAQ</h3>
          <h2
            className="text-[28px] text-base-100 font-bold tracking-normal leading-[1.2em] text-center  
            md:w-[80%] md:mx-auto lg:text-4xl lg:w-[60%] lg:mx-auto
          "
          >
            Here are the answers to the most frequently asked questions
          </h2>
        </div>

        <div className="md:w-[70%] md:mx-auto">
          <div className="flex flex-col space-y-2">
            <div className="bg-light flex flex-col p-4 rounded-lg ">
              <div className="flex justify-between items-center">
                <h3 className="font-bold p-2 md:text-lg">What is Notion?</h3>
                <span>+</span>
              </div>
              <div>
                <p className="p-2 hidden">
                  Notion is a versatile and user-friendly tool that helps you
                  organize and manage different kinds of information in one
                  place. It's like a digital notebook where you can write notes,
                  create to-do lists, plan projects, and even collaborate with
                  others. It's a great way to keep everything important in your
                  life organized and easily accessible.
                </p>
              </div>
            </div>

            <div className="bg-light flex flex-col p-4 rounded-lg ">
              <div className="flex justify-between items-center">
                <h3 className="font-bold p-2 md:text-lg">What is Notion?</h3>
                <span>+</span>
              </div>
              <div>
                <p className="p-2 hidden">
                  Notion is a versatile and user-friendly tool that helps you
                  organize and manage different kinds of information in one
                  place. It's like a digital notebook where you can write notes,
                  create to-do lists, plan projects, and even collaborate with
                  others. It's a great way to keep everything important in your
                  life organized and easily accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
