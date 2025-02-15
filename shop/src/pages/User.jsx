import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/Firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);
  const [contact, setContact] = useState({ phone: "", address: "" });
  const navigate = useNavigate();

  // Lấy thông tin người dùng từ Firebase Auth
  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        });

        // Lấy số điện thoại và địa chỉ từ Firestore
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setContact({
            phone: userDoc.data().phone || "Chưa có số điện thoại",
            address: userDoc.data().address || "Chưa có địa chỉ",
          });
        }
      }
    };
    fetchUserData();
  }, []);

  // Xử lý đăng xuất
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-5 flex gap-10">
      {/* Thanh bên */}
      <div className="w-1/4 bg-gray-50 p-5 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Xin chào {user?.name || "Người dùng"}</h2>
        <p className="text-gray-500 italic">Chào mừng đến với tài khoản của bạn.</p>
        <ul className="mt-5 space-y-3">
          <li className="text-gray-700 font-medium">Đơn hàng của tôi</li>
          <li className="text-gray-700 font-medium">Danh sách yêu thích</li>
          <li className="bg-gray-200 p-2 rounded-md font-medium">Tài khoản của tôi</li>
          <li className="text-red-500 cursor-pointer" onClick={handleLogout}>Đăng xuất</li>
        </ul>
      </div>

      {/* Nội dung chính của hồ sơ */}
      <div className="w-3/4">
        <h2 className="text-2xl font-semibold">Tài khoản của tôi</h2>
        <div className="mt-5 bg-white p-5 rounded-md shadow-md">
          <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <p className="text-gray-500">Họ và tên</p>
              <p className="font-medium">{user?.name || "Đang cập nhật..."}</p>
            </div>
            <div>
              <p className="text-gray-500">Địa chỉ email</p>
              <p className="font-medium">{user?.email || "Đang cập nhật..."}</p>
            </div>
            <div>
              <p className="text-gray-500">Số điện thoại</p>
              <p className="font-medium">{contact.phone}</p>
            </div>
            <div>
              <p className="text-gray-500">Mật khẩu</p>
              <p className="font-medium">********</p>
            </div>
          </div>
        </div>

        {/* Địa chỉ liên hệ */}
        <div className="mt-5 bg-white p-5 rounded-md shadow-md">
          <h3 className="text-lg font-semibold">Địa chỉ liên hệ của tôi</h3>
          <button className="mt-3 px-4 py-2 bg-teal-500 text-white rounded-md">Thêm địa chỉ</button>
          <div className="mt-4 p-3 border rounded-md">
            <p className="font-medium">{user?.name || "Người dùng"}</p>
            <p className="text-gray-500">{contact.address}</p>
            <div className="mt-2 flex gap-3">
              <button className="text-gray-600">Xóa</button>
              <button className="text-gray-600">Chỉnh sửa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
