# Trivia 15 dias

Como parte del proyecto Evuca se nos asignó la tarea de crear un sitio web en el que aplicar los conocimientos adquiridos hasta el momento. Este resulta en un punto de inflexión deseado para fortalecer las bases de HTML, CSS y JavaScript.
Para llevarlo a cabo se formaron grupos de 3 a 4 integrantes y se fijo un plazo máximo de entrega de 15 dias.

### Requerimientos mínimos

- Al menos tres archivos .html y .js respectivamente
- Usar Bootstrap y ademas un archivo css global para modificar algunos estilos
- No usar la keyword var en ningún momento
- Una sección que permita cargar datos
- Los datos cargados se deben poder modificar
- Una sección que muestre contenido aleatorio proveniente de alguna API al recargar la pagina.
- Un formulario que al enviarlo verifique que los datos sean correctos y lo muestre.
- Consumir datos de al menos 2 de las APIs provistas.

### Objetivo propuesto por el grupo

Crear un juego de preguntas utilizando [Open Trivia Database](https://opentdb.com/).
Dado que el idioma de esta API es inglés se utilizará [Libre Translate](https://libretranslate.com/) para la traducción.
Ademas se propuso implementar un sistema de pistas mediante imágenes obtenidas de [Unsplash](https://unsplash.com/developers) realizando la búsqueda con alguna palabra clave.

### Tareas a completar

- [x] Generar estructura básica del proyecto con las paginas index, game y about.
- [x] Seleccionar un diseño general y consistente.
- [x] Implementar un sistema de navegación para el sitio.
- [x] Completar sección principal:
  - [x] Diseño del menú del juego.
  - [x] Implementar la carga de datos del jugador.
  - [x] Almacenar los datos recibidos en local storage.
  - [x] Permitir al usuario la modificación de los datos.
  - [x] Permitir la selección de opciones para el juego.
- [ ] Completar sección del juego:
  - [x] Diseño de la interfaz del juego.
  - [x] Solicitar y almacenar datos de Open Trivia Database.
  - [x] Tomar la pregunta normalizada y enviarla a Libre Translate y almacenar su respuesta.
  - [ ] Realizar una petición de imágenes utilizando como palabra clave la respuesta correcta.
  - [ ] Mostrar la imagen recibida de Unsplash cuando el usuario solicite una pista.
  - [ ] Implementar un sistema de niveles u objetivo para el juego.
- [ ] Completar sección sobre nosotros:

  - [ ] Diseño de la sección con información sobre el sitio y sus autores.
  - [ ] Integrar un formulario de contacto.
  - [ ] Implementar un sistema que verifique que los datos introducidos sean correctos.
  - [ ] Notificar al usuario si el formulario a sido enviado correctamente o presenta errores.

- [ ] Extra:
  - [ ] Adversarios a vencer (API del FBI)
  - [ ] Publico (Fotos de perritos y gatitos)

### Comandos para correr la aplicacion

1. Instalar dependencias
    ```bash
    $ npm install
    ```

2. Compilar el proyecto
    ```bash
    $ npm run build
    ```

3. Opcional para correr el servidor de desarrollo
    ```bash
    $ npm run dev
    ```
