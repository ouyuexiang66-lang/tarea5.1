# Gestión de Formularios e Interacción

En el proyecto **SliceTime**, la interacción con el usuario se gestiona mediante **Componentes Controlados**. Esto garantiza que el estado de la interfaz esté siempre sincronizado con los datos de React.

## Implementación de Formularios Controlados

Hemos optado por formularios controlados para tener un control total sobre la validación y el envío de datos.

### Características principales:
1. **Estado Unificado**: Utilizamos un único objeto `useState` para gestionar todos los campos del formulario, lo que simplifica la escalabilidad.
2. **Manejador Genérico**: La función `handleChange` utiliza el atributo `name` del input para actualizar la propiedad correspondiente del estado de forma dinámica:
   ```javascript
   setFormData({ ...formData, [e.target.name]: e.target.value });