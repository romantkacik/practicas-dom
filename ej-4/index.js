//* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const btn = document.createElement('button')
btn.id = 'btnToClick'
btn.addEventListener('click', (e) => console.log(e))
document.body.appendChild(btn)

//* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector('.focus')
input.addEventListener('focus', (e) => console.log(e.target.value))

//* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input2 = document.querySelector('.value')
input2.addEventListener('input', (e) => console.log(e.target.value))
