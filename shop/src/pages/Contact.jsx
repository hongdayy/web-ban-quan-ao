import React from "react";
import Title from "../components/layout/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-12">
      {/* Tiêu đề */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        <Title text1={"LIÊN LẠC"} text2={"VỚI CHÚNG TÔI"} />
      </h2>

      {/* Nội dung chính */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Hình ảnh */}
        <div>
          <img
            src={assets.contact_img}
            alt=""
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h3 className="text-lg font-semibold">Cửa Hàng Của Chúng Tôi</h3>
          <p className="text-gray-600">Tây Hồ, Hà Nội</p>
          <p className="text-gray-600">Đá Hoa, An Dương, Yên Phụ, Tây Hồ, Hà Nội</p>
          <p className="mt-2">
            <span className="font-medium">Điện thoại:</span> (+84) 555-0132
          </p>
          <p>
            <span className="font-medium">Email:</span> admin@forever.com
          </p>

          {/* Tuyển dụng */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">
              Cơ Hội Nghề Nghiệp Tại Forever
            </h3>
            <p className="text-gray-600">
              Tìm hiểu thêm về đội ngũ của chúng tôi và các cơ hội việc làm.
            </p>
            <button className="mt-3 border border-black px-4 py-2 text-black hover:bg-black hover:text-white transition">
              Khám Phá Việc Làm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
