# Proyecto Modulo 2: "Ecommerce DigiMercado"

Descripción: Venta de mercado online

Componentes creados:

- Card /Contiene la logica de cada card.
- Buttons: ButtonCard, ButtonFooter, NavbarButton /Logica dependiendo de cada boton para darle sus estilos dependiendo del boton en el css.
- Footer /Contiene la logica para el footer con sus estilos.
- ImageStatus /Contiene el estilo de la imagen y logica para usar el isSale y isSoldout.
- Navbar: Navbar, Dropdown, DropdownItem, NavbarBrand, SearchBar /Contiene la logica para el Navbar, junto con sus estilos.
- Logo /Logica para el logo.
- ProductGrid /Contenedor que organiza y muestra la lista de productos.
- ProductTitle /Logica y estilo para titulo de cada Card.
- ProductPrice /Logica y estilo para precio de cada Card.
- ProductState /Maneja los estadosde carga, error y ausencia de datos para la lista de productos.


- Services: productService.js para llamar a la api y traer los productos.

- Route: Use route dentro del NavbarBrand "DigiMercado" para ir a la pagina raiz "/".
- Route: Use route en el boton del Navbar "Productos" para ir a la pagina "/product-list"

Filtros creados:

- Por oferta
- Por busqueda
- Por categoria

Pasos para ejecutar proyecto:

1. Clonar desde repositorio.
   En terminal: git clone https://github.com/Luisordenes/My-ecommerce.git

2. Entrar a la carpeta del proyecto.
   En terminal: cd My-ecommerce

3. Instalar dependencias.
   En terminal: npm install

4. Ejecutar proyecto. 
   En terminal: npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

