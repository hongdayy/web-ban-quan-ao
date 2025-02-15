import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // Thêm signOut

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB7NXz8Yj1TmynUnFfcIadUJKH6yoUKAic",
  authDomain: "shop-thoi-trang-e7c1e.firebaseapp.com",
  projectId: "shop-thoi-trang-e7c1e",
  storageBucket: "shop-thoi-trang-e7c1e.appspot.com", // Sửa storageBucket bị sai
  messagingSenderId: "39286564572",
  appId: "1:39286564572:web:66fcf32db238c8502ab619"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged, signOut }; // Xuất signOut
