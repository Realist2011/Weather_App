
class Task{

static  Use(data){

    let loc = data.location
    info.innerText =''
    for(let i in loc){
        let li = document.createElement('li')
        li.innerText = `${i}:${loc.i}`
        info.appendChild(li)


    }

    let cur = data.current
    current.innerText=''
    for(let j in cur){
        let li = document.createElement('li')
        li.innerText =`${i}:${cur.i}`
        current.appendChild(li)
    }

    let air = data.aqi
    aqi.innerText=''
    for(let z in air){
        let li = document.createElement('li')
        li.innerText = `${z}:${air.z}`
        info.appendChild(li)

    }

}}

let info = document.querySelector('.info')
let current = document.querySelector('.current')
let aqi = document.querySelector('.aqi')

module.exports = Task