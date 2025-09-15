import React from "react";
import { useCart } from "../context/CartContext";
import bg_cart from '../assets/bg_cart.png'
import { motion } from "framer-motion";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirmOrder = async () => {
    try {
      for (const item of cart) {
        // fetch current product quantity
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

        // update quantity in backend
        await fetch(
          `https://e-commerce-backend-63u5.onrender.com/api/products/${item.id}/quantity`,
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

      <div className="relative z-10 space-y-12 mt-18 w-full max-w-7xl" style={{ fontFamily: "VeneerClean, sans-serif" }}>
        <motion.div
          className="uppercase text-center px-2"
          style={{ fontFamily: "VeneerClean, sans-serif" }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl mt-2">
              Shopping Cart
          </h1>
          <h2 className="text-lg text-white/80 sm:text-xl md:text-2xl mt-12">Accueil / Shopping Cart</h2>
        </motion.div>

      </div>
    </section>

    <section className="w-[90%] md:w-[85%] m-auto ">
    {cart.length === 0 ? (
        <p className="text-gray-600">Votre panier est vide.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-gray-600">{item.price} $</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-16 border rounded text-center"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total: {total} $</h2>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              onClick={handleConfirmOrder}
            >
              Confirmer la commande
            </button>
          </div>
        </>
      )}
    </section>
    </main>
  );
};

export default CartPage;
