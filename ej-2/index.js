//* 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement('div')
document.body.appendChild(divVacio)
divVacio.textContent = 'mi divVacío'

//* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divp = document.createElement('div')
const p = document.createElement('p')
p.textContent = 'soy el parrafo del div'

divp.appendChild(p)
document.body.appendChild(divp)

//* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const myDiv6p = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  myDiv6p.appendChild(p)
}
document.body.appendChild(myDiv6p)

//* 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pDinamico = document.createElement('p')
pDinamico.textContent = 'soy dinamico!'
document.body.appendChild(pDinamico)

//* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const contH2 = document.querySelector('.fn-insert-here')
contH2.textContent = 'Wubba Lubba dub dub'

//* 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
  document.body.appendChild(ul)
}
//* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminados = document.querySelectorAll('.fn-remove-me')
for (eliminar of eliminados) {
  eliminar.remove()
}
//* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const allDiv = document.querySelectorAll('div')
const pMid = document.createElement('p')
pMid.textContent = 'Voy en medio!'
document.body.insertBefore(pMid, allDiv[1])

//* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertDiv = document.querySelectorAll('div.fn-insert-here')
for (const div of insertDiv) {
  const parrafo = document.createElement('p')
  parrafo.textContent = 'voy dentro!'
  div.appendChild(parrafo)
}
