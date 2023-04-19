function tempo() {
    let currentDate = new Date();
    let getWeek = new Array()
    let hours = currentDate.getHours().toString().padStart(2, "0")
    let minutes = currentDate.getMinutes().toString().padStart(2, "0")
    let seconds = currentDate.getSeconds().toString().padStart(2, "0")
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth()
    let day = currentDate.getDate().toString().padStart(2, "0")
    let week = currentDate.toDateString()

    getWeek = week.split(" ")
    getWeek = getWeek[0]

    month = month + 1
    month = month.toString().padStart(2, "0")

    document.querySelector(".dia").innerHTML = getWeek.toUpperCase()
    document.querySelector(".relogio").innerHTML = `${hours}:${minutes}:${seconds}`
    document.querySelector(".ano").innerHTML = `${day}:${month}:${year}`

    if (hours <= 12) {
        document.querySelector(".ampm").innerHTML = "AM"
    } else {
        document.querySelector(".ampm").innerHTML = "PM"
    }
}

setInterval(tempo, 1000);