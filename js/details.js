let datos=data.events;
let query= location.search
let params= new URLSearchParams(query)
let id_query=params.get(`_id`)


function cardDetails(dato){
    return`
        <div class="card mb-3" style="max-width:70%; max-heigth:40%;">
          <div class="row g-0">     
              <div class="col-md-4">
                 <img src=${dato.image} class="img-fluid rounded-start"></>
              </div>
              <div class="col-md-8">
                <div class="card-body-details">
                <h4 class="card-title-details">${dato.name}</h4>
                <h5 class="text-price"> Price $${dato.price}</h5>
                <h6 class="text-place">Place: ${dato.place}</h6>
                <p class="card-text-details">${dato.date}</p>
                <p class="card-text-details">${dato.description}</p>
                </div>
              </div>
          </div>
        </div>`
}

function printDetails(id, dato, array_data){
    let container= document.querySelector(id)
    let otherDato= array_data.find(each => each._id == dato)
    let details=cardDetails(otherDato)
    container.innerHTML=details
}

printDetails(`#card-details`,id_query,datos)