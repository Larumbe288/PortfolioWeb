window.onload = function () {
    let entradilla = document.getElementById("entradilla");
    let aleatorio = Math.floor(Math.random()*3)+1;
    switch (aleatorio) {
        case 1:
            entradilla.innerText = "A forward thinking makes a better world";
            break;

        case 2:
            entradilla.innerText = "Keep your eyes on the stars, and your feet on the ground";
            break;
        default:
            entradilla.innerText = "You only fall when you stop trying";
            break; 
    }
}