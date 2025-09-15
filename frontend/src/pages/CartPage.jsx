import React from "react";
import { useCart } from "../context/CartContext";
import bg_cart from "../assets/bg_cart.png";
import { motion } from "framer-motion";
import { Plus, Minus, Trash2 } from "lucide-react";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 150 : 0;
  const total = subtotal + shipping;

  const handleConfirmOrder = async () => {
    try {
      for (const item of cart) {
        const res = await fetch(
          `https://e-commerce-backend-63u5.onrender.com/api/products/${item.id}`
        );
        const productData = await res.json();

        if (!productData.status) continue;

        const newQuantity = productData.data.quantity - item.quantity;
        if (newQuantity < 0) {
          alert(`Stock insuffisant pour ${item.name}`);
          return;
        }

        await fetch(
            `https://e-commerce-backend-63u5.onrender.com/api/${item.id}/quantity`,
            {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ quantity: newQuantity }),
            }
          );
          
      }

      alert("Commande confirmée ✅");
      clearCart();
    } catch (error) {
      console.error("Erreur lors de la confirmation:", error);
      alert("Erreur lors de la commande ❌");
    }
  };

  return (
    <main className="mb-14">
      <section
        className="relative min-h-[300px] bg-cover bg-center flex justify-center px-4"
        style={{ backgroundImage: `url(${bg_cart})` }}
      >
        <div className="absolute inset-0 bg-[#E1000F]/70"></div>
        <div
          className="relative z-10 space-y-12 mt-18 w-full max-w-7xl"
          style={{ fontFamily: "VeneerClean, sans-serif" }}
        >
          <motion.div
            className="uppercase text-center px-2"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl mt-2">
              Shopping Cart
            </h1>
            <h2 className="text-lg text-white/80 sm:text-xl md:text-2xl mt-12">
              Accueil / Shopping Cart
            </h2>
          </motion.div>
        </div>
      </section>

      <section className="w-[90%] md:w-[85%] m-auto flex flex-col lg:flex-row gap-8 mt-10">
        <div className="w-full lg:w-[75%]">
          {cart.length === 0 ? (
            <p className="text-gray-600 text-center text-xl py-10">
              Votre panier est vide.
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col xl:flex-row justify-between items-center gap-6">
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-[250px] h-[190px] rounded-xl object-cover"
                    />
                    <div className="flex flex-col justify-between text-center sm:text-left">
                      <h1
                        className="text-2xl text-[#1C1C1C] font-semibold"
                        style={{ fontFamily: "VeneerClean, sans-serif" }}
                      >
                        {item.name}
                      </h1>
                      <h2 className="text-lg text-[#1C1C1CCC]">{item.category || "Produit"}</h2>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xl flex items-center gap-2 justify-center text-[#E1000F] font-semibold border border-[#E1000F] rounded-md py-2 px-6 hover:bg-[#E1000F] hover:text-white transition"
                      >
                        <Trash2 size={20} /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <h2 className="text-xl text-[#1C1C1CB2]/70 mb-3">Quantity</h2>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                        }
                      >
                        <Minus className="hover:cursor-pointer" />
                      </button>
                      <div className="border border-[#1C1C1C99]/60 h-[40px] w-[40px] flex items-center justify-center">
                        <span className="text-[#1C1C1C] text-xl">
                          {item.quantity}
                        </span>
                      </div>
                      <button
                            onClick={() => {
                                if (item.quantity < item.maxStock) {
                                updateQuantity(item.id, item.quantity + 1);
                                } else {
                                alert(`Stock max atteint pour ${item.name} (max: ${item.maxStock})`);
                                }
                            }}
                            >
                            <Plus className="hover:cursor-pointer" />
                            </button>


                    </div>
                  </div>

                  <div className="text-center">
                    <h2 className="text-xl text-[#1C1C1CB2]/70 mb-3">Price</h2>
                    <p className="text-[#1C1C1C] text-xl font-semibold">
                      {item.price}$
                    </p>
                  </div>

                  <div className="text-center">
                    <h2 className="text-xl text-[#1C1C1CB2]/70 mb-3">Total</h2>
                    <p className="text-[#1C1C1C] text-xl font-semibold">
                      {item.price * item.quantity}$
                    </p>
                  </div>
                </div>
                <hr className="text-[#1C1C1C99]/60 w-full my-6" />
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="bg-black/5 font-semibold rounded-lg p-6 text-[#1C1C1C] max-md:w-[90%] max-xl:mx-auto w-[60%] xl:w-[25%]">
            <h1 className="text-2xl sm:text-3xl uppercase">Order Summary</h1>
            <hr className="text-[#1C1C1C99]/60 w-full my-6" />

            <div className="text-lg sm:text-xl flex justify-between">
              <p>Items ({cart.length})</p>
              <p>{subtotal}$</p>
            </div>

            <div className="my-6 text-lg sm:text-xl space-y-2">
              <h2>Shipping</h2>
              <select className="p-2 bg-white w-full border rounded">
                <option value="">Select Wilaya</option>
                <option value="Alger">Alger</option>
                <option value="Oran">Oran</option>
                <option value="Constantine">Constantine</option>
              </select>
            </div>

            <div className="text-lg sm:text-xl flex justify-between mb-4">
              <p>Delivery</p>
              <p>{shipping}$</p>
            </div>

            <div className="text-lg sm:text-xl flex justify-between">
              <p>Total</p>
              <p>{total}$</p>
            </div>

            <button
              onClick={handleConfirmOrder}
              className="text-white bg-[#1C1C1C] rounded-lg p-3 text-center text-xl w-full mt-6 hover:bg-[#333] hover:cursor-pointer"
            >
              Check out
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default CartPage;
