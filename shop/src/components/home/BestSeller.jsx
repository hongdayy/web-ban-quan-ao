import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ProductItem from '../layout/ProductItem'; 

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    // Lấy 5 sản phẩm đầu tiên
    setBestSeller(products.slice(0, 10));
  }, [products]);

  // Hàm định dạng giá tiền với thêm '000' và dấu '.'
  const formatPrice = (price) => {
    return `${(price * 1000).toLocaleString('vi-VN')} VND`;
  };

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <h2>BEST SELLER</h2>
        <p className='w-3/4 m-auto text-xs sm:text-sm mmd:text-base text-gray-600'>
          Khám phá những sản phẩm bán chạy nhất, tạo nên phong cách riêng biệt cho bạn. Đừng bỏ lỡ những thiết kế thời thượng!
        </p>
      </div>

      {/* Hiển thị 5 sản phẩm đầu tiên */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={formatPrice(item.price)}  // Đảm bảo cú pháp hợp lệ
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
