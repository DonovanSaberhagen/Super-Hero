//const btn = document.getElementById("boton");
const cardSection = document.getElementById("card");

$(document).ready(function() {
  $('#boton').on('click', function() {
    $.ajax({
      type: "GET",
      url: "https://www.superheroapi.com/api.php/4905856019427443/${id}",
      dataType: "json",
      success: function(datosApi) {
        console.log(datosApi);

        
        cardSection.innerHTML = "";

        datosApi.data.forEach(character => {
          const card = document.createElement("div");
          card.classList.add("card", "mb-3", "style", "max-width: 540px;");

          const row = document.createElement("div");
          row.classList.add("row", "g-0");

          const colImage = document.createElement("div");
          colImage.classList.add("col-md-4");

          const image = document.createElement("img");
          image.classList.add("img-fluid", "rounded-start");
          image.src = character.image;
          image.alt = "...";

          colImage.appendChild(image);

          const colDetails = document.createElement("div");
          colDetails.classList.add("col-md-8");

          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");

          const title = document.createElement("h5");
          title.classList.add("card-title");
          title.textContent = character.name;

          const connection = document.createElement("p");
          connection.classList.add("card-text");
          connection.textContent = `Conexiones: ${character.connections['group-affiliation']}`;

          const publisher = document.createElement("p");
          publisher.classList.add("card-text");
          publisher.textContent = `Publicado por: ${character.biography.publisher}`;

          const occupation = document.createElement("p");
          occupation.classList.add("card-text");
          occupation.textContent = `Ocupación: ${character.work.occupation}`;

          const firstAppearance = document.createElement("p");
          firstAppearance.classList.add("card-text");
          firstAppearance.textContent = `Primera aparición: ${character.biography['first-appearance']}`;

          const height = document.createElement("p");
          height.classList.add("card-text");
          height.textContent = `Altura: ${character.appearance.height.join(" / ")}`;

          const weight = document.createElement("p");
          weight.classList.add("card-text");
          weight.textContent = `Peso: ${character.appearance.weight.join(" / ")}`;

          const aliases = document.createElement("p");
          aliases.classList.add("card-text");
          aliases.textContent = `Alianzas: ${character.biography.aliases.join(", ")}`;

          cardBody.appendChild(title);
          cardBody.appendChild(connection);
          cardBody.appendChild(publisher);
          cardBody.appendChild(occupation);
          cardBody.appendChild(firstAppearance);
          cardBody.appendChild(height);
          cardBody.appendChild(weight);
          cardBody.appendChild(aliases);

          colDetails.appendChild(cardBody);

          row.appendChild(colImage);
          row.appendChild(colDetails);

          card.appendChild(row);

          
          cardSection.appendChild(card);
        });
      },
      error: function(error) {
        console.log("Hubo un error con la conexión a la API");
      }
    });
  });
});


