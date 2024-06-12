const btn = document.getElementById("form")
const cardSection = document.getElementById("card");
const graficoSection = document.getElementById("grafico");



$(document).ready(function(){
    $('btn').on('click', function(){
      $.ajax({
        type: "GET",
        url: "https://www.superheroapi.com/api.php/4905856019427443/${id}",
        dataType: "json",
        success: function(datosApi) {
          console.log(datosApi.data);
          datosApi.data.forEach(Characters => {
            cardSection.innerHTML += (`<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${characters.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title">${characters.name}</h5>
    <p class="card-text"><strong>Conexiones:</strong> ${characters.connections['group-affiliation']}</p>
    <p class="card-text"><strong>Publicado por:</strong> ${characters.biography.publisher}</p>
    <p class="card-text"><strong>Ocupación:</strong> ${characters.work.occupation}</p>
    <p class="card-text"><strong>Primera aparición:</strong> ${characters.biography['first-appearance']}</p>
    <p class="card-text"><strong>Altura:</strong> ${characters.appearance.height.join(" / ")}</p>
    <p class="card-text"><strong>Peso:</strong> ${characters.appearance.weight.join(" / ")}</p>
    <p class="card-text"><strong>Alianzas:</strong> ${characters.biography.aliases.join(", ")}</p>
    </div>
    </div>
    </div>
    </div>`);
            
          });
        },
        error: function(error) {
          console.log("Hubo un error con la conexión a la API");
        }
      });
    });
  });


  /*Characters.forEach(characters => {
    let characterCard = `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${characters.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title">${characters.name}</h5>
    <p class="card-text"><strong>Conexiones:</strong> ${characters.connections['group-affiliation']}</p>
    <p class="card-text"><strong>Publicado por:</strong> ${characters.biography.publisher}</p>
    <p class="card-text"><strong>Ocupación:</strong> ${characters.work.occupation}</p>
    <p class="card-text"><strong>Primera aparición:</strong> ${characters.biography['first-appearance']}</p>
    <p class="card-text"><strong>Altura:</strong> ${characters.appearance.height.join(" / ")}</p>
    <p class="card-text"><strong>Peso:</strong> ${characters.appearance.weight.join(" / ")}</p>
    <p class="card-text"><strong>Alianzas:</strong> ${characters.biography.aliases.join(", ")}</p>
    </div>
    </div>
    </div>
    </div>`
    
    });
    */
    

      const stats = {
        durability: parseInt(post.powerstats.durability) || 0,
        speed: parseInt(post.powerstats.speed) || 0,
        strength: parseInt(post.powerstats.strength) || 0,
        inteligence: parseInt(post.powerstats.inteligence) || 0,
        combat: parseInt(post.powerstats.combat) || 0,
        power: parseInt(post.powerstats.power) || 0,
      };