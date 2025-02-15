import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { NavLink, Link, useNavigate } from "react-router-dom"; 
import { ShopContext } from "../../context/ShopContext";
import { auth, onAuthStateChanged, signOut } from "../../firebase/Firebase";
import Sidebar from "./SideBar";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Lỗi đăng xuất:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between py-5 font-medium relative">
        <Sidebar visible={visible} setVisible={setVisible} />

        <div className="flex items-center gap-4">
          <button onClick={() => setVisible(true)} className="w-6 h-6 cursor-pointer">
            <FiMenu size={24} />
          </button>
          <Link to="/">
            <img src={assets.logo} className="w-36" alt="Logo" />
          </Link>
        </div>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Trang chủ</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>Bộ sưu tập</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>Về chúng tôi</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Liên lạc</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <FiSearch size={20} className="cursor-pointer" onClick={() => setShowSearch(true)} />
          <Link to="/cart" className="relative">
            <FiShoppingCart size={20} />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          <div className="group relative">
            {user && user.photoURL && (
              <Link to="/user">
                <img className="w-8 h-8 rounded-full cursor-pointer" src={user.photoURL} alt="Google Avatar" />
              </Link>
            )}
            {user && (
              <div className="group-hover:block hidden absolute right-0 pt-4 z-10">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <Link to="/user" className="cursor-pointer hover:text-black">Hồ sơ</Link>
                  <Link to='/orders' className="cursor-pointer hover:text-black">Đơn hàng</Link>
                  <p className="cursor-pointer hover:text-black" onClick={handleLogout}>Đăng xuất</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
