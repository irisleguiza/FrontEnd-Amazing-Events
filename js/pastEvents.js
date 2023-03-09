
function printPastEvents(){
    let events= data.events
    let currentDate= data.currentDate
    let templates=[]

    for(let past of events) {
        if (past.date < currentDate){
            console.log(past)
            templates.push(template(past.image,past.name,past.description,past.price,past._id))
        }
        console.log(templates)
    }
    let cardPast= document.getElementById("PastEvents")
    cardPast.innerHTML=templates.join("") 

}

printPastEvents();
