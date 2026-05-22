# Hooks en SliceTime

En este proyecto utilizamos los Hooks de React para gestionar la lógica de la pizzería de forma eficiente.

### useState
Lo usamos para **guardar datos que cambian** en la pantalla. En nuestro `useCart`, lo usamos para mantener la lista de pizzas que el usuario ha seleccionado.

### useEffect
Sirve para ejecutar código en momentos específicos (efectos secundarios). 
- Usamos uno para **leer del LocalStorage** cuando abres la web por primera vez.
- Usamos otro para **guardar automáticamente** los cambios cada vez que el carrito se actualiza.

### useMemo
Sirve para **memorizar un valor calculado**. Lo usamos para sumar el precio total de las pizzas. Así, React no tiene que volver a hacer la suma cada vez que mueves el ratón o escribes en un input; solo lo hace si el carrito cambia.

### useCallback
Sirve para **memorizar una función**. Lo usamos en `addToCart` para que la función sea siempre la misma. Esto ayuda a que los componentes hijos (como los botones) no se vuelvan a dibujar si no es necesario.

### Custom Hook (`useCart`)
Hemos creado nuestro propio hook para separar la lógica del carrito de la parte visual. De esta forma, cualquier página (Menú o Carrito) puede usar estas funciones sin repetir código.