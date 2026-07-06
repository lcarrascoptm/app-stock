function SalesDashboard({ stats, ventas }) {
  const ventasUltimos7Dias = ventas.filter((v) => {
    const fechaVenta = new Date(v.fecha);
    const hoy = new Date();
    const dias7atras = new Date(hoy.getTime() - 7 * 24 * 60 * 60 * 1000);
    return fechaVenta >= dias7atras;
  });

  return (
    <div className="sales-dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💳</div>
          <div className="stat-info">
            <span className="stat-label">Total Ventas</span>
            <span className="stat-number">{stats.totalVentas}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💵</div>
          <div className="stat-info">
            <span className="stat-label">Ingresos</span>
            <span className="stat-number">${stats.ingresoTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-info">
            <span className="stat-label">Unidades Vendidas</span>
            <span className="stat-number">{stats.unidadesVendidas}</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-info">
            <span className="stat-label">Últimos 7 Días</span>
            <span className="stat-number">{ventasUltimos7Dias.length}</span>
          </div>
        </div>
      </div>

      <div className="top-products">
        <h3>🏆 Productos Más Vendidos</h3>
        {stats.productosTop.length > 0 ? (
          <table className="sales-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Ingresos</th>
              </tr>
            </thead>
            <tbody>
              {stats.productosTop.map((producto, index) => (
                <tr key={producto.productoId}>
                  <td>{index + 1}</td>
                  <td>{producto.producto}</td>
                  <td>{producto.cantidad}</td>
                  <td>${producto.ingresos.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">No hay ventas registradas aún.</p>
        )}
      </div>

      <div className="recent-sales">
        <h3>📝 Últimas Ventas</h3>
        {ventas.slice(0, 5).length > 0 ? (
          <div className="sales-list">
            {ventas.slice(0, 5).map((venta) => (
              <div key={venta.id} className="sale-item">
                <div className="sale-left">
                  <span className="sale-product">{venta.producto}</span>
                  <span className="sale-time">
                    {venta.fecha} {venta.hora}
                  </span>
                </div>
                <div className="sale-right">
                  <span className="sale-qty">{venta.cantidad} un.</span>
                  <span className="sale-total">${venta.total.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No hay ventas aún.</p>
        )}
      </div>
    </div>
  );
}

export default SalesDashboard;
