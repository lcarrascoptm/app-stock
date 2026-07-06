import { useMemo, useState } from "react";

function ProductForm({ onAgregarProducto }) {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [stock, setStock] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validationErrors = useMemo(() => {
    const errors = {};
    
    if (nombre.trim().length > 0 && nombre.trim().length < 3) {
      errors.nombre = "Mínimo 3 caracteres";
    }
    
    if (categoria.trim().length > 0 && categoria.trim().length < 3) {
      errors.categoria = "Mínimo 3 caracteres";
    }
    
    if (stock < 0) {
      errors.stock = "No puede ser negativo";
    }
    
    if (precio < 0) {
      errors.precio = "No puede ser negativo";
    }
    
    return errors;
  }, [nombre, categoria, stock, precio]);

  const valoresValidos = useMemo(() => {
    return (
      nombre.trim().length >= 3 &&
      categoria.trim().length >= 3 &&
      Number(stock) >= 0 &&
      Number(precio) > 0 &&
      Object.keys(validationErrors).length === 0
    );
  }, [nombre, categoria, stock, precio, validationErrors]);

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
      stock: Number(stock),
      precio: Number(precio)
    });

    setNombre("");
    setCategoria("");
    setStock(1);
    setPrecio(0);
    setSuccess("✓ Producto agregado correctamente.");
    
    setTimeout(() => setSuccess(""), 3000);
  };

  const handleFieldChange = (field, value) => {
    setError("");
    
    switch (field) {
      case "nombre":
        setNombre(value);
        break;
      case "categoria":
        setCategoria(value);
        break;
      case "stock":
        setStock(value);
        break;
      case "precio":
        setPrecio(value);
        break;
      default:
        break;
    }
  };

  return (
    <section className="product-form">
      <h2>➕ Agregar producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">
            Nombre
            {nombre.trim().length > 0 && (
              <span className={`input-indicator ${validationErrors.nombre ? "error" : "success"}`}>
                {validationErrors.nombre ? "✗" : "✓"}
              </span>
            )}
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => handleFieldChange("nombre", e.target.value)}
            placeholder="Ej. Auriculares RGB"
            maxLength="50"
            className={validationErrors.nombre ? "input-error" : ""}
          />
          {validationErrors.nombre && (
            <small className="field-error">{validationErrors.nombre}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="categoria">
            Categoría
            {categoria.trim().length > 0 && (
              <span className={`input-indicator ${validationErrors.categoria ? "error" : "success"}`}>
                {validationErrors.categoria ? "✗" : "✓"}
              </span>
            )}
          </label>
          <input
            id="categoria"
            type="text"
            value={categoria}
            onChange={(e) => handleFieldChange("categoria", e.target.value)}
            placeholder="Ej. Audio"
            maxLength="30"
            className={validationErrors.categoria ? "input-error" : ""}
          />
          {validationErrors.categoria && (
            <small className="field-error">{validationErrors.categoria}</small>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input
              id="stock"
              type="number"
              min="0"
              value={stock}
              onChange={(e) => handleFieldChange("stock", Number(e.target.value))}
              className={validationErrors.stock ? "input-error" : ""}
            />
            {validationErrors.stock && (
              <small className="field-error">{validationErrors.stock}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input
              id="precio"
              type="number"
              min="0"
              step="100"
              value={precio}
              onChange={(e) => handleFieldChange("precio", Number(e.target.value))}
              className={validationErrors.precio ? "input-error" : ""}
            />
            {validationErrors.precio && (
              <small className="field-error">{validationErrors.precio}</small>
            )}
          </div>
        </div>

        {error && <p className="form-error">❌ {error}</p>}
        {success && <p className="form-success">{success}</p>}

        <button type="submit" disabled={!valoresValidos} className="primary-btn">
          Agregar producto
        </button>
      </form>
    </section>
  );
}

export default ProductForm;

