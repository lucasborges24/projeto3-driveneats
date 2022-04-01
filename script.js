
function borderPlate(element) {
    
    desabilitarPlate();
    element.classList.add("contentjs-plate");
    element.classList.remove("none")
    // i = i + 1;
}

function desabilitarPlate() {
    const content = document.querySelector(".contentjs-plate")
    if (content !== null) {
        content.classList.remove("contentjs-plate")
        content.classList.add("none")
    }
}

function borderDrink(element) {
    desabilitarDrink();
    element.classList.add("contentjs-drink");
    element.classList.remove("none")
}

function desabilitarDrink() {
    const content = document.querySelector(".contentjs-drink")
    if (content !== null) {
        content.classList.remove("contentjs-drink")
        content.classList.add("none")
    }
}

function borderDessert(element) {
    desabilitarDessert();
    element.classList.add("contentjs-dessert");
    element.classList.remove("none")
}

function desabilitarDessert() {
    const content = document.querySelector(".contentjs-dessert")
    if (content !== null) {
        content.classList.remove("contentjs-dessert")
        content.classList.add("none")
    }
}








