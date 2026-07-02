function ProductCard({ producto, onActualizarStock, onEliminarProducto }) {
  return (
    <div className={`card ${producto.stock === 0 ? "out-of-stock" : ""}`}>
      <div className="card-header">
        <h3>{producto.nombre}</h3>
        <span className="tag">{producto.categoria}</span>
      </div>
      <div className="card-body">
        <p>
          <strong>Stock:</strong> {producto.stock}
        </p>
        <p>
          <strong>Precio:</strong> ${producto.precio.toLocaleString()}
        </p>
      </div>
      <div className="card-actions">
        <button
          type="button"
          className="secondary-btn"
          onClick={() => onActualizarStock(producto.id, 1)}
        >
          +
        </button>
        <button
          type="button"
          className="secondary-btn"
          disabled={producto.stock === 0}
          onClick={() => onActualizarStock(producto.id, -1)}
        >
          -
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => onEliminarProducto(producto.id)}
        >
          Eliminar
        </button>
      </div>
      {producto.stock === 0 && <div className="stock-badge">Agotado</div>}
    </div>
  );
}

export default ProductCard;
