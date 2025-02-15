import React, { createContext, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = 'đ';
  const delivery_fee = 10;
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]); // Không lưu vào localStorage

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error('Vui lòng chọn size');
      return;
    }

    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: (prev[itemId]?.[size] || 0) + 1,
      },
    }));
  };

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((prev) => {
      const newCart = { ...prev };

      if (quantity > 0) {
        newCart[itemId][size] = quantity;
      } else {
        delete newCart[itemId][size];
        if (Object.keys(newCart[itemId]).length === 0) {
          delete newCart[itemId];
        }
      }

      return newCart;
    });
  };

  // Đặt hàng và cập nhật danh sách đơn hàng
  const placeOrder = (method) => {
    if (Object.keys(cartItems).length === 0) {
      toast.error('Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi đặt hàng.');
      return;
    }

    const orderItems = Object.keys(cartItems).map((itemId) => {
      const product = products.find((p) => p._id === itemId);
      return {
        id: itemId,
        name: product?.name || "Sản phẩm không xác định",
        image: product?.image || "/default-image.jpg",
        quantity: Object.values(cartItems[itemId]).reduce((a, b) => a + b, 0),
        price: product?.price || 0,
      };
    });

    const newOrder = {
      id: new Date().getTime(),
      items: orderItems,
      method,
      date: new Date().toLocaleDateString('vi-VN'),
      totalAmount: orderItems.reduce((total, item) => total + item.price * item.quantity, 0),
    };

    setOrders((prev) => [...prev, newOrder]);
    navigate('/orders');
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, sizes) => total + Object.values(sizes).reduce((a, b) => a + b, 0),
      0
    );
  };

  const getCartAmount = () => {
    return Object.keys(cartItems).reduce((totalAmount, itemId) => {
      const itemInfo = products.find((product) => product._id === itemId);
      if (!itemInfo) return totalAmount;

      return totalAmount + Object.keys(cartItems[itemId]).reduce(
        (subtotal, size) => subtotal + itemInfo.price * cartItems[itemId][size],
        0
      );
    }, 0);
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
    addToCart,
    updateQuantity,
    getCartCount,
    getCartAmount,
    placeOrder,
    orders,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
