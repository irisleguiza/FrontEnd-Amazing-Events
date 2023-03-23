
let $filaUno = document.getElementById("filaUno");
let $filaDos = document.getElementById("filaDos");
let $filaTres = document.getElementById("filaTres");

let eventosFuturos;
let eventosPasados;

// API
fetch(' https://mindhub-ab35.onrender.com/api/amazing-events')
  .then((data) => data.json())
  .then((data) => {
    
    let eventos = data.events;
    let fechaActual = data.currentDate;

    
    eventosFuturos = eventos.filter((objeto) => objeto.date > fechaActual);
    eventosPasados = eventos.filter((objeto) => objeto.date < fechaActual);

    
    logicaTablaUno();
    logicaTablas(eventosFuturos, "estimate", $filaDos);
    logicaTablas(eventosPasados, "assistance", $filaTres);
  })
  .catch((error) => console.log(error));

function printTableOne(container, prop2, prop1, prop3) {
  
  container.innerHTML += `
    <tr>
      <td>${prop1[0].name} with ${prop1[0].percentageAssitance.toFixed(2)}%.</td>
      <td>${prop2[0].name} with ${prop2[0].percentageAssitance.toFixed(2)}%.</td>
      <td>${prop3[0].name} with ${prop3[0].capacity.toLocaleString()}.</td>
    </tr>
    `;
}

function logicaTablaUno() {
  eventosPasados.map((i) => {
    i.percentageAssitance = (i.assistance / i.capacity) * 100;
  });

  
  let minorAssistance = [...eventosPasados].sort(
    (a, b) => a.percentageAssitance - b.percentageAssitance
  );
  let majorAssistance = [...eventosPasados].sort(
    (a, b) => b.percentageAssitance - a.percentageAssitance
  );
  // Esto es para que me ordene por mayor capacidad.
  let majorCapacity = [...eventosPasados].sort(
    (a, b) => b.capacity - a.capacity
  );
  
  printTableOne($filaUno, minorAssistance, majorAssistance, majorCapacity);
}

function printTables(container, array) {
  array.forEach((e) => {
    
    container.innerHTML += `
    <tr>
      <td>${e.category}</td>
      <td>$${e.earn.toLocaleString()}</td>
      <td>${e.percentageAssitance.toFixed(2)}%</td>
    </tr>
    `;
  });
}
function logicaTablas(typeEvent, prop, container) {
  
  eventosFuturos.map((i) => {
    i.percentageAssitance = (i.estimate / i.capacity) * 100;
  });
  
  typeEvent.map((e) => {
    e.earn = e[prop] * e.price;
  });

  printTables(container, typeEvent);
}
       