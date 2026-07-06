import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ productos, onActualizarStock, onEliminarProducto }) {
  const [ordenamiento, setOrdenamiento] = useState("nombre");

  const productosOrdenados = [...productos].sort((a, b) => {
    switch (ordenamiento) {
      case "nombre":
        return a.nombre.localeCompare(b.nombre);
      case "precio-asc":
        return a.precio - b.precio;
      case "precio-desc":
        return b.precio - a.precio;
      case "stock-asc":
        return a.stock - b.stock;
      case "stock-desc":
        return b.stock - a.stock;
      default:
        return 0;
    }
  });

  if (productos.length === 0) {
    return (
      <section className="empty-state">
        <p>📭 No hay productos en el inventario. ¡Crea el primero!</p>
      </section>
    );
  }

  return (
    <>
      <div className="list-controls">
        <label htmlFor="sort">Ordenar por:</label>
        <select
          id="sort"
          value={ordenamiento}
          onChange={(e) => setOrdenamiento(e.target.value)}
        >
          <option value="nombre">📝 Nombre (A-Z)</option>
          <option value="precio-asc">💰 Precio (Menor)</option>
          <option value="precio-desc">💰 Precio (Mayor)</option>
          <option value="stock-asc">📦 Stock (Menor)</option>
          <option value="stock-desc">📦 Stock (Mayor)</option>
        </select>
      </div>

      <section className="list">
        {productosOrdenados.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onActualizarStock={onActualizarStock}
            onEliminarProducto={onEliminarProducto}
          />
        ))}
      </section>
    </>
  );
}

export default ProductList;
