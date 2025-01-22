import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';


const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  // Lấy danh sách 10 sản phẩm mới nhất
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  // Hàm định dạng giá tiền với thêm 'a000' và dấu '.'
  const formatPrice = (price) => {
   
    return `${(price * 1000).toLocaleString('vi-VN')} VND`;
  };

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="BỘ SƯU TẬP" text2="MỚI NHẤT" />
        <p className="text-gray-600 w-3/4 mx-auto text-sm sm:text-sm md:text-base">
          Khám phá bộ sưu tập thời trang mới nhất với thiết kế độc đáo, phong cách hiện đại và chất liệu cao cấp, mang đến vẻ đẹp tự tin và đẳng cấp cho bạn.
        </p>
      </div>
      {/* Hiển thị danh sách sản phẩm mới */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={formatPrice(item.price)}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
