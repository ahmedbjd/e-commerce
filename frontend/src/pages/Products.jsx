import React, { useEffect, useState } from "react";
import cart_logo from '../assets/ion_cart_red.png'
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://e-commerce-backend-63u5.onrender.com/api/products");
        const data = await res.json();

        if (data.status) {
          setProducts(data.data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="w-[90%] md:w-[85%] m-auto my-14">
      <div
        className="font-bold text-center"
        style={{ fontFamily: "VeneerClean, sans-serif" }}
      >
        <h2 className="text-[#E1000F] text-2xl">Produits</h2>
        <h1 className="text-black text-4xl">Nos Produits</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl p-4 flex flex-col "
          >
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-[300px] object-cover rounded-xl mb-4"
            />

            <div className="font-bold text-3xl flex justify-between text-[#1C1C1C]" style={{ fontFamily: "VeneerClean, sans-serif" }}>
                <h3>{product.name}</h3>
                <h3>{product.price} $</h3>
            </div>
            <p className="text-black/60 text-xl text-center mt-6 font-semibold">{product.description}</p>

            <button
              className="mt-4 text-[#E1000F] font-bold flex mx-auto gap-4 border border-[#E1000F] text-2xl px-8 py-2 rounded-md hover:bg-[#E1000F]/50 hover:cursor-pointer transition"
              onClick={() => addToCart(product)}
            >
              <img src={cart_logo} alt='logo' />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
