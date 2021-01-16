const deg = 6
const hr = document.querySelector("#hr")
const mn = document.querySelector("#mn")
const sc = document.querySelector("#sc")

setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${(mm)}deg)`
    sc.style.transform = `rotateZ(${(ss)}deg)`
})

function lightMode() {
    document.getElementById("stylesheet").setAttribute('href', 'css/lightmode.css');
    document.querySelector(".button.light-mode").classList.add("hidden")
    document.querySelector(".button.dark-mode").classList.remove("hidden")
}

function darkMode() {
    document.getElementById("stylesheet").setAttribute('href', 'css/darkmode.css');
    document.querySelector(".button.light-mode").classList.remove("hidden")
    document.querySelector(".button.dark-mode").classList.add("hidden")
}