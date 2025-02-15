
import { featuredData } from "../../assets/assets";
import { Link } from "react-router-dom";

const Featured = () => {
    return (
      <section className="">
        <div className="max-w-[1320px] px-10  mx-auto w-full">
          <div className="grid grid-cols-2 gap-5  md:transform-none ">
            {featuredData?.map((featured) => {
              return (
                <div
                  className="relative  rounded-lg overflow-hidden  text-white"
                  key={featured.id}
                >
                  <img
                    className="object-cover w-full h-full   lg:object-[0px_90px]"
                    src={featured.imgSource}
                    alt="featured"
                  />
                  <div className="absolute  top-1/3 left-1/3 md:left-2  w-full h-full p-14 sm:p-0">
                    <p className="mb-6 text-xl font-semibold">
                      {featured.topText}
                    </p>
                    <h3 className="text-[30px] font-bold leading-tight">
                      {featured.largeText}
                    </h3>
                    <p className="mt-2 mb-8 font-light italic uppercase">
                      {featured.bottomText}
                    </p>
                    <Link
                      to={featured.buttonLink}
                      className="relative font-extrabold text-white text-xl after:absolute after:left-0 after:top-full after:h-px after:w-full after:bg-white"
                    >
                      {featured.buttonText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default Featured;