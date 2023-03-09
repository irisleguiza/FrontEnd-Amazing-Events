let template=(image,name,description,price,_id)=>{
  return`
  <div class="col">
    <div class="card h-100">
      <img src="${image}" class="card-img-top"></>
      <div class="card-body">
          <h5 class="card-title"> ${name}</h5>
          <p class="card-text"> ${description}</p>
      </div>
      <div class="card-footer">
          <small class="text-muted">Price $ ${price}</small>
          <a class= "details" href="./details.html?_id=${_id}" title="${name}">See More</a>
      </div>
    </div>
  </div>`
}

function createTemplate(){
  let events=data.events
  let templates=[]

  
   for(let element of events){
     templates.push(template(element.image,element.name,element.description,element.price,element._id))
   }


  let card =document.getElementById("card-events")
  card.innerHTML=templates.join("")
}
createTemplate()
  
