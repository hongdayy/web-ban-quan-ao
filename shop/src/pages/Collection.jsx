import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');


  // Hàm định dạng giá thành dạng 'x.xxx.xxx VND'
  const formatPrice = (price) => {
    return `${price.toLocaleString('vi-VN')} VND`;
  };

  // Hàm bật/tắt bộ lọc theo danh mục
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Hàm bật/tắt bộ lọc theo phân loại
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Hàm áp dụng bộ lọc
  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    // Lọc theo danh mục (category)
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Lọc theo phân loại (subCategory)
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    // Cập nhật danh sách sản phẩm sau khi lọc
    setFilterProducts(productsCopy);
  };

  const sortProduct = () =>{
    let fpCopy = filterProducts.slice();
    
    switch(sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

        default:
          applyFilter();
          break;
    }
  }


  useEffect(() => {
    // Lấy tất cả sản phẩm khi mới vào trang
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    // Áp dụng bộ lọc khi danh mục hoặc phân loại thay đổi
    applyFilter();
  }, [category, subCategory, search, showSearch]);


  useEffect(()=>{
    sortProduct();
  },[sortType])


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t">
      {/* Phần bộ lọc */}
      <div className="min-w-60">
        {/* Tiêu đề bộ lọc */}
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          BỘ LỌC
        </p>
        <img
          className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          src={assets.dropdown_icon}
          alt=""
        />

        {/* Bộ lọc theo danh mục */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Tùy chỉnh</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Men" onChange={toggleCategory} />
              Nam
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Women" onChange={toggleCategory} />
              Nữ
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Kids" onChange={toggleCategory} />
              Trẻ em
            </p>
          </div>
        </div>

        {/* Bộ lọc theo phân loại */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Tùy chỉnh</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Topwear" onChange={toggleSubCategory} />
              Đồ hè
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Bottomwear" onChange={toggleSubCategory} />
              Đồ thu
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Winterwear" onChange={toggleSubCategory} />
              Đồ đông
            </p>
          </div>
        </div>
      </div>

      {/* Phần danh sách sản phẩm */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="TẤT CẢ" text2="BỘ SƯU TẬP" />
          {/* Sắp xếp sản phẩm */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Liên quan nhất</option>
            <option value="low-high">Giá từ thấp đến cao</option>
            <option value="high-low">Giá từ cao đến thấp</option>
          </select>
        </div>

        {/* Hiển thị danh sách sản phẩm */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item.id}
              // Định dạng giá với dấu chấm và đơn vị VND
              price={formatPrice(item.price * 1000)}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
