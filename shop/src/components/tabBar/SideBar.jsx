import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag, FaHeart, FaUser, FaSearch, FaRegWindowClose  } from 'react-icons/fa'; // Import icons từ react-icons
import { assets } from "../../assets/assets";


const Sidebar = ({ visible, setVisible }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setVisible(false)}
    >
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-5 transition-transform ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-gray-600"
        >
           <FaRegWindowClose size={24} />{/* Close icon */}
        </button>

        {/* Menu Items */}
        <img className='w-36' src={assets.logo} alt="" />
        <nav className="mt-8 flex flex-col gap-7 border-t border-t-gray-400 pt-10">
           
          <Link to="/" className="flex items-center gap-2 text-gray-700">
            <FaHome size={20} />
           

            Trang chủ
          </Link>
          <Link to="/collection" className="flex items-center gap-2 text-gray-700">
            <FaShoppingBag size={20} />
            Bộ sưu tập
          </Link>
          <Link to="/wishlist" className="flex items-center gap-2 text-gray-700">
            <FaHeart size={20} />
            Yêu thích
          </Link>
          <Link to="/user" className="flex items-center gap-2 text-gray-700">
            <FaUser size={20} />
            Hồ sơ
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
