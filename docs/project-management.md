# Organización y Gestión del Proyecto: SliceTime

Este documento detalla la metodología de trabajo, la organización de la estructura de archivos y el flujo de desarrollo seguido para la creación de esta aplicación fullstack.

---

## 1. Metodología de Desarrollo
Se ha optado por una metodología **Ágil** basada en el marco de trabajo **Kanban**. Para la gestión visual de las tareas, se utiliza un tablero en **Trello** con las siguientes columnas:

* **Backlog:** Ideas y funcionalidades futuras (ej: pasarela de pagos real, sistema de fidelización).
* **To Do:** Tareas priorizadas para el MVP (Producto Mínimo Viable).
* **In Progress:** Tarea técnica que se está desarrollando en el momento actual.
* **Review:** Pruebas de funcionamiento, verificación de tipos en TypeScript y revisión de diseño con Tailwind.
* **Done:** Funcionalidades terminadas e integradas en la rama principal de Git.

---

## 2. Organización del Espacio de Trabajo (Monorepo)
El proyecto se organiza bajo una estructura de **Monorepo simplificado**, permitiendo tener el código del cliente y del servidor en un mismo repositorio pero con entornos de ejecución aislados:

* **/frontend:** Aplicación cliente desarrollada con **React + Vite + TypeScript**. Incluye la configuración de **Tailwind CSS** para los estilos y **React Router** para la navegación.
* **/backend:** API REST desarrollada con **Node.js + Express + TypeScript**. Sigue una arquitectura por capas (Routes, Controllers, Services, Models) para asegurar la escalabilidad.
* **/docs:** Documentación técnica y de procesos del proyecto en formato Markdown.

---

## 3. Flujo de Trabajo Técnico (Git Workflow)
Para mantener un historial de cambios limpio y profesional:
1.  **Sincronización:** Cada sesión de trabajo comienza asegurando que el repositorio local está al día con el remoto.
2.  **Desarrollo:** Las tareas se mueven en Trello a "In Progress". Se trabaja en la funcionalidad específica (ej: crear el cliente de API en el frontend).
3.  **Compromiso (Commit):** Una vez la funcionalidad es estable, se realiza un commit con un mensaje descriptivo siguiendo la convención de *Conventional Commits* (ej: `feat: add pizza menu component`).
4.  **Finalización:** La tarea se mueve a "Done" tras verificar que no existen errores de tipado ni conflictos en la consola.