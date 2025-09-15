import React, { useEffect, useState } from "react";
import cart_logo from "../assets/ion_cart_red.png";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { addToCart } = useCart();

  const fetchProducts = async (pageNumber = 1) => {
    try {
      const res = await fetch(
        `https://e-commerce-backend-63u5.onrender.com/api/products?page=${pageNumber}`
      );
      const data = await res.json();

      if (data.status) {
        setProducts(data.data);
        setTotalPages(data.totalPages);
        setPage(data.page);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <main className="w-[90%] md:w-[85%] m-auto my-14">
      <div
        className="font-bold text-center"
        style={{ fontFamily: "VeneerClean, sans-serif" }}
      >
        <h2 className="text-[#E1000F] text-2xl max-sm:text-xl">Produits</h2>
        <h1 className="text-black text-4xl max-sm:text-2xl">Nos Produits</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {products.map((product) => (
          <div key={product.id} className="rounded-xl p-4 flex flex-col ">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full max-lg:w-[70%] max-lg:mx-auto max-sm:w-full h-[300px] object-cover rounded-xl mb-4"
            />

            <div
              className="font-bold text-3xl max-sm:text-xl flex justify-between text-[#1C1C1C]"
              style={{ fontFamily: "VeneerClean, sans-serif" }}
            >
              <h3>{product.name}</h3>
              <h3>{product.price} $</h3>
            </div>
            <p className="text-black/60 text-xl max-sm:text-lg text-center mt-6 font-semibold">
              {product.description}
            </p>

            <button
              className="mt-4 text-[#E1000F] font-bold flex mx-auto gap-4 border border-[#E1000F] text-2xl max-sm:text-xl px-8 py-2 rounded-md hover:bg-[#E1000F]/50 hover:cursor-pointer transition"
              onClick={() => addToCart(product)}
            >
              <img src={cart_logo} alt="logo" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded-md border ${
            page === 1
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-[#E1000F] border-[#E1000F] hover:bg-[#E1000F]/20"
          }`}
        >
          Previous
        </button>

        <span className="font-bold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded-md border ${
            page === totalPages
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-[#E1000F] border-[#E1000F] hover:bg-[#E1000F]/20"
          }`}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Products;
