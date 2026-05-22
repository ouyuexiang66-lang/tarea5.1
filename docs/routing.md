# Estructura de Rutas y Navegación

Hemos implementado un sistema de **Single Page Application (SPA)** utilizando `react-router-dom`, lo que permite una navegación fluida sin recargas de página.

## Configuración del Router
El enrutador principal se encuentra en `App.tsx`, envolviendo todos los componentes bajo un `BrowserRouter`.

## Rutas Definidas
| Ruta | Componente | Descripción |
| :--- | :--- | :--- |
| `/` | `Menu` | Página de inicio y listado de pizzas. |
| `/menu` | `Menu` | Alias para la página de la carta. |
| `/checkout` | `Checkout` | Resumen del pedido y proceso de pago. |
| `*` | `NotFound` | Captura cualquier URL no definida (Error 404). |

## Navegación Interna
Se utiliza el componente `<Link>` para todas las redirecciones internas (Navbar, botones de error). Esto garantiza que el **Estado Global (CartContext)** se mantenga intacto durante la navegación, ya que el ciclo de vida de la aplicación no se reinicia.

## Manejo de Errores
Se ha implementado una ruta comodín (`path="*"`) que renderiza un componente `NotFound` personalizado, mejorando la experiencia de usuario ante errores de escritura en la URL.