var carta = null;
function girar(element) {
    element.classList.add("girada");
    compararCarta(element);
}
function compararCarta(element) {
    if (element.classList.contains("correcta")) {
        return false;
    }
    if (carta == null) {
        carta = element;
        return;
    }
    if (element.attributes["name"].value === carta.attributes["name"].value) {
        carta.classList.add("correcta");
        element.classList.add("correcta");
    } else {
        const espera = setTimeout(darlaVuelta, 1000, element, carta);
    }
    carta = null;
}
function darlaVuelta(element, carta) {
    carta.classList.remove("girada");
    element.classList.remove("girada");
}
