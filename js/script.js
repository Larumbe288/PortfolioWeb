window.onload = function () {
    let entradilla = document.getElementById("entradilla");
    let aleatorio = Math.floor(Math.random() * 5) + 1;
    switch (aleatorio) {
        case 1:
            entradilla.innerText = "A forward thinking makes a better world";
            break;

        case 2:
            entradilla.innerText = "Keep your eyes on the stars, and your feet on the ground";
            break;
        case 3:
            entradilla.innerText = "The power of imagination makes us infinite";
            break;
        case 4:
            entradilla.innerText = "The only goal you can’t accomplish is the one you don’t go after";
            break;
        default:
            entradilla.innerText = "You only fall when you stop trying";
            break;
    }
}