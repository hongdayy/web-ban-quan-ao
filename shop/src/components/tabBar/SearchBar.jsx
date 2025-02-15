import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { assets } from "../../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]); // Thêm showSearch vào mảng dependencies để theo dõi sự thay đổi của nó

  return (
    showSearch && visible && (
      <div className="border-t border-b bg-gray-50 text-center">
        {/* Ô tìm kiếm */}
        <div className="inline-flex items-center justify-center border border-gray-600 px-5 py-2 my-5 mx-3 rounded-full w-2/4 sm:w-1/2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Cập nhật giá trị tìm kiếm
            className="flex-1 outline-none bg-inherit text-sm"
            type="text"
            placeholder="Tìm kiếm..."
          />
          <img className="w-4" src={assets.search_icon} alt="Search Icon" />
        </div>
  
        {/* Nút đóng, đóng search bar */}
        <img
          onClick={() => {
            setShowSearch(false); // Đóng khi nhấn nút đóng
            setVisible(false); // Đảm bảo search bar không còn hiển thị sau khi đóng
          }}
          className="inline w-3 cursor-pointer"
          src={assets.cross_icon}
          alt="Close Icon"
        />
      </div>
    )
  );
};

export default SearchBar;
