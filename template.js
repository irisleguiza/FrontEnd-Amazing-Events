
let template=(image,title,description,price)=>{
  return`
  <div class="col">
    <div class="card h-100">
      <img src="${image}" class="card-img-top" alt=""/>
      <div class="card-body">
          <h5 class="card-title"> ${title} </h5>
          <p class="card-text"> ${description} </p>
      </div>
      <div class="card-footer">
          <small class="text-muted"> Price $ ${price} </small>
          <a class= "details" href="details.html">See More</a>
      </div>
    </div>
  </div>`
}

