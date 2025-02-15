import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'; 
import RelatedProduct from '../components//layout/RelatedProduct';

const Product = () => {
  const { productId } = useParams();  // Lấy productId từ URL
  const { products, currency, addToCart } = useContext(ShopContext); // Lấy context
  
  const [productData, setProductData] = useState(null); // Khởi tạo với giá trị null
  const [image, setImage] = useState('');  // Lưu trữ hình ảnh sản phẩm
  const [size, setSize] = useState('');  // Lưu trữ size đã chọn

  // Hàm tìm sản phẩm từ productId
  const fetchProductData = () => {
    const foundProduct = products.find(item => item._id === productId);  // Tìm sản phẩm bằng find thay vì map
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);  // Set hình ảnh đầu tiên
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();  // Gọi hàm tìm dữ liệu sản phẩm khi products thay đổi
    }
  }, [products, productId]);  // Chạy lại khi products hoặc productId thay đổi

  // Hàm định dạng giá tiền
  const formatCurrency = (amount) => {
    return (amount * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' VND'; // Định dạng giá
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product image and info */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)} 
                src={item} 
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`product-image-${index}`}  // Thêm alt cho hình ảnh
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="product-main" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="star-icon" className="w-3.5" />
            <p className="pl-2">{122}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{formatCurrency(productData.price)}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Chọn size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            THÊM VÀO GIỎ HÀNG
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Sản phẩm chính hãng 100%</p>
            <p>Thanh toán khi nhận hàng </p>
            <p>Chính sách đổi trả dễ dàng trong vòng 7 ngày</p>
          </div>
        </div>
      </div>

      {/* description and review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Mô tả</b>
          <b className="border px-5 py-3 text-sm">Đánh giá(122)</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Sản phẩm này được làm từ chất liệu cao cấp, đảm bảo độ bền và sự thoải mái khi sử dụng.</p>
          <p>Chất lượng hoàn hảo, thiết kế thời trang và phù hợp với nhiều phong cách khác nhau, dễ dàng phối hợp với nhiều trang phục.</p>
        </div>
      </div>

      {/* display related products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>  // Nếu chưa có dữ liệu sản phẩm, hiển thị màn hình trống
  );
};

export default Product;
