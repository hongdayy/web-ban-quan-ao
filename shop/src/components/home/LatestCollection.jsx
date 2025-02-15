import React, { useContext, useRef, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../layout/Title";
import ProductItem from "../layout/ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const scrollContainerRef = useRef(null);

  // Lấy danh sách 10 sản phẩm mới nhất
  const latestProducts = products.slice(0, 10);

  // Tự động cuộn liên tục
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    let scrollAmount = 1; // Tốc độ cuộn
    let isScrolling = true;

    const scrollContinuous = () => {
      if (!isScrolling) return;
      scrollContainer.scrollLeft += scrollAmount;

      // Nếu đã cuộn hết, quay lại đầu
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }

      requestAnimationFrame(scrollContinuous);
    };

    scrollContinuous();

    return () => {
      isScrolling = false; // Dừng khi component bị unmount
    };
  }, []);

  // Hàm xử lý nút cuộn trái/phải
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="my-10 relative">
      <div className="text-center py-8 text-3xl">
        <Title text1="BỘ SƯU TẬP" text2="MỚI NHẤT" />
        <p className="text-gray-600 w-3/4 mx-auto text-sm sm:text-sm md:text-base">
          Khám phá bộ sưu tập thời trang mới nhất với thiết kế độc đáo, phong cách hiện đại và chất liệu cao cấp, mang đến vẻ đẹp tự tin và đẳng cấp cho bạn.
        </p>
      </div>

      {/* Thanh cuộn sản phẩm */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-hidden p-4 scroll-smooth"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {/* Nhân đôi danh sách để tạo hiệu ứng vòng lặp */}
          {[...latestProducts, ...latestProducts].map((item, index) => (
            <div key={index} className="w-1/4 flex-shrink-0">
              <ProductItem
                id={item._id}
                name={item.name}
                image={item.image}
                price={`${(item.price * 1000).toLocaleString("vi-VN")} VND`}
              />
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default LatestCollection;
