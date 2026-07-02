# Inventario Stock

## Evaluación 3 - Desarrollo Inicial de SPA con React + Vite e IA

### Cliente y problemática

Cliente ficticio: una pequeña tienda de productos tecnológicos.

Contexto: el cliente gestiona productos, stock y precios de forma manual y necesita una forma rápida y confiable de consultar y actualizar su inventario.

Necesidad: reducir errores y acelerar la búsqueda de productos, mientras se prepara una aplicación que pueda crecer a un sistema CRUD completo.

Objetivo: construir una SPA inicial que permita visualizar, buscar, filtrar, crear y gestionar productos, estableciendo una base técnica escalable.

---

## Descripción de la solución

La aplicación se desarrolló con React y Vite para asegurar un arranque rápido, modularidad y buena separación de responsabilidades. La solución actual incluye:

- Visualización de productos en tarjetas.
- Búsqueda dinámica por nombre.
- Filtro por categoría.
- Agregar nuevos productos mediante formulario.
- Actualizar stock de productos.
- Eliminar productos.
- Persistencia local con `localStorage` para conservar datos entre recargas.

Esta base técnica está diseñada para evolucionar hacia operaciones CRUD completas, validación de formularios y conexión con servicios externos.

---

## Funcionalidades implementadas

- `Consultar`: lista de productos con búsqueda y filtro.
- `Crear`: formulario para añadir productos nuevos.
- `Modificar`: ajuste de stock con botones + / -.
- `Eliminar`: botón para quitar productos del inventario.
- `Persistencia local`: datos guardados en `localStorage`.

---

## Estructura del proyecto

- `src/App.jsx`: componente principal y lógica de estado.
- `src/components/Header.jsx`: encabezado de la aplicación.
- `src/components/ProductList.jsx`: lista de productos.
- `src/components/ProductCard.jsx`: tarjeta individual de producto.
- `src/components/ProductForm.jsx`: formulario de creación.
- `src/data/products.js`: datos iniciales de ejemplo.
- `src/index.css`: estilos globales.

---

## Planificación de integración externa

En etapas futuras, la aplicación necesitará obtener información externa como:

- Catálogo de productos y precios.
- Inventario disponible desde un servidor.
- Datos de proveedores y órdenes de compra.

Esto aportará valor porque permitirá sincronizar el inventario con sistemas externos, mantener precios actualizados y evitar discrepancias entre la tienda y la aplicación.

---

## Uso de Inteligencia Artificial

Se utilizó IA para apoyar el desarrollo y organizar la solución. Evidencia:

- Prompts usados:
  1. "Ayúdame a definir una problemática para una app de inventario en React."
  2. "Explícame cómo organizar componentes en React + Vite."
  3. "Dame recomendaciones para usar useState en un filtro de productos."
  4. "Haz la app más interactiva y dinámica con búsqueda, filtros y acciones." 
  5. "Añade persistencia local a la aplicación y planifica la integración externa." 

- Recomendaciones obtenidas:
  - Usar componentes reutilizables y modularizar por responsabilidad.
  - Manejar el estado con Hooks para filtros, formularios y datos dinámicos.
  - Preparar la app para persistencia local y futura conexión HTTP.

- Ajustes realizados por el estudiante:
  - Se creó `ProductForm` para agregar productos.
  - Se creó `prompt-log.txt` para registrar los prompts de IA y las decisiones tomadas.
  - Se implementó `ProductList` y `ProductCard` con props y acciones.
  - Se agregó almacenamiento en `localStorage`.
  - Se documentó la idea y la estructura del proyecto.

---

## Avance realizado

Actualmente la aplicación cumple con los objetivos de la evaluación inicial:

- Base técnica construida con React + Vite.
- Organización modular de componentes.
- Manejo de estado con Hooks.
- Interfaz funcional y dinámica.
- Preparación para crecimiento futuro hacia CRUD completo.
- Documentación clara del cliente, problemática y solución.

---

## Uso de Git y GitHub

Se recomienda mantener este proyecto en un repositorio GitHub con:

- Rama principal `main`.
- Ramas para funcionalidades específicas.
- Commits frecuentes y descriptivos.
- Merge hacia `main` al integrar cambios.

---

## Ejecución

1. `npm install`
2. `npm run dev`

