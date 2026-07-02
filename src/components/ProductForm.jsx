import { useMemo, useState } from "react";

function ProductForm({ onAgregarProducto }) {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [stock, setStock] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const valoresValidos = useMemo(() => {
    return (
      nombre.trim().length >= 3 &&
      categoria.trim().length >= 3 &&
      Number(stock) >= 0 &&
      Number(precio) > 0
    );
  }, [nombre, categoria, stock, precio]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");

    if (!nombre.trim() || nombre.trim().length < 3) {
      setError("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    if (!categoria.trim() || categoria.trim().length < 3) {
      setError("La categoría debe tener al menos 3 caracteres.");
      return;
    }

    if (stock < 0) {
      setError("El stock no puede ser negativo.");
      return;
    }

    if (precio <= 0) {
      setError("El precio debe ser mayor que cero.");
      return;
    }

    setError("");
    onAgregarProducto({
      nombre: nombre.trim(),
      categoria: categoria.trim(),
      stock,
      precio
    });

    setNombre("");
    setCategoria("");
    setStock(1);
    setPrecio(0);
    setSuccess("Producto agregado correctamente.");
  };

  return (
    <section className="product-form">
      <h2>Agregar producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Auriculares RGB"
          />
        </label>
        <label>
          Categoría
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Ej. Audio"
          />
        </label>
        <label>
          Stock
          <input
            type="number"
            min="0"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
          />
        </label>
        <label>
          Precio
          <input
            type="number"
            min="0"
            step="10"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value))}
          />
        </label>

        {error && <p className="form-error">{error}</p>}
        {success && <p className="form-success">{success}</p>}

        <button type="submit" disabled={!valoresValidos}>
          Agregar producto
        </button>
      </form>
    </section>
  );
}

export default ProductForm;
