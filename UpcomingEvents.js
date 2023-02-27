
function printUpcomingEvents(){
    let events=data.events
    let currentDate= date.currentDate
    let templates=[]

    for (let future of events) {
        if (future.date > currentDate){
            console.log(future)
            templates.push(template(future.image,future.name,future.description,future.price))
        }
        console.log(templates)
    }
    let card= document.getElementById("UpcomingEvents");
    card.innerHTML=templates.join(""); 

}

printUpcomingEvents()
