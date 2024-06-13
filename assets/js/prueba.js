//const btn = document.getElementById("boton");
const cardSection = document.getElementById("card");

$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    const id = $("#heroes").val();
    $.ajax({
      type: "GET",
      url: `https://www.superheroapi.com/api.php/4905856019427443/${id}`,
      dataType: "json",
      success: function (character) {
        console.log(character);

        cardSection.innerHTML = "";

        const card = document.createElement("div");
        card.classList.add("card", "mb-3");

        const row = document.createElement("div");
        row.classList.add("row", "g-0");

        const colImage = document.createElement("div");
        colImage.classList.add("col-md-6");

        const image = document.createElement("img");
        image.classList.add("img-fluid", "rounded-start");
        image.src = character.image.url;
        image.alt = "...";

        colImage.appendChild(image);

        const colDetails = document.createElement("div");
        colDetails.classList.add("col-md-6");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = character.name;

        const connection = document.createElement("p");
        connection.classList.add("card-text");
        connection.textContent = `Conexiones: ${character.connections["group-affiliation"]}`;

        const publisher = document.createElement("p");
        publisher.classList.add("card-text");
        publisher.textContent = `Publicado por: ${character.biography.publisher}`;

        const occupation = document.createElement("p");
        occupation.classList.add("card-text");
        occupation.textContent = `Ocupación: ${character.work.occupation}`;

        const firstAppearance = document.createElement("p");
        firstAppearance.classList.add("card-text");
        firstAppearance.textContent = `Primera aparición: ${character.biography["first-appearance"]}`;

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
        console.dirxml(cardSection);

        /*=============================================
        =                   Grafico                    =
        =============================================*/


        const chart = new CanvasJS.Chart("chartContainer", {
            theme: "dark2", // "light1", "light2", "dark1"
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: character.name
            },
            axisX: {
              margin: 10,
              labelPlacement: "inside",
              tickPlacement: "inside"
            },
            axisY2: {
              title: "Views (in billion)",
              titleFontSize: 14,
              includeZero: true,
              suffix: ""
            },
            data: [{
              type: "bar",
              yValueFormatString: "#,###.##",
              indexLabel: "{y}",
              axisYType: "secondary",
              dataPoints: [
                { label: "inteligencia", y: Number(character.powerstats.intelligence) },
                { label: "Uptown Funk", y: 4.96 },
                { label: "Wheels on the Bus", y: 5.36 },
                { label: "Phonics Song with Two Words", y: 5.36 },
                { label: "See You Again", y: 5.94 },
                { label: "Shape of You", y: 6.02 },
               
              ]
            }]
          });
          chart.render();
        
        
      },
      error: function (error) {
        console.log("Hubo un error con la conexión a la API");
      },
    });
  });
});


