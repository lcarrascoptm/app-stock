import { useState, useMemo } from "react";

function SalesForm({ productos, onRegistrarVenta }) {
  const [productoId, setProductoId] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const productoSeleccionado = useMemo(() => {
    return productos.find((p) => p.id === Number(productoId));
  }, [productoId, productos]);

  const validationErrors = useMemo(() => {
    const errors = {};
    
    if (!productoId) {
      errors.producto = "Selecciona un producto";
    }
    
    if (cantidad < 1) {
      errors.cantidad = "Debe ser mayor a 0";
    }
    
    if (productoSeleccionado && cantidad > productoSeleccionado.stock) {
      errors.cantidad = `Solo hay ${productoSeleccionado.stock} unidades disponibles`;
    }
    
    return errors;
  }, [productoId, cantidad, productoSeleccionado]);

  const isValid = Object.keys(validationErrors).length === 0 && productoId;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isValid) {
      setError("Verifica los datos del formulario.");
      return;
    }

    const venta = {
      productoId: Number(productoId),
      producto: productoSeleccionado.nombre,
      cantidad: Number(cantidad),
      precioUnitario: productoSeleccionado.precio,
      total: cantidad * productoSeleccionado.precio
    };

    onRegistrarVenta(venta);
    
    setProductoId("");
    setCantidad(1);
    setSuccess("✓ Venta registrada correctamente.");
    
    setTimeout(() => setSuccess(""), 3000);
  };

  const precioTotal = productoSeleccionado ? cantidad * productoSeleccionado.precio : 0;

  return (
    <div className="sales-form-container">
      <form className="sales-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="producto">Producto *</label>
          <select
            id="producto"
            value={productoId}
            onChange={(e) => setProductoId(e.target.value)}
            className={validationErrors.producto ? "input-error" : ""}
          >
            <option value="">-- Selecciona un producto --</option>
            {productos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre} (Stock: {p.stock})
              </option>
            ))}
          </select>
          {validationErrors.producto && (
            <small className="field-error">{validationErrors.producto}</small>
          )}
        </div>

        {productoSeleccionado && (
          <div className="product-info">
            <div className="info-row">
              <span className="info-label">Precio unitario:</span>
              <span className="info-value">${productoSeleccionado.precio.toLocaleString()}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Stock disponible:</span>
              <span className={`info-value ${productoSeleccionado.stock <= 5 ? "low-stock" : ""}`}>
                {productoSeleccionado.stock} unidades
              </span>
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="cantidad">
            Cantidad *
            {cantidad > 0 && (
              <span className={`input-indicator ${validationErrors.cantidad ? "error" : "success"}`}>
                {validationErrors.cantidad ? "✗" : "✓"}
              </span>
            )}
          </label>
          <input
            id="cantidad"
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            className={validationErrors.cantidad ? "input-error" : ""}
          />
          {validationErrors.cantidad && (
            <small className="field-error">{validationErrors.cantidad}</small>
          )}
        </div>

        {productoSeleccionado && cantidad > 0 && (
          <div className="total-section">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${(cantidad * productoSeleccionado.precio).toLocaleString()}</span>
            </div>
            <div className="total-final">
              <span className="total-label">Total:</span>
              <span className="total-value">${precioTotal.toLocaleString()}</span>
            </div>
          </div>
        )}

        {error && <p className="form-error">❌ {error}</p>}
        {success && <p className="form-success">{success}</p>}

        <button
          type="submit"
          disabled={!isValid}
          className="primary-btn"
        >
          Registrar Venta
        </button>
      </form>
    </div>
  );
}

export default SalesForm;
