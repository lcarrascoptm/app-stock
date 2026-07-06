# Inventario Stock

## Evaluación 3 - Desarrollo Inicial de SPA con React + Vite e IA

### Cliente y problemática

Cliente ficticio: una pequeña tienda de productos tecnológicos.

Contexto: el cliente gestiona productos, stock y precios de forma manual y necesita una forma rápida y confiable de consultar y actualizar su inventario.

Necesidad: reducir errores y acelerar la búsqueda de productos, mientras se prepara una aplicación que pueda crecer a un sistema CRUD completo.

Objetivo: construir una SPA inicial que permita visualizar, buscar, filtrar, crear y gestionar productos, estableciendo una base técnica escalable.

---

## Descripción de la solución mejorada

La aplicación se desarrolló con React y Vite para asegurar un arranque rápido, modularidad y buena separación de responsabilidades. **La versión actual incluye mejoras significativas en UI/UX, funcionalidades y rendimiento.**

### ✨ Mejoras implementadas (Feature Branch)

#### 🎨 Interfaz de Usuario (UI/UX)
- **Diseño moderno y responsivo** con animaciones suaves
- **Header mejorado** que muestra estadísticas en tiempo real (total de productos, stock, valor)
- **Componentes visuales destacados** con emojis para mejor identificación
- **Sistema de colores mejorado** con gradientes y sombras
- **Retroalimentación visual** (indicadores de validación en formularios)
- **Experiencia fluida** con transiciones y hover effects
- **Modo oscuro nativo** optimizado para la vista

#### 🚀 Nuevas Funcionalidades
- **Ordenamiento inteligente**: Ordena productos por nombre, precio (ascendente/descendente) o stock
- **Control de stock mejorado**: Botones +/- con controles visuales
- **Búsqueda con resultados**: Muestra cantidad de resultados encontrados
- **Validación en tiempo real**: Indicadores visuales de campos válidos/inválidos
- **Badges informativos**: Stock bajo (⚠️), Agotado, Descuentos simulados
- **Menú rápido** en tarjetas de productos con opciones adicionales
- **Confirmación de eliminación**: Diálogo de confirmación antes de eliminar

#### 📱 Diseño Responsivo
- Adaptable a todos los tamaños de pantalla (móvil, tablet, desktop)
- Grid layout flexible que se ajusta automáticamente
- Interfaz táctil optimizada para dispositivos móviles
- Media queries para experiencia óptima en todos los dispositivos
- Soporte para modo de movimiento reducido (accesibilidad)

#### 🔧 Componentes Técnicos Mejorados
- **Componente Header.jsx** → Ahora recibe estadísticas dinámicas
- **Componente ProductForm.jsx** → Validación avanzada, feedback visual, mejor estructura
- **Componente ProductCard.jsx** → Más opciones, mejor visual, estado expandible
- **Componente ProductList.jsx** → Nuevos controles de ordenamiento
- **Nuevo Componente ConfirmModal.jsx** → Modal reutilizable para confirmaciones
- **CSS completamente reescrito** → Diseño moderno, animaciones, responsivo

#### 🐛 Bugs Corregidos
- Mejor manejo de números en inputs
- Validación más robusta de formularios
- Transiciones suaves sin parpadeos
- Mejor accesibilidad (labels, aria-labels, contraste)

#### ⚡ Optimizaciones
- Código más limpio y modular
- Mejor rendimiento con transiciones CSS
- Estructura de CSS organizada por secciones
- UseMemory para gestión de validaciones

---

## Estructura del proyecto

```
src/
├── App.jsx                          # Componente principal mejorado
├── App.css                          # Estilos globales (REESCRITO)
├── index.css                        # Estilos detallados (REESCRITO)
├── main.jsx
├── components/
│   ├── Header.jsx                   # ✨ MEJORADO - Muestra estadísticas
│   ├── ProductList.jsx              # ✨ MEJORADO - Añadido ordenamiento
│   ├── ProductCard.jsx              # ✨ MEJORADO - UI avanzada
│   ├── ProductForm.jsx              # ✨ MEJORADO - Validación mejorada
│   └── ConfirmModal.jsx             # 🆕 NUEVO - Modal de confirmación
└── data/
    └── products.js
```

---

## Funcionalidades

### Operaciones CRUD
- ✅ **Consultar**: Lista completa de productos con búsqueda por nombre y filtro por categoría
- ✅ **Crear**: Formulario avanzado para añadir productos nuevos con validación en tiempo real
- ✅ **Modificar**: Ajuste de stock con botones +/-, edición visual intuitiva
- ✅ **Eliminar**: Confirmación de eliminación con modal
- ✅ **Persistencia local**: Datos guardados en `localStorage`

### Características Avanzadas
- 🔍 **Búsqueda dinámica** con contador de resultados
- 🏷️ **Filtrado por categoría**
- 📊 **Ordenamiento múltiple** (nombre, precio, stock)
- ⚡ **Validación inteligente** con indicadores visuales
- 📈 **Estadísticas en tiempo real** (total productos, stock, valor inventario)
- ⚠️ **Alertas visuales** (stock bajo, producto agotado, descuentos)
- 🎯 **Interfaz intuitiva** y accesible

---

## Stack Tecnológico

- **Frontend**: React 19.2
- **Build Tool**: Vite 8.1
- **Styling**: CSS3 moderno (sin frameworks)
- **Storage**: localStorage API
- **Linting**: Oxlint

---

## Cómo ejecutar

### Desarrollo
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

---

## Mejoras Futuras Sugeridas

1. **Backend**: Integración con API REST para persistencia en servidor
2. **Autenticación**: Sistema de login y roles de usuario
3. **Exportación**: Descarga de inventario en CSV/PDF
4. **Notificaciones**: Sistema de alertas para stock bajo
5. **Reportes**: Análisis de ventas y tendencias
6. **Dark/Light Mode**: Toggle para preferencias visuales
7. **Filtros avanzados**: Búsqueda multicriterio
8. **Historial**: Registro de cambios en el inventario
9. **Categorías**: Gestión dinámica de categorías
10. **Testing**: Tests unitarios e integración

---

## Rama de Desarrollo

- **Rama actual**: `feature/mejoras-ui`
- **Base**: `main`
- **Estado**: ✅ Mejoras completadas y listas para revisión

---

## Notas Técnicas

### Validación de Formulario
- Validación en tiempo real con `useMemo`
- Indicadores visuales de campos válidos/inválidos
- Mensajes de error específicos
- Auto-limpiar formulario tras envío exitoso

### Ordenamiento
Implementado directamente en `ProductList.jsx` usando `Array.sort()` con comparadores específicos.

### Persistencia
Los datos se persisten automáticamente en `localStorage` cada vez que cambia el estado de productos.

### Estilos
CSS moderno usando:
- CSS Grid para layouts
- Flexbox para alineación
- Variables CSS implícitas
- Animaciones y transiciones
- Media queries para responsivo
- Backdrop filter para efectos

---

## Autor

Desarrollado como parte de la Evaluación 3 del curso de React + Vite

**Fecha de mejoras**: 2026-07-05
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

1. `C:\inventario-stock`
2. `npm install`
3. `npm run dev`

## By n0t.- 