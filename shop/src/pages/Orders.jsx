import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/layout/Title';

const Orders = () => {
  const { orders } = useContext(ShopContext); // Lấy danh sách đơn hàng từ context

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'ĐƠN HÀNG'} text2={'CỦA TÔI'} />
      </div>

      <div>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700'>
              <h3 className='text-lg font-medium'>Mã đơn: {order.id} - {order.date}</h3>
              <p className='text-gray-500'>Phương thức thanh toán: {order.method}</p>
              <p className='text-gray-700 font-bold mt-2'>Tổng tiền: {order.totalAmount.toLocaleString('vi-VN')} VND</p>

              {/* Danh sách sản phẩm trong đơn hàng */}
              {order.items.map((item, idx) => (
                <div key={idx} className='flex items-center gap-4 mt-4'>
                  <img className='w-16 sm:w-20' src={item.image} alt={item.name} />
                  <div>
                    <p className='text-base font-medium'>{item.name}</p>
                    <p className='text-sm text-gray-600'>Số lượng: {item.quantity}</p>
                    <p className='text-sm text-gray-600'>Giá: {item.price.toLocaleString('vi-VN')} VND</p>
                  </div>
                </div>
              ))}

              {/* Trạng thái đơn hàng */}
              <div className='md:w-1/2 flex justify-between items-center gap-4 mt-4'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Bắt đầu vận chuyển</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>
                  Theo dõi đơn hàng
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>Không có đơn hàng nào.</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
