const stars = document.getElementById("starcontent")
const a = document.getElementById("randomcontent")
const b = document.getElementById("bestcontent")
const navbar = document.getElementById("navbar")
const about = document.getElementById("aboutuscontainer")
const places = document.getElementById("placescontainer")
const prices = document.getElementById("pricescontainer")


const form = document.getElementById("formcontainer")
navbar.style.display = "block"
about.style.display = "block"
places.style.display = "block"
prices.style.display = "block"
form.style.display = "none"
stars.style.display = "none"
b.style.display = "none"
function threestars() {
    stars.style.display = "grid"
    a.style.display = "none"
    b.style.display = "none"
}
function random() {
    stars.style.display = "none"
    a.style.display = "grid"
    b.style.display = "none"
}
function best() {
    stars.style.display = "none"
    a.style.display = "none"
    b.style.display = "grid"
}
function signin() {
    form.style.display = "block"
    navbar.style.display = "none"
    about.style.display = "none"
    places.style.display = "none"
    prices.style.display = "none"
}
function contact(){
    form.style.display = "block"
    navbar.style.display = "none"
    about.style.display = "none"
    places.style.display = "none"
    prices.style.display = "none"
}

