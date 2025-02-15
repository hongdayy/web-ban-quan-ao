import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../layout/Title';
import ProductItem from '../layout/ProductItem';

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Lọc sản phẩm dựa trên category và subCategory, lấy tối đa 5 sản phẩm
      const productsCopy = products
        .filter((item) => item.category === category && item.subCategory === subCategory)
        .slice(0, 5);

      // Cập nhật state với các sản phẩm liên quan
      setRelated(productsCopy);
    }
  }, [products, category, subCategory]); // Thêm category và subCategory vào dependency array

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={'SẢN PHẨM'} text2={'LIÊN QUAN'} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={`${item.price.toLocaleString()}.000 VND`} // Định dạng giá
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
