
function createTemplate(){
  let events=data.events
  let templates=[]

  for(let element of events){
    console.log(element)
    templates.push(template(element.image,element.name,element.description,element.price))
  }
  console.log(templates)

  let card =document.getElementById("card-events")
  card.innerHTML=templates.join("")
}
createTemplate()
  
  
  
  