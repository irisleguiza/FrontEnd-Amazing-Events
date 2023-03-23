let details = document.getElementById("card-details");

function idPrinter(i, container) {
  container.innerHTML +=
    `
        <article class="only_card" >
        <img
          src="${i.image}"
          class="card-img2"
          alt="${i.name}"
        />
        <div class="card-body2">
            <h5 class="card-title2">${i.name}</h5>
            <p class="card-text2">
            Date: ${i.date}
            </p>
            <p class="card-text2">
            Place: ${i.place}
            </p>
            <p class="card-text2">
            Category: ${i.category}
            </p>
            <p class="card-text2">
            Category: ${i.capacity}
            </p>
            <p class="card-text2">
            Assistance: ${i.assistance}
            </p>
          <div class="buttons-cardsx">
          <button class="btn btn-dark">U$D${i.price}</button>
          <a href="#" class="btn btn-danger">Buy</a>
        </div>
        </div>
      </article>
        `
}

function idPrinter2(i, container) {
  container.innerHTML += `
        <article class="only_card" >
        <img
          src="${i.image}"
          class="card-img2"
          alt="${i.name}"
        />
        <div class="card-body2">
            <h5 class="card-title2">${i.name}</h5>
            <p class="card-text2">
            Date: ${i.date}
            </p>
            <p class="card-text2">
            Place: ${i.place}
            </p>
            <p class="card-text2">
            Category: ${i.category}
            </p>
            <p class="card-text2">
            Category: ${i.capacity}
            </p>
            <p class="card-text2" id="hideDiv">
            Estimate: ${i.estimate}
            </p>
          <div class="buttons-cardsx">
          <button class="btn btn-dark">U$D${i.price}</button>
          <a href="#" class="btn btn-danger">Buy</a>
        </div>
        </div>
      </article>
        `
}
let dia
let eventos

fetch(' https://mindhub-ab35.onrender.com/api/amazing-events')
  .then(data => data.json())
  .then(data => {
    dia = data.date
    eventos = data.events
    printid()
  })
 

  function printid() {
  let theId = location.search.slice(4)
  let filtro = eventos.find(e => e.id === theId)
  if (filtro.date < dia) {
    idPrinter(filtro, details)
  }
  else {
    idPrinter2(filtro, details)
  }
}  
