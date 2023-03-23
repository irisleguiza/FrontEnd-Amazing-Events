const $cards = document.getElementById("card-container");
const $search = document.getElementById("search-container");
const $categorys = document.getElementById("checks-container");


let eventos;

fetch(' https://mindhub-ab35.onrender.com/api/amazing-events')
  .then(data => data.json())
  .then(data => {
    eventos = data.events;
    crearCheckbox(eventos, $categorys)
    imprimirCards(eventos, $cards)
    $search.addEventListener('keyup', filtrar)
    $categorys.addEventListener('change', filtrar)
  })
  

function crearCheckbox(eventos, contenedor) {
  let fn = eventos => eventos.category
  let categorias = new Set(eventos.map(fn))
  categorias.forEach(categ => {
    contenedor.innerHTML += `
    <label class="form-check-label" for="${categ}">
    <input class="form-check-input" value="${categ}" type="checkbox" role="switch" id="${categ}">${categ}
    </label> 
    `
  })
}

function crearCard(eventos) {
  let div = document.createElement('DIV')
  div.innerHTML += `
  <div class="col">
  <div class="card h-100">
    <img src="${eventos.image}" class="card-img-top"></>
    <div class="card-body">
        <h5 class="card-title"> ${eventos.name}</h5>
        <p class="card-text"> ${eventos.description}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">U$D ${eventos.price}</small>
        <a class= "details" href="/html/details.html?_id=${eventos._id}" title="${eventos.name}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
      </svg></a>
    </div>
  </div>
</div>
    `
  return div
}
function imprimirCards(eventos, contenedor) {
  contenedor.innerHTML = ''
  if (eventos.length > 0) {
    let fragment = document.createDocumentFragment()
    eventos.forEach(eventos => fragment.appendChild(crearCard(eventos)))
    contenedor.appendChild(fragment)
  }
  else {
    contenedor.innerHTML = `<h2>no matches!</h2>`
  }
}

function filtrar() {
  let checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(ele => ele.value)
  let filtradosPorCategoria = eventos.filter(eventos => checked.includes(eventos.category) || checked.length == 0)
  let filtradosPorSearch = filtradosPorCategoria.filter(iteracion => iteracion.name.toLowerCase().includes($search.value.toLowerCase()))
  imprimirCards(filtradosPorSearch, $cards)
}

