let car1 = document.querySelector('.car1')
let car2 = document.querySelector('.car2')
let score = document.querySelector('.score')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let btnArr = document.querySelectorAll('button')
let cash = 100
let stavka = 'choose the car'
let hasWin = false
let lot = 0
document.querySelector('.lot').innerHTML = lot
score.innerHTML = cash
const button = (color) =>{
  if(lot<=0 || cash<=0) alert('Ты не сделал ставку или твой счет равен нулю')
  else {
    hasWin = false
    btnArr.forEach((e)=>e.disabled=true)
    speedCar(car1, ' white')
    speedCar(car2, ' black')
    stavka = color
    cash-=lot
    score.innerHTML = cash
  }
}
plus.onclick = () =>{
  if (lot>=cash) {
    plus.disabled = true
  }else{
    minus.disabled = false
    lot +=10
    document.querySelector('.lot').innerHTML = lot
  }

}
minus.onclick = () =>{
  if (lot<=0) {
    minus.disabled = true
  }else{
    plus.disabled = false
    lot -=10
    document.querySelector('.lot').innerHTML = lot
  }
}
const speedCar = (car, color) => {
  let margin = 0
  let speed
  let wiiner
  car.parentNode.style.background ='#fff'

  let interval = setInterval(()=>{
     speed = Math.random()*0.1
    margin= margin+speed
    car.style.marginLeft = margin +'%'
    if (margin>100) {
      car.parentNode.style.background ='lime'
      hasWin = true
      btnArr.forEach((e)=>e.disabled=false)
      clearInterval(interval)
      if (stavka===color) {
        cash+=lot*2
        score.innerHTML = cash
      }
    } 
    hasWin? clearInterval(interval) : hasWin
  })
}
