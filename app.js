
let boyNames, girlNames

fetch('./nevek.json')
.then(response => response.json())
.then(results => {
  console.log(results)
  boyNames = results.filter(result => result.nem === 1).map(boyNames => boyNames.nev)
  console.log(boyNames)
  
  girlNames = results.filter(result => result.nem === 2).map(girlNames => girlNames.nev)
  console.log(girlNames)      
})

function getRandomSec(min, max) {
  return Math.floor(Math.random() * max) + min
}  

function getRandomSec2(min, max) {
  return Math.floor(Math.random() * max) + min
}  

document.querySelector('button').addEventListener('click', () => {
  let lastName = document.getElementById('lastName').value
  const boy = document.getElementById('boy')
  const girl = document.getElementById('girl')
  const number1 = document.getElementById('number1')
  const number2 = document.getElementById('number2')
  
  function randomNames(arr){
        let fullRandomName = document.querySelector('#fullRandomName')
        let randomName = arr[arr === boyNames ? getRandomSec(1, 1795) : getRandomSec(1, 2353)]
        let randomName2 = arr[arr ===boyNames ? getRandomSec(1, 1795) : getRandomSec(1, 2353)]

        if(number1.checked){
          fullRandomName.innerHTML = `${lastName} ${randomName}`
        } else if(number2.checked) {
          fullRandomName.innerHTML = `${lastName} ${randomName} ${randomName2}`
        } else {
          return alert('Adja meg a keresztnevek számát')
        }
      }

      if(lastName === ""){
        return alert('Íja be a Vezetéknevet!')
      }

      if(boy.checked){
        randomNames(boyNames)
      } else if (girl.checked){
        randomNames(girlNames)
      } else {
        return alert('Válassza ki a baba nemét!')
      }
      
    })