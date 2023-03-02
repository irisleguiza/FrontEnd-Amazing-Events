
function createTemplate(){
  let events=data.events
  let templates=[]

  for(let element of events){
    templates.push(template(element.image,element.name,element.description,element.price))
  }

  let card =document.getElementById("card-events")
  card.innerHTML=templates.join("")
}
createTemplate()
  
  
  
  