import { useState } from "react";

function ProductForm({ onAgregarProducto }) {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [stock, setStock] = useState(1);
  const [precio, setPrecio] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre.trim() || !categoria.trim() || stock < 0 || precio < 0) {
      return;
    }

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
            required
          />
        </label>
        <label>
          Categoría
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Ej. Audio"
            required
          />
        </label>
        <label>
          Stock
          <input
            type="number"
            min="0"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            required
          />
        </label>
        <label>
          Precio
          <input
            type="number"
            min="0"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value))}
            required
          />
        </label>
        <button type="submit">Agregar producto</button>
      </form>
    </section>
  );
}

export default ProductForm;
