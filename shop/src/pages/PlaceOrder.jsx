import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/layout/Title';
import CartTotal from '../components/cart/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { placeOrder } = useContext(ShopContext); // Sử dụng placeOrder từ context
  const navigate = useNavigate(); 

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* ---------left sidebar --------  */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'THÔNG TIN'} text2={'VẬN CHUYỂN'} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Họ' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Tên' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Nhập email' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Số điện thoại' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Tỉnh/ thành phố, Quận/ huyện' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Tên đường, Tòa nhà, Số nhà' />
        </div>
      </div>
      
      {/* --------- right sidebar --------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PHƯƠNG THỨC'} text2={'THANH TOÁN'} />

          {/* Lựa chọn phương thức thanh toán */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div 
              onClick={() => setMethod('stripe')} 
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>

            <div 
              onClick={() => setMethod('razorpay')} 
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>

            <div 
              onClick={() => setMethod('cod')} 
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>THANH TOÁN</p>
            </div>
          </div>

          {/* Nút đặt hàng */}
          <div className='w-full text-end mt-8'>
            <button 
              onClick={() => placeOrder(method)} 
              className='bg-black text-white px-16 py-3 text-sm'>
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
