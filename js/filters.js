let templateFilt=(data)=>{
   return`
   <div class="col">
     <div class="card h-100">
       <img src="${data.image}" class="card-img-top"/>
       <div class="card-body">
           <h5 class="card-title"> ${data.name} </h5>
           <p class="card-text"> ${data.description} </p>
       </div>
       <div class="card-footer">
           <small class="text-muted"> Price $ ${data.price} </small>
           <a class= "details" href="./details.html?_id=${_id}" title="${data.name}">See More</a>
       </div>
     </div>
   </div>`
 }

let printFilter=(id_html,array_events)=>{
   let selector=document.querySelector(`#${id_html}`)
   let templates=array_events.map(templateFilt).join("")
   selector.innerHTML=templates
   console.log(templates)
}

let captureData=(id_text,id_checks, array_events)=>{
   let inputText=document.querySelector(`#${id_text}`).value
   let inputChecks=Array.from(document.querySelectorAll(`#${id_checks}:checked`)).map(each=>each.value)

   let eventFilter=array_events.filter(each=>{
      return((
         each.name.toLowerCase().includes(inputText.toLowerCase().trim())
      )&&(
         each.lengh === inputChecks.includes(each.category)
      ))
   })

  printFilter("card-events",eventFilter)
}

 document.querySelector("#name").addEventListener("keyup", ()=> captureData("name","form-check-input", data.events))

 