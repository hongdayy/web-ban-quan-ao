import React from 'react'
import { assets } from '../../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
            <p className='font-semibold'>Chính sách đổi hàng dễ dàng</p>
            <p className='text-gray-400'>Chúng tôi cung cấp chính sách đổi hàng không phiền phức, giúp bạn dễ dàng thay đổi sản phẩm nếu không hài lòng.</p>
        </div>

        <div>
            <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
            <p className='font-semibold'>Miễn phí giao hàng</p>
            <p className='text-gray-400'>Chúng tôi cung cấp dịch vụ giao hàng miễn phí cho mọi đơn hàng trên toàn quốc.</p>
        </div>

        <div>
            <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
            <p className='font-semibold'>Hỗ trợ khách hàng</p>
            <p className='text-gray-400'>Chúng tôi luôn lắng nghe và hỗ trợ khách hàng 24/7</p>
        </div>
    </div>
  )
}

export default OurPolicy
