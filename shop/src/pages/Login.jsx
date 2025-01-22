import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Đăng nhập');
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [users, setUsers] = useState([]); // Lưu danh sách người dùng đã đăng ký

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Hàm xử lý gửi form
  const onSubmitHandle = async (event) => {
    event.preventDefault();

    if (currentState === 'Đăng ký') {
      // Kiểm tra thông tin đầu vào
      if (!userInfo.username || !userInfo.email || !userInfo.password) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
      }

      // Lưu người dùng mới
      setUsers([...users, userInfo]);
      alert('Đăng ký thành công!');
      setUserInfo({ username: '', email: '', password: '' }); // Xóa form
      setCurrentState('Đăng nhập');
    } else if (currentState === 'Đăng nhập') {
      // Kiểm tra thông tin đăng nhập
      const userFound = users.find(
        (user) =>
          user.email === userInfo.email && user.password === userInfo.password
      );
      if (userFound) {
        alert(`Đăng nhập thành công! Xin chào ${userFound.username}`);
      } else {
        alert('Email hoặc mật khẩu không đúng!');
      }
    }
  };

  return (
    <form
      onSubmit={onSubmitHandle}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >
      {/* Tiêu đề */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* Input */}
      {currentState === 'Đăng ký' && (
        <input
          type='text'
          name='username'
          value={userInfo.username}
          onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-800 rounded'
          placeholder='Tên đăng nhập'
        />
      )}
      <input
        type='email'
        name='email'
        value={userInfo.email}
        onChange={handleChange}
        className='w-full px-3 py-2 border border-gray-800 rounded'
        placeholder='Địa chỉ email'
      />
      <input
        type='password'
        name='password'
        value={userInfo.password}
        onChange={handleChange}
        className='w-full px-3 py-2 border border-gray-800 rounded'
        placeholder='Mật khẩu'
      />

      {/* Điều hướng */}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Quên mật khẩu?</p>
        {currentState === 'Đăng nhập' ? (
          <p
            onClick={() => setCurrentState('Đăng ký')}
            className='cursor-pointer text-blue-500'
          >
            Tạo tài khoản
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Đăng nhập')}
            className='cursor-pointer text-blue-500'
          >
            Đăng nhập tại đây
          </p>
        )}
      </div>

      {/* Nút submit */}
      <button
        type='submit'
        className='bg-black text-white font-light px-8 py-2 mt-4'
      >
        {currentState === 'Đăng nhập' ? 'Đăng nhập' : 'Đăng ký'}
      </button>
    </form>
  );
};

export default Login;
