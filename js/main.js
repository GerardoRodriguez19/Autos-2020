const autosDiv = document.querySelector('.autos')

swift = ["swift", "Suzuki Boosterjet 2020", "1.0", "110", "118", "242", "310,000", "swift.jpg"]
versa_advance = ["versa", "Nissan Versa advance", "1.6", "122", "114", "416", "287,000", "versa.jpg"]
mazda_2it = ["mazda2it", "Mazda 2 i Touring HB", "1.5", "109", "104", "220", "279,000", "mazda2it.jpg"]
rio = ["riohb", "Kia Rio HB LX", "1.6", "121", "111", "325", "268,000", "riohblx.png"]
mazda_2i = ["mazda2i", "Mazda 2 i HB", "1.5", "109", "104", "220", "259,000", "mazda2i.jpg"]
i10 = ["grandi10hb", "Hyundai Grand i10 GLS HB", "1.2", "84", "87", "252", "256,000", "grandi10hbgls.jpg"]
cars = [swift, versa_advance, mazda_2i, rio, mazda_2it, i10]

imgCarpeta = "img/"

cars.forEach(car => {
    clase = car[0]
    nombreCompleto = car[1]
    motor = car[2]
    HP = car[3]
    torque = car[4]
    cajuela = car[5]
    precio = car[6]
    foto = car[7]

    let div = document.createElement("div")
    div.classList.add(clase)

    let divImg = document.createElement("div")
    divImg.classList.add("imgResponsive")

    let image = document.createElement("img")
    image.src = `${imgCarpeta}${foto}`

    let headName = document.createElement("h2")
    headName.innerHTML = `${nombreCompleto}`

    let ul = document.createElement("ul")

    let liMotor = document.createElement("li")
    liMotor.innerHTML = `Motor: ${motor}`

    let liHP = document.createElement("li")
    liHP.innerHTML = `Caballos de fuerza: ${HP} HP`

    let liTorque = document.createElement("li")
    liTorque.innerHTML = `Torque: ${torque} lb-ft`

    let liCajuela = document.createElement("li")
    liCajuela.innerHTML = `Capacidad de cajuela: ${cajuela} litros`

    let liPrecio = document.createElement("li")
    liPrecio.innerHTML = `Precio: $${precio}`

    divImg.appendChild(image)

    ul.appendChild(liMotor)
    ul.appendChild(liHP)
    ul.appendChild(liTorque)
    ul.appendChild(liCajuela)
    ul.appendChild(liPrecio)

    div.appendChild(divImg)
    div.appendChild(headName)
    div.appendChild(ul)

    autosDiv.appendChild(div)
});