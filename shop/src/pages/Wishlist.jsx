import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'; // Import icon thùng rác từ react-icons

const Wishlist = () => {
  const { wishlistItems, products, toggleWishlist } = useContext(ShopContext);

  const wishlistProducts = products.filter((product) =>
    wishlistItems.includes(product._id)
  );

  const removeFromWishlist = (productId) => {
    toggleWishlist(productId); // Gọi toggleWishlist để xóa sản phẩm khỏi wishlist
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Danh sách yêu thích</h2>
      {wishlistProducts.length === 0 ? (
        <p>Bạn chưa thêm sản phẩm nào vào danh sách yêu thích.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {wishlistProducts.map((product) => (
            <div key={product._id} className="border p-3 rounded-lg relative">
              <Link to={`/product/${product._id}`}>
                <img src={product.image[0]} alt={product.name} className="mb-2" />
                <p className="text-sm">{product.name}</p>
                <p className="text-sm font-medium">{product.price} đ</p>
              </Link>
              {/* Thêm icon thùng rác */}
              <button
                onClick={() => removeFromWishlist(product._id)}
                className="absolute top-2 right-2 text-grey-200 hover:text-grey-300"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
