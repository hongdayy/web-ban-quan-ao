import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Chúng tôi tự hào mang đến những mẫu thời trang độc đáo, hiện đại và phù hợp với xu hướng. Mua sắm ngay hôm nay để trải nghiệm phong cách và chất lượng vượt trội.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Công ty</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Trang chủ</li>
            <li>Về chúng tôi</li>
            <li>Vận chuyển</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Liên lạc</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>0123-456-789</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr/>
        <p className='py-5 text-sm text-center '>Copyright2024@ forever.com</p>
      </div>
    </div>
  );
};

export default Footer;
