import { useState } from "react";
import { bannerData } from "../../assets/assets";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0); // Quản lý chỉ số của slide hiện tại

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + bannerData.length) % bannerData.length);
  };

  const dotSlide = (index) => {
    setSlideIndex(index);
  };

  // {
  //   id: "banner-1",
  //   topText: "Áo thun / Áo sơ mi",
  //   titleText: "Gói giá trị mùa hè",
  //   bottomText: "mát mẻ / màu sắc / thoải mái",
  //   buttonLink: "/",
  //   buttonText: "Mua ngay",
  //   imgSource: hero_img1,  // Đảm bảo đúng đường dẫn hình ảnh
  // // }
  return (
    <div className="relative pb-4">
      <div>
        {bannerData.map((item, index) => (
          <div
            key={item.id}
            className={`relative h-[716px] overflow-hidden ${index !== slideIndex ? "hidden" : ""}`}
          >
            {/* Ảnh banner */}
            <img 
              src={item.imgSource} 
              className="w-full h-full object-cover" 
              alt={item.titleText}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-0"></div>
            
            {/* Nội dung banner */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
              <p className="text-4xl font-bold">{item.topText}</p>
              <h2 className="text-6xl my-5 font-extrabold">{item.titleText}</h2>
              <p className="text-xl py-3 font-semibold uppercase">{item.bottomText}</p>
              <button
                className="bg-white text-black mt-5 py-2 px-6 rounded-lg text-xl cursor-pointer"
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots navigation */}
      <div className="flex absolute bottom-12 left-[45%]">
        {bannerData.map((dot, index) => (
          <div className="mr-4" key={dot.id}>
            <div
              className={`p-2 rounded-full cursor-pointer ${index === slideIndex ? "bg-green-300" : "bg-white"}`}
              onClick={() => dotSlide(index)}
            ></div>
          </div>
        ))}
      </div>
      
      {/* Next and Previous buttons */}
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={nextSlide}
        >
          &#9654;
        </button>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={prevSlide}
        >
          &#9664;
        </button>
      </div>
    </div>
  );
};

export default Hero;
