import React, { useEffect, useState } from "react";

const API_URL = "https://e-commerce-backend-63u5.onrender.com/api/products";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    quantity: "",
    image_url: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.status) setProducts(data.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("type", form.type);
      formData.append("price", form.price);
      formData.append("quantity", form.quantity);
      if (form.imageFile) {
        formData.append("image", form.imageFile);
      }

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.status) {
        setForm({
          name: "",
          description: "",
          type: "",
          price: "",
          quantity: "",
          imageFile: null,
        });
        fetchProducts();
      }
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/${editingProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status) {
        setEditingProduct(null);
        setForm({
          name: "",
          description: "",
          type: "",
          price: "",
          quantity: "",
          image_url: "",
        });
        fetchProducts();
      }
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  const startEdit = (product) => {
    setEditingProduct(product);
    setForm(product);
  };

  return (
    <main className="w-[90%] md:w-[85%] m-auto my-14">
      <h1 className="text-3xl font-bold text-center mb-8">Admin - Manage Products</h1>

      <form
        onSubmit={editingProduct ? handleUpdate : handleAdd}
        className="bg-white p-6 rounded-lg shadow-md mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="Type"
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="p-2 border rounded"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, imageFile: e.target.files[0] })}
            className="p-2 border rounded"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-2 border rounded col-span-1 md:col-span-2"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={p.image_url}
              alt={p.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h3 className="font-bold text-lg">{p.name}</h3>
            <p className="text-gray-500">{p.description}</p>
            <p className="text-red-600 font-bold mt-2">{p.price} DA</p>
            <p className="text-blue-600 font-semibold">Quantity: {p.quantity}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => startEdit(p)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminProducts;
