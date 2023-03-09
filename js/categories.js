let categories=[]

data.events.forEach(each =>{
    if(!categories.includes(each.category)) {
        categories.push(each.category)
    }
})
    // console.log(categories)


let templateChecks=(category)=>{
    return`
    <div class=""container-fluid d-flex justify-content-start"">
          <input class="form-check-input" type="checkbox"  onclick='captureData("name","form-check-input", data.events)' name="category" value="${category}" id="${category}">
          <label class="form-check-label" for="${category}">${category}</label>
    </div>     
          `
}

let printCkecks=(id_html,categories)=>{
    let selector=document.querySelector(`#${id_html}`)
    let templates=categories.map(templateChecks).join("")
    selector.innerHTML=templates
    
}

printCkecks('checks-container', categories)