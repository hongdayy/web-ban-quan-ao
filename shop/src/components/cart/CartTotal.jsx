import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Title from '../layout/Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'TỔNG TIỀN'} text2={'TRONG GIỎ HÀNG'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>TẠM TÍNH</p>
          <p>
            {getCartAmount()}.000 {currency}
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Phí vận chuyển</p>
          <p>
            {delivery_fee}.000 {currency}
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Tổng tiền</p>
          <p>
            {getCartAmount() === 0 ? '0.000' : `${getCartAmount() + delivery_fee}.000`} {currency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
