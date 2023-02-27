
function printPastEvents(){
    let events=data.events
    let currentDate= date.currentDate
    let templates=[]

    for (let past of events) {
        if (past.date < currentDate){
            console.log(past)
            templates.push(template(past.image,past.name,past.description,past.price))
        }
        console.log(templates)
    }
    let cardPast= document.getElementById("PastEvents")
    cardPast.innerHTML=templates.join("") 

}

printPastEvents()