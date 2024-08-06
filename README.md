![Imagen](./assets/img/sh2.jpg)

- [Super Hero](#super-hero)
  - [Requerimientos](#requerimientos)
  - [Pasos](#pasos)
  - [Resultado](#resultado)

# Super Hero

- Descripción

  En este Desafio ha sido contratado para crear una aplicación dinámica que permita a los usuarios buscar un superhéroe y visualizar información referente al personaje buscado.


  ---

## Requerimientos

1. Crear la estructura básica para la página web implementando HTML, que incluya un formulario de búsqueda.
2. Agregar estilos mediante frameworks o librería de CSS.

3. Una vez ingresado el número del héroe a buscar y después de realizar un click sobre
el botón de búsqueda, se debe capturar y validar la información para evitar búsquedas
que contengan algún texto diferente a números y mostrar la información
dinámicamente mediante la librería jQuery y CanvasJS con un gráfico de pastel. Para lograr todo esto se debe: 

* Capturar la información ingresada mediante eventos del DOM con jQuery.
* Implementar funciones para separar la captura de la información ingresada
por el usuario con la consulta a la API.
* Comprobar la información ingresada por el usuario, la cual, solo debe ser un
número.
* Consultar la API mediante AJAX con la sintaxis de jQuery.

* Renderizar la información recibida por la API dinámicamente utilizando
tarjetas (card) de Bootstrap.
* Utilizar ciclos y métodos para arreglos u objetos que permitan recorrer, ordenar
y mostrar la información.
* Emplear la librería de gráficos CanvasJS, para mostrar dinámicamente
información específica de cada superhéroe.
* Implementar estructuras condicionales para generar alertas cuando existan
errores en la búsqueda.
   

   ---



## Pasos

1. Se Crea la carpeta assets con el contenido del proyecto y se agregan los enlaces de boostrap, jquery, js.

![Imagen](./assets/img/Captura%20de%20pantalla%202024-08-05%20213404.png)



2.  Agregamos los estilos css en este proyecto trabajaremos con sass.


3. Agregamos las imagenes, el nav, la HeroSection el imput y Capturamos la informacion mediante el Dom en el archivo js donde ira la Card de nuestro proyecto.
   ![Imagen](./assets/img/06%20154439.png)
   

4. Hacemos el llamado a la api mediante ajax
   ![Imagen](./assets/img/06%20155631.png)

5. Agregamos parametros al imput para que la informacion ingresada por el usuario sea solo un
número.
![Imagen](./assets/img/06%20154913.png)
 
6. Renderizamos la información recibida por la API utilizando una card de Bootstrap.
   ![Imagen](./assets/img/06%20160616.png)

7. Utilizamos métodos para los arreglos y objetos para recorrer la información.
   ![Imagen](./assets/img/06%20161248.png)

8. Empleamos la librería de gráficos CanvasJS, para mostrar dinámicamente
información específica de cada superhéroe. (En este caso remmplazaremos el grafico de pastel por uno
de barra para un mejor diseño ya que en el grafico de pastel se pierden elementos importantes a la hora de representar la informacion de los stats de los personajes)
 ![Imagen](./assets/img/06%20153922.png)

1. Implementar una condicion para generar una alerta cuando existan errores en la búsqueda.
   ![Imagen](./assets/img/06%20162506.png)
 
---

## Resultado

![Imagen](./assets/img/06%20153302.png)
















