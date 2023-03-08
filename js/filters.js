
let captureData=(id_text,id_checks)=>{
   let inputText=document.querySelector(`#${id_text}`).value
   let inputChecks=Array.from(document.querySelectorAll(`#${id_checks}:checked`)).map(each=>each.value)
   console.log(inputChecks)
   console.log(inputText);
}
 
 
 document.querySelector("#name").addEventListener("keyup", ()=> captureData("name","form-check-input"))

