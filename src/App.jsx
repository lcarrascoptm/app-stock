import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { products as initialProducts } from "./data/products";
import "./index.css";

function App() {
  const [productos, setProductos] = useState(() => {
    const guardado = localStorage.getItem("inventarioProductos");
    return guardado ? JSON.parse(guardado) : initialProducts;
  });
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  useEffect(() => {
    localStorage.setItem("inventarioProductos", JSON.stringify(productos));
  }, [productos]);

  const categorias = [
    "Todas",
    ...Array.from(new Set(productos.map((producto) => producto.categoria)))
  ];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoriaFiltro === "Todas" || producto.categoria === categoriaFiltro;

    return coincideBusqueda && coincideCategoria;
  });

  const totalItems = productos.reduce((acc, producto) => acc + producto.stock, 0);
  const valorInventario = productos.reduce(
    (acc, producto) => acc + producto.stock * producto.precio,
    0
  );

  const handleAgregarProducto = (nuevoProducto) => {
    setProductos((prevProductos) => [
      {
        id:
          prevProductos.reduce((maxId, producto) => Math.max(maxId, producto.id), 0) +
          1,
        ...nuevoProducto
      },
      ...prevProductos
    ]);
  };

  const handleEliminarProducto = (id) => {
    setProductos((prevProductos) => prevProductos.filter((p) => p.id !== id));
  };

  const handleActualizarStock = (id, delta) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) => {
        if (producto.id !== id) return producto;

        const nuevoStock = Math.max(producto.stock + delta, 0);
        return { ...producto, stock: nuevoStock };
      })
    );
  };

  return (
    <>
      <Header 
        totalProductos={productos.length}
        totalStock={totalItems}
        valorInventario={valorInventario}
      />

      <main className="container">
        <section className="hero-section">
          <div>
            <h2>🎯 Gestión inteligente</h2>
            <p>
              Administra tu inventario de forma rápida y eficiente. Busca, filtra, 
              actualiza stock y agrega productos en tiempo real.
            </p>
          </div>
          <div className="summary-cards">
            <div className="summary-card">
              <span>📦 Total productos</span>
              <strong>{productos.length}</strong>
            </div>
            <div className="summary-card">
              <span>📊 Unidades en stock</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="summary-card">
              <span>💵 Valor inventario</span>
              <strong>${valorInventario.toLocaleString()}</strong>
            </div>
          </div>
        </section>

        <section className="controls-grid">
          <div className="search-section">
            <h2>🔍 Buscar productos</h2>
            <input
              type="text"
              placeholder="Buscar por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              maxLength="50"
              aria-label="Buscar productos por nombre"
            />
            {busqueda && (
              <p className="search-hint">
                Se encontraron <strong>{productosFiltrados.length}</strong> resultados
              </p>
            )}
          </div>

          <div className="filter-section">
            <h2>🏷️ Categorías</h2>
            <select
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
              aria-label="Filtrar productos por categoría"
            >
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>

          <ProductForm onAgregarProducto={handleAgregarProducto} />
        </section>

        <ProductList
          productos={productosFiltrados}
          onActualizarStock={handleActualizarStock}
          onEliminarProducto={handleEliminarProducto}
        />
      </main>
    </>
  );
}

export default App;

