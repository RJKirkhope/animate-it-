console.log('hello')
let page1 = document.getElementById('page1')
let page2 = document.getElementById('page2')

function eventListener(button) {
  let butt = document.getElementById("button1").addEventListener("click", logging)
}
eventListener()

function logging() {

  if (page1.hidden = false) {
    page1.hidden = true
  }
  if (page1.hidden = true) {
    page2.hidden = false
  } else {
    page2.hidden = true
  }
}

// function bringMeBees() {
//   let bees = document.getElementsByClassName('nic')
//   console.log(bees)
//   for (var i = 0; i < bees.length; i++) {
//     bees[i].addEventListener('click', alert("Bees!!!!"))
//   }
//
// }
// bringMeBees()

function bringMeBees() {
  let bees = document.getElementsByClassName('nic')
  console.log(bees)
  for (var i = 0; i < bees.length; i++) {
    bees[i].addEventListener("click",function(){
      alert("Bees!!!")
    })
  }
}
bringMeBees()
