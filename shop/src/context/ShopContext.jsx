import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Thêm import useNavigate

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = 'đ';
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate(); // Sử dụng useNavigate

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error('Vui lòng chọn size');
      return;
    }

    const cartData = structuredClone(cartItems); // Tạo bản sao của giỏ hàng

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Tăng số lượng nếu đã tồn tại
      } else {
        cartData[itemId][size] = 1; // Tạo mới với số lượng 1
      }
    } else {
      cartData[itemId] = { [size]: 1 }; // Thêm sản phẩm mới với số lượng 1
    }

    setCartItems(cartData); // Cập nhật state
  };

  // Hàm tính tổng số lượng sản phẩm trong giỏ hàng
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      const sizes = cartItems[itemId];
      for (const size in sizes) {
        totalCount += sizes[size]; // Cộng dồn số lượng của từng size
      }
    }
    return totalCount;
  };

  // Hàm cập nhật số lượng sản phẩm
  const updateQuantity = (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);

    if (quantity > 0) {
      cartData[itemId][size] = quantity;
    } else {
      delete cartData[itemId][size]; // Xóa size nếu số lượng = 0
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId]; // Xóa sản phẩm nếu không còn size nào
      }
    }

    setCartItems(cartData);
  };

  // Hàm tính tổng số tiền trong giỏ hàng
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId); // Sửa "items" thành "itemId"

      if (!itemInfo) continue; // Bỏ qua nếu không tìm thấy sản phẩm

      for (const size in cartItems[itemId]) { // Lặp qua các size của sản phẩm
        try {
          if (cartItems[itemId][size] > 0) {
            totalAmount += itemInfo.price * cartItems[itemId][size]; // Tính tổng tiền
          }
        } catch (error) {
          console.error('Error calculating cart amount:', error); // Ghi lỗi nếu có
        }
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart, // Thêm hàm vào context
    getCartCount, // Thêm hàm getCartCount vào context
    updateQuantity,
    getCartAmount, // Thêm hàm getCartAmount vào context
    navigate // Truyền navigate vào context
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
