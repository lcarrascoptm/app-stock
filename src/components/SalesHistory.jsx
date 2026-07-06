import { useState } from "react";

function SalesHistory({ ventas, _productos, onEliminarVenta }) {
  const [filtroProducto, setFiltroProducto] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("reciente");

  const ventasFiltradas = ventas
    .filter((v) => !filtroProducto || v.productoId === Number(filtroProducto))
    .sort((a, b) => {
      switch (ordenamiento) {
        case "reciente":
          return new Date(`${b.fecha} ${b.hora}`) - new Date(`${a.fecha} ${a.hora}`);
        case "antiguo":
          return new Date(`${a.fecha} ${a.hora}`) - new Date(`${b.fecha} ${b.hora}`);
        case "mayor":
          return b.total - a.total;
        case "menor":
          return a.total - b.total;
        default:
          return 0;
      }
    });

  const productosUnicos = [...new Set(ventas.map((v) => v.productoId))];

  const handleEliminar = (ventaId, producto) => {
    if (window.confirm(`¿Eliminar venta de ${producto}?`)) {
      onEliminarVenta(ventaId);
    }
  };

  return (
    <div className="sales-history-container">
      <div className="history-filters">
        <div className="filter-group">
          <label htmlFor="filtro-producto">Producto:</label>
          <select
            id="filtro-producto"
            value={filtroProducto}
            onChange={(e) => setFiltroProducto(e.target.value)}
          >
            <option value="">Todos los productos</option>
            {productosUnicos.map((id) => {
              const venta = ventas.find((v) => v.productoId === id);
              return (
                <option key={id} value={id}>
                  {venta.producto}
                </option>
              );
            })}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="ordenamiento">Ordenar por:</label>
          <select
            id="ordenamiento"
            value={ordenamiento}
            onChange={(e) => setOrdenamiento(e.target.value)}
          >
            <option value="reciente">📅 Más reciente</option>
            <option value="antiguo">📅 Más antiguo</option>
            <option value="mayor">💰 Mayor monto</option>
            <option value="menor">💰 Menor monto</option>
          </select>
        </div>
      </div>

      <div className="history-stats">
        <div className="stat">
          <span className="stat-label">Ventas mostradas:</span>
          <span className="stat-value">{ventasFiltradas.length}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Monto total:</span>
          <span className="stat-value">
            ${ventasFiltradas.reduce((acc, v) => acc + v.total, 0).toLocaleString()}
          </span>
        </div>
        <div className="stat">
          <span className="stat-label">Unidades:</span>
          <span className="stat-value">
            {ventasFiltradas.reduce((acc, v) => acc + v.cantidad, 0)}
          </span>
        </div>
      </div>

      {ventasFiltradas.length > 0 ? (
        <div className="history-table-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unit.</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {ventasFiltradas.map((venta) => (
                <tr key={venta.id} className="history-row">
                  <td className="product-name">{venta.producto}</td>
                  <td className="quantity">{venta.cantidad}</td>
                  <td className="price">${venta.precioUnitario?.toLocaleString() || "N/A"}</td>
                  <td className="total">${venta.total.toLocaleString()}</td>
                  <td className="date">{venta.fecha}</td>
                  <td className="time">{venta.hora}</td>
                  <td className="action">
                    <button
                      className="delete-btn-small"
                      onClick={() => handleEliminar(venta.id, venta.producto)}
                      title="Eliminar venta"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">
          <p>📭 No hay ventas que coincidan con los filtros.</p>
        </div>
      )}
    </div>
  );
}

export default SalesHistory;
