function dimeTipoMotor () {

  const tipomotor = document.querySelector('#ej1').value
  const res = document.querySelector('#res1')

  // comprobar string 

  switch (tipomotor) {
    case '0' :
      res.innerHTML = '<p><strong> RESULTADO : No hay establecido un valor definido para el tipo de bomba </strong></p>'
      break;
    case '1' :
      res.innerHTML = '<p><strong> RESULTADO : La bomba es una bomba de agua </strong></p>'
      break;
    case '2' :
      res.innerHTML = '<p><strong> RESULTADO : La bomba es una bomba de gasolina </strong></p>'
      break;
    case '3' :
      res.innerHTML = '<p><strong> RESULTADO : La bomba es una bomba de hormigón </strong></p>'
      break;
    case '4' :
      res.innerHTML = '<p><strong> RESULTADO : La bomba es una bomba de pasta alimenticia </strong></p>'
      break;
    default :
      res.innerHTML = '<p class="error" >ERROR : No existe un valor válido para tipo de bomba</p>'
      break;
  } 

}

document.querySelector('#form1').addEventListener("submit", (e) => {
  e.preventDefault()
})

document.querySelector('#go1').addEventListener("click" , dimeTipoMotor)

function validarImpar () {

  const numero = document.querySelector('#ej2').value
  const res = document.querySelector('#res2')

  if (numero < 0 ){ 
    if (numero % 2 === 0) {
      res.innerHTML = '<p><strong> RESULTADO : El numero es PAR </strong></p>'
    }
    else {
      res.innerHTML = '<p><strong> RESULTADO : El numero es IMPAR </strong></p>'
    }
  }
  else {
    res.innerHTML = '<p class="error"> ERROR : 0 no es un valor válido para esta operación </strong></p>'
  }

}

document.querySelector('#form2').addEventListener("submit", (e) => {
  e.preventDefault()
})

document.querySelector('#go2').addEventListener("click" , validarImpar)

function nombreAqui () {

  const nombre = document.querySelector('#ej3').value.trim()
  const footer = document.createElement("footer")
  footer.setAttribute("id", "pie");
  document.body.appendChild(footer);

  if ( nombre.length > 0) {
    if (isNaN(nombre)) {
      const p = document.createElement("p"); 
      const txt = document.createTextNode(nombre);
      p.appendChild(txt);

      document.getElementById("pie").appendChild(p);
      document.querySelector('#error1').innerHTML = '<p id="error1">SCROLLEA ABAJO</p>'
    }
    else {
      document.querySelector('#error1').innerHTML = '<p id="error2">ERROR : El valor introducido no es válido</p>'
    }
  }
  else {
    document.querySelector('#error1').innerHTML = '<p id="error1">ERROR : Debes introducir un valor</p>'
  }

  
}

document.querySelector('#form3').addEventListener("submit", (e) => {
  e.preventDefault()
})

document.querySelector('#go3').addEventListener("click" , nombreAqui)

function calcularArea () {

  const base = document.querySelector('#ej4-1').value
  const altura = document.querySelector('#ej4-2').value
  const res = document.querySelector('#res4')

  if (!isNaN(base)) {
      if(!isNaN(altura)) {
        resultado = (base*altura) / 2
        res.innerHTML = `<p><strong> RESULTADO : ${resultado} </strong></p>`
      }
      else {
        res.innerHTML = `<p class="error"> ERROR : El valor ALTURA introducido no es válido</p>`
      }
  }
  else {
    res.innerHTML = `<p class="error"> ERROR : El valor BASE introducido no es válido</p>`
  }


}

document.querySelector('#form4').addEventListener("submit", (e) => {
  e.preventDefault()
})

document.querySelector('#go4').addEventListener("click" , calcularArea)
