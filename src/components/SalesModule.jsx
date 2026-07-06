import { useState, useEffect } from "react";
import SalesDashboard from "./SalesDashboard";
import SalesForm from "./SalesForm";
import SalesHistory from "./SalesHistory";

function SalesModule({ productos, onReduceStock }) {
  const [ventas, setVentas] = useState(() => {
    const guardadas = localStorage.getItem("inventarioVentas");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const [view, setView] = useState("dashboard");

  useEffect(() => {
    localStorage.setItem("inventarioVentas", JSON.stringify(ventas));
  }, [ventas]);

  const handleRegistrarVenta = (venta) => {
    const nuevaVenta = {
      id: Date.now(),
      ...venta,
      fecha: new Date().toLocaleDateString("es-AR"),
      hora: new Date().toLocaleTimeString("es-AR")
    };

    setVentas((prev) => [nuevaVenta, ...prev]);
    onReduceStock(venta.productoId, venta.cantidad);
  };

  const handleEliminarVenta = (ventaId) => {
    const venta = ventas.find((v) => v.id === ventaId);
    if (venta) {
      setVentas((prev) => prev.filter((v) => v.id !== ventaId));
      onReduceStock(venta.productoId, -venta.cantidad);
    }
  };

  const stats = {
    totalVentas: ventas.length,
    ingresoTotal: ventas.reduce((acc, v) => acc + v.total, 0),
    unidadesVendidas: ventas.reduce((acc, v) => acc + v.cantidad, 0),
    productosTop: [...ventas]
      .reduce((acc, v) => {
        const existe = acc.find((p) => p.productoId === v.productoId);
        if (existe) {
          existe.cantidad += v.cantidad;
          existe.ingresos += v.total;
        } else {
          acc.push({
            productoId: v.productoId,
            producto: v.producto,
            cantidad: v.cantidad,
            ingresos: v.total
          });
        }
        return acc;
      }, [])
      .sort((a, b) => b.ingresos - a.ingresos)
      .slice(0, 5)
  };

  return (
    <section className="sales-module">
      <div className="sales-header">
        <h2>💰 Índice de Ventas</h2>
        <div className="sales-tabs">
          <button
            className={`tab-btn ${view === "dashboard" ? "active" : ""}`}
            onClick={() => setView("dashboard")}
          >
            📊 Dashboard
          </button>
          <button
            className={`tab-btn ${view === "form" ? "active" : ""}`}
            onClick={() => setView("form")}
          >
            ➕ Registrar Venta
          </button>
          <button
            className={`tab-btn ${view === "history" ? "active" : ""}`}
            onClick={() => setView("history")}
          >
            📋 Historial ({ventas.length})
          </button>
        </div>
      </div>

      <div className="sales-content">
        {view === "dashboard" && (
          <SalesDashboard stats={stats} ventas={ventas} />
        )}
        {view === "form" && (
          <SalesForm productos={productos} onRegistrarVenta={handleRegistrarVenta} />
        )}
        {view === "history" && (
          <SalesHistory
            ventas={ventas}
            productos={productos}
            onEliminarVenta={handleEliminarVenta}
          />
        )}
      </div>
    </section>
  );
}

export default SalesModule;
