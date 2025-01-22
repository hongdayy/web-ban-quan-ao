import React from 'react';

const NewsletterBox = () => {

  const onsubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Đăng ký ngay để được giảm 20% khi mua hàng</p>
      <p className='text-gray-400 mt-3'>
        Hãy là người đầu tiên nhận thông báo về các mẫu thời trang mới nhất và ưu đãi đặc biệt từ cửa hàng của chúng tôi.
      </p>
      <form onSubmit={onsubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Nhập email' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Đăng ký</button>
      </form>
    </div>
  );
};

export default NewsletterBox;
