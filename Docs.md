

# BUSCADOR

El componente **Buscador.js** consigue el arreglo de articulos mediante props, con el `setArticulos` cambia el state según los resultados de la función `getArticlesBySearch`, esta función va a buscar en el body/descripción de los articulos solamente, no en el titulo.

El useEffect en **Buscador.js** lo pusimos para que si el input está vacío se reestablezcan todos los articulos en la pantalla.