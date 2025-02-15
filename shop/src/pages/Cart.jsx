import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/layout/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/cart/CartTotal';

const Cart = () => {
  const { products, cartItems, updateQuantity } = useContext(ShopContext);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14 px-6'>
      <div className='text-2xl mb-3'>
        <Title text1={'GIỎ HÀNG'} text2={'CỦA TÔI'} />
      </div>

      <div className='bg-gray-100 rounded-lg shadow-md p-6'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-gray-700 text-white text-sm'>
              <th className='p-3'>Sản phẩm</th>
              <th className='p-3'>Giá</th>
              <th className='p-3'>Số lượng</th>
              <th className='p-3'>Vận chuyển</th>
              <th className='p-3'>Tổng</th>
              <th className='p-3'>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              return (
                productData && (
                  <tr key={index} className='border-b hover:bg-gray-50'>
                    <td className='flex items-center gap-4 p-3'>
                      <img src={productData.image[0]} alt='' className='w-16 rounded' />
                      <div>
                        <p className='text-sm font-medium'>{productData.name}</p>
                        <p className='text-xs text-gray-500'>Màu: {productData.color} | Size: {item.size}</p>
                      </div>
                    </td>
                    <td className='p-3'>{productData.price}.000 VND</td>
                    <td className='p-3 flex items-center gap-2'>
                      <button className='px-2 py-1 border bg-gray-200' onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}>-</button>
                      <input className='w-10 text-center border' type='number' min='1' value={item.quantity} readOnly />
                      <button className='px-2 py-1 border bg-gray-200' onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}>+</button>
                    </td>
                    <td className='p-3 text-green-500'>{productData.shipping ? 'FREE' : '10.000 VND'}</td>
                    <td className='p-3 font-semibold'>{productData.price * item.quantity}.000 VND</td>
                    <td className='p-3'>
                      <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-5 cursor-pointer' src={assets.bin_icon} alt='' />
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='flex justify-end my-10'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button 
              onClick={() => navigate('/place-order')} 
              className='bg-teal-500 text-white text-sm my-8 px-8 py-3 rounded-md hover:bg-teal-600'
            >
              TIẾN HÀNH THANH TOÁN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
