
function printUpcomingEvents(){
    let events= data.events
    let currentDate= data.currentDate
    let templates=[]

    for(let future of events) {
        if (future.date > currentDate){
            console.log(future)
            templates.push(template(future.image,future.name,future.description,future.price,future._id))
        }    
            console.log(templates)
    }
    let cardFuture= document.getElementById("UpcomingEvents")
    cardFuture.innerHTML=templates.join("")

}

printUpcomingEvents();
