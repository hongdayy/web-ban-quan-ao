import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase/Firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [editingField, setEditingField] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setFormData({ name: user.displayName || "", phone: "" });
        fetchAddresses();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchAddresses = async () => {
    const querySnapshot = await getDocs(collection(db, "addresses"));
    const addressList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setAddresses(addressList);
  };

  const handleUpdate = async () => {
    if (user) {
      await updateProfile(user, { displayName: formData.name });
      setEditingField(null);
    }
  };

  const handleDeleteAddress = async (id) => {
    await deleteDoc(doc(db, "addresses", id));
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Tài khoản của tôi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <h2 className="text-xl font-semibold">Chi tiết liên hệ</h2>
          <div className="mt-2">
            <p>Tên: {editingField === "name" ? (<input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />) : (user?.displayName || "Chưa cập nhật")}</p>
            <button onClick={() => setEditingField("name")}>Thay đổi</button>
            {editingField === "name" && <button onClick={handleUpdate}>Lưu</button>}
          </div>
          <div className="mt-2">
            <p>Email: {user?.email}</p>
          </div>
          <div className="mt-2">
            <p>Mật khẩu: ****** <Link to="/change-password" className="text-blue-500">Thay đổi</Link></p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Địa chỉ của tôi</h2>
          <button className="bg-green-500 text-white px-4 py-2">Thêm địa chỉ</button>
          {addresses.map((address) => (
            <div key={address.id} className="border p-4 mt-2">
              <p>{address.name}</p>
              <p>{address.address}</p>
              <button onClick={() => handleDeleteAddress(address.id)} className="text-red-500">Xóa</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
