# Definición de la Idea del Proyecto: SliceTime (Gestión de Pizzería)

Este documento detalla la conceptualización, el público objetivo y el alcance de las funcionalidades para la aplicación web fullstack de la pizzería.

---

## 1. ¿Qué problema intenta resolver?

Las pequeñas pizzerías de barrio a menudo dependen del teléfono o de mensajes de WhatsApp para gestionar sus reservas de mesa y pedidos, lo que genera caos en las horas punta, malentendidos con los clientes y pérdidas de tiempo. Además, mantener la carta en papel o en un PDF estático de Drive dificulta actualizar los precios o los platos agotados al instante.

**SliceTime** resuelve esto ofreciendo una plataforma web centralizada muy ligera. Permite a los clientes ver el menú interactivo actualizado en tiempo real y rellenar un formulario de reserva de mesa rápido, mientras que el personal de la pizzería dispone de un panel sencillo para gestionar esas reservas y cambiar la disponibilidad de las pizzas sin tocar código.

---

## 2. Usuario Objetivo

El proyecto está diseñado para dos tipos de usuarios:
1.  **El Cliente Final:** Personas que quieren comer en la pizzería o pedir para recoger, que buscan ver la carta de forma cómoda desde el móvil y asegurar su mesa en menos de un minuto.
2.  **El Administrador (Dueño/Personal de la pizzería):** Un usuario no técnico que necesita ver cuántas reservas hay para hoy de un solo vistazo y ocultar o añadir pizzas al menú según el stock del día.

---

## 3. Funcionalidades Principales (MVP - Producto Mínimo Viable)

Estas son las características esenciales que se desarrollarán en la primera versión para que la app sea funcional:

### Frontend (Cliente - React + TypeScript + Tailwind)
*   **Carta / Menú Interactivo:** Vista pública con fotos, ingredientes y precios de las pizzas, organizada por categorías.
*   **Formulario de Reservas:** Sistema para que el cliente elija día, hora, número de personas y deje sus datos de contacto.
*   **Panel de Administración Simple:** Vista protegida o sección interna donde el personal del restaurante puede ver la lista de reservas recibidas.

### Backend (API - Express + TypeScript)
*   **Endpoints de Menú (`/api/pizzas`):** 
    *   `GET`: Para que el frontend pinte la carta.
    *   `POST`: Para añadir nuevas especialidades.
*   **Endpoints de Reservas (`/api/reservas`):**
    *   `GET`: Para listar todas las reservas en el panel de control.
    *   `POST`: Para que los clientes creen una nueva reserva.
*   **Persistencia:** Datos gestionados en memoria del servidor (para desarrollo ágil) combinados con `LocalStorage` en el frontend para configuraciones rápidas del cliente.

---

## 4. Funcionalidades Opcionales (Nice-to-Have)

Características secundarias para hacer la app más atractiva si el tiempo de desarrollo lo permite:
*   **Carrito de la compra simulado:** Permitir al usuario seleccionar pizzas para "Añadir al pedido" y ver el precio total calculado con el IVA incluido antes de reservar su mesa.
*   **Filtros de alérgenos:** Botones rápidos en el menú para ocultar pizzas que contengan gluten o lactosa, o para filtrar por opciones vegetarianas.
*   **Buscador en tiempo real:** Una barra de búsqueda en la parte superior del menú para encontrar pizzas por nombre o ingredientes específicos.

---

## 5. Posibles Mejoras Futuras

Líneas de evolución para transformar esta microapp en un producto de software comercial robusto:
*   **Conexión a Base de Datos Real:** Migrar el array en memoria a una base de datos relacional (como PostgreSQL) usando un ORM (como Prisma) para que los datos no se borren al reiniciar el servidor.
*   **Sistema de Autenticación de Usuarios:** Añadir inicio de sesión seguro con JWT (JSON Web Tokens) para separar de forma estricta la cuenta del administrador de los clientes.
*   **Pasarela de Pago Real:** Integrar Stripe para permitir el pago de pedidos online (para recoger en local) directamente desde la web.
*   **Notificaciones automatizadas:** Envío automático de un correo electrónico de confirmación al cliente cuando el administrador acepte su reserva de mesa.

---

## 6. Configuración del Repositorio

El código del proyecto se organizará en un único repositorio de GitHub (Monorepo simplificado):

```text
slice-time-app/ (Raíz del proyecto)
├── backend/     # Código de la API con Express y TypeScript
├── frontend/    # Código de la interfaz con React, TS y Tailwind
├── docs/        # Documentación del proyecto (.md)
└── README.md    # Presentación general del proyecto