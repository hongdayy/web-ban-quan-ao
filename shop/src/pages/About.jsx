import React from 'react';
import Title from '../components/layout/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'VỀ'} text2={'CHÚNG TÔI'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        {/* Hình ảnh giới thiệu */}
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="Về chúng tôi" />

        {/* Nội dung giới thiệu */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Chúng tôi là một thương hiệu thời trang cam kết mang đến cho bạn những sản phẩm chất lượng cao, 
            với phong cách hiện đại và tinh tế. Mỗi sản phẩm của chúng tôi đều được lựa chọn kỹ lưỡng nhằm đảm bảo sự hài lòng tối đa cho khách hàng.
          </p>
          <p>
            Từ những thiết kế thời thượng đến các chi tiết nhỏ nhất, chúng tôi đặt hết tâm huyết vào việc 
            sáng tạo để mang lại trải nghiệm mua sắm tuyệt vời và giúp bạn tự tin tỏa sáng trong phong cách riêng của mình.
          </p>
          <b className='text-gray-800'>Sứ mệnh của chúng tôi</b>
          <p>
           Sứ mệnh của Forever là mang đến cho bạn những xu hướng thời trang hiện đại, tinh tế và phù hợp với mọi phong cách, giúp bạn tự tin thể hiện cá tính của mình.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'LÍ DO'} text2={'LỰA CHỌN CHÚNG TÔI'}/>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Đảm bảo số lượng:</b>
          <p>Chúng tôi cam kết luôn có sẵn sản phẩm với số lượng đầy đủ, đảm bảo khách hàng có thể mua sắm bất cứ lúc nào mà không lo tình trạng hết hàng.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Đảm bảo số lượng:</b>
          <p>Trải nghiệm mua sắm dễ dàng với giao diện website thân thiện, giúp bạn tìm kiếm và đặt hàng nhanh chóng. Chúng tôi cung cấp nhiều phương thức thanh toán linh hoạt và dịch vụ giao hàng nhanh để bạn nhận sản phẩm trong thời gian ngắn nhất.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Đảm bảo số lượng:</b>
          <p>Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ tận tình, giải đáp mọi thắc mắc và xử lý vấn đề một cách nhanh chóng. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu, mang đến trải nghiệm mua sắm tốt nhất.</p>
        </div>

      </div>

      </div>

     

      
    </div>

    
  );
};

export default About;
