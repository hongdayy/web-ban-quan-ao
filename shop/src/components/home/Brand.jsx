import { brandsData } from "../../assets/assets";

const Brands = () => {
  return (
    <section className="py-10 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center text-white">
          <h3 className="text-2xl font-semibold">Ưu đãi thương hiệu hàng đầu</h3>
          <p className="text-xl mt-2">
            Giảm giá đến <span className="text-yellow-400 font-bold">60%</span> cho các thương hiệu.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {brandsData?.map((brand) => (
            <div
              key={brand.id}
              className="w-[178px] h-[80px] bg-white rounded-lg flex items-center justify-center p-4 shadow-md
                sm:w-[120px] sm:rounded-md sm:p-3
                xs:w-[80px] xs:h-[50px] xs:rounded-sm xs:p-2"
            >
              <img src={brand.imgSource} alt={brand.name} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
