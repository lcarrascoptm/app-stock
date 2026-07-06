import { useState } from "react";

function ProductCard({ producto, onActualizarStock, onEliminarProducto }) {
  const esStockBajo = producto.stock > 0 && producto.stock <= 5;
  const esAgotado = producto.stock === 0;
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  const porcentajeDescuento = Math.floor(Math.random() * 15) + 5;
  const precioConDescuento = Math.floor(producto.precio * (1 - porcentajeDescuento / 100));

  const handleEliminar = () => {
    if (window.confirm(`¿Eliminar "${producto.nombre}"?`)) {
      onEliminarProducto(producto.id);
    }
  };

  return (
    <div
      className={`card ${esAgotado ? "out-of-stock" : ""} ${
        esStockBajo ? "low-stock" : ""
      } ${mostrarOpciones ? "card-expanded" : ""}`}
    >
      <div className="card-header">
        <div>
          <h3>{producto.nombre}</h3>
          <span className="tag">{producto.categoria}</span>
        </div>
        <button
          className="card-menu-btn"
          onClick={() => setMostrarOpciones(!mostrarOpciones)}
          title="Más opciones"
        >
          ⋮
        </button>
      </div>

      <div className="card-body">
        <div className="card-info">
          <p>
            <strong>Stock:</strong>
            <span className={`stock-value ${esAgotado ? "agotado" : esStockBajo ? "bajo" : ""}`}>
              {producto.stock} {esAgotado && "- Agotado"}
            </span>
          </p>
          <p>
            <strong>Precio:</strong>
            <span className="price-value">${producto.precio.toLocaleString()}</span>
          </p>
          {porcentajeDescuento > 0 && (
            <p className="descuento">
              <span className="descuento-badge">{porcentajeDescuento}% OFF</span>
              <span className="precio-descuento">${precioConDescuento.toLocaleString()}</span>
            </p>
          )}
        </div>

        {mostrarOpciones && (
          <div className="card-quick-actions">
            <button
              type="button"
              className="quick-action-btn primary"
              onClick={() => setMostrarOpciones(false)}
            >
              ✓ Cerrar
            </button>
          </div>
        )}
      </div>

      <div className="card-actions">
        <div className="stock-controls">
          <button
            type="button"
            className="btn-control btn-minus"
            disabled={esAgotado}
            onClick={() => onActualizarStock(producto.id, -1)}
            title="Disminuir stock"
          >
            −
          </button>
          <span className="stock-display">{producto.stock}</span>
          <button
            type="button"
            className="btn-control btn-plus"
            onClick={() => onActualizarStock(producto.id, 1)}
            title="Aumentar stock"
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={handleEliminar}
          title="Eliminar producto"
        >
          🗑️ Eliminar
        </button>
      </div>

      {esAgotado && <div className="stock-badge">Agotado</div>}
      {esStockBajo && <div className="low-stock-badge">Stock bajo ⚠️</div>}
    </div>
  );
}

export default ProductCard;
