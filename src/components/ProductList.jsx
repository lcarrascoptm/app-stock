import ProductCard from "./ProductCard";

function ProductList({ productos, onActualizarStock, onEliminarProducto }) {
  if (productos.length === 0) {
    return (
      <section className="empty-state">
        <p>No hay productos que coincidan con la búsqueda.</p>
      </section>
    );
  }

  return (
    <section className="list">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          onActualizarStock={onActualizarStock}
          onEliminarProducto={onEliminarProducto}
        />
      ))}
    </section>
  );
}

export default ProductList;
