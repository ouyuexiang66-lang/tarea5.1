# Metodologías Ágiles de Desarrollo de Software

Este documento resume la investigación sobre metodologías ágiles, sus marcos de trabajo más utilizados (Scrum y Kanban), sus diferencias y los escenarios ideales para aplicar cada una en el desarrollo de software.

---

## 1. ¿Qué es Agile y cuál es su objetivo?

**Agile (o Agilidad)** no es un conjunto de reglas estrictas, sino una **filosofía y una mentalidad** orientada a la gestión de proyectos y desarrollo de software. Nació oficialmente en 2001 con el *Manifiesto Ágil*, un documento que prioriza a las personas y las interacciones, el software funcional, la colaboración con el cliente y la capacidad de respuesta ante el cambio, por encima de los procesos rígidos y la documentación excesiva.

### Objetivo principal
Su meta es **entregar valor real al cliente de forma rápida, constante y con la capacidad de pivotar o cambiar de rumbo sin que eso signifique el fracaso del proyecto**. En lugar de planificar todo un año de trabajo a ciegas (enfoque tradicional o en cascada), Agile propone ciclos cortos de desarrollo para probar el software con usuarios reales, obtener feedback y mejorar continuamente.

---

## 2. Scrum: Conceptos Principales

**Scrum** es el marco de trabajo ágil más popular del mundo. Estructura el desarrollo en ciclos cerrados de tiempo y define roles muy específicos para garantizar que el equipo sea autosuficiente y productivo.

### Roles Principales
*   **Product Owner (Dueño del Producto):** Es la voz del cliente o del negocio dentro del equipo. Se encarga de definir qué se va a construir, priorizar las tareas según el valor que aportan y asegurar que el equipo trabaje en lo más importante.
*   **Scrum Master:** Es un facilitador y un "escudo" para el equipo. No es un jefe; su rol es eliminar cualquier obstáculo técnico o burocrático que frene al equipo, asegurar que se respeten las dinámicas de Scrum y ayudar a mejorar la productividad.
*   **Developers (Equipo de Desarrollo):** El grupo de profesionales (diseñadores, programadores, QA) que se encarga de transformar las ideas en software real y funcional. Tienen autonomía para decidir *cómo* técnico resolver los problemas.

### Conceptos y Artefactos clave
*   **Product Backlog:** Una lista viva y priorizada de todas las funcionalidades, mejoras y correcciones que necesita el proyecto. Es el "mapa de ruta" gestionado por el Product Owner.
*   **Sprint:** El corazón de Scrum. Es un bloque de tiempo fijo (normalmente entre 1 y 4 semanas) durante el cual el equipo se compromete a diseñar, programar y probar un conjunto de tareas específicas.
*   **Sprint Backlog:** El subconjunto de tareas del Product Backlog que el equipo selecciona y se compromete a terminar de forma exclusiva durante el Sprint actual.
*   **Sprint Review (Revisión del Sprint):** Una reunión al final del Sprint donde el equipo muestra el software real y funcional al cliente o a los stakeholders. Sirve para demostrar el progreso y recibir feedback inmediato.

---

## 3. Kanban: Organización Visual del Flujo

**Kanban** (palabra japonesa que significa "tarjeta visual") es un método enfocado en **gestionar y optimizar el flujo de trabajo continuo**. A diferencia de Scrum, no se divide en periodos de tiempo fijos, sino que se centra en ver cómo se mueven las tareas desde que nacen hasta que se completan.

### Cómo se usa para organizar tareas
*   **El Tablero Kanban:** Es la herramienta principal. Se divide en columnas que representan las etapas del proceso (por ejemplo: *Por Hacer, En Progreso, En Pruebas, Listo*). Cada tarea es una tarjeta que se mueve de izquierda a derecha.
*   **Límites de WIP (Work In Progress):** Es la regla de oro de Kanban. Se define un número máximo de tareas que pueden estar en una columna al mismo tiempo (ej. máximo 3 tareas en "En Progreso"). Si se llega al límite, nadie puede empezar una nueva tarea; el equipo debe unirse para desbloquear y terminar lo que ya está empezado. Esto evita el cuello de botella y el desgaste del equipo.

---

## 4. Diferencias entre Scrum y Kanban

| Característica | Scrum | Kanban |
| :--- | :--- | :--- |
| **Enfoque principal** | Cumplir un objetivo en un tiempo fijo (Sprint). | Mantener un flujo de trabajo continuo y optimizado. |
| **Roles** | Roles fijos y obligatorios (Product Owner, Scrum Master, Devs). | No requiere roles específicos (se adapta a la estructura actual). |
| **Métricas clave** | *Velocity* (cuántos puntos de historia se terminan por Sprint). | *Lead Time* y *Cycle Time* (cuánto tarda una tarea de principio a fin). |
| **Planificación** | Se planifica al inicio de cada Sprint y el plan idealmente no cambia. | Planificación continua. Se añaden tareas al tablero a medida que quedan huecos libres. |
| **Cambios** | No se permiten cambios drásticos dentro del Sprint en curso. | Se pueden añadir o repriorizar tareas en cualquier momento. |

---

## 5. Cuándo usar cada metodología (Casos de Uso)

### Cuándo usar Scrum
Es ideal para proyectos donde estás **construyendo un producto desde cero o añadiendo grandes bloques de funcionalidades**. 
*   *Ejemplo:* El desarrollo inicial de esta misma aplicación fullstack. Necesitas hitos claros, entregas semanales o quincenales para ver el progreso, y una estructura que te obligue a cerrar etapas de desarrollo (diseño de API, autenticación, vistas frontend).

### Cuándo usar Kanban
Es ideal para **entornos de soporte, mantenimiento, operaciones o equipos muy maduros donde las prioridades cambian día a día**.
*   *Ejemplo:* Un equipo que gestiona los bugs de producción de una app ya lanzada, o un equipo de DevOps. No puedes planificar un Sprint de dos semanas si a mitad del segundo día se cae el servidor principal; necesitas la flexibilidad de Kanban para meter esa tarea urgente al tablero y resolverla de inmediato.