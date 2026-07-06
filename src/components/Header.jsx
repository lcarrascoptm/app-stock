function Header({ totalProductos, totalStock, valorInventario }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>📦 Inventario Stock</h1>
          <p>Gestión de productos técnicos en tiempo real</p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-label">Productos</span>
            <span className="stat-value">{totalProductos}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Stock Total</span>
            <span className="stat-value">{totalStock}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Valor</span>
            <span className="stat-value">${valorInventario.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;