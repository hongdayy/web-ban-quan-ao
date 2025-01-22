import React from 'react';
import Title from '../components/Title';
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
          <p>
            Với đội ngũ chuyên nghiệp và tận tâm, chúng tôi luôn không ngừng cải thiện để đáp ứng nhu cầu ngày càng cao của khách hàng 
            và đồng hành cùng bạn trên hành trình tạo dựng phong cách sống đầy cảm hứng.
          </p>
        </div>
      </div>

     

      
    </div>

    
  );
};

export default About;
