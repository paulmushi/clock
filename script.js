setInterval(setClock,1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')

function setClock() {
    const currencyDate =new Date()
    const secondsRatio =currencyDate.getSeconds() /60
    const minutesRatio = (secondsRatio + currencyDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currencyDate.getHours()) /12
    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
 }

 function setRotation(element,rotationRatio) {
     element.style.setProperty('--rotation',rotationRatio *360)
 }

 setClock()
 /* <!-- Created By Paul Clemence --> */