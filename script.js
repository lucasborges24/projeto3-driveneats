function border(element) {
    desabilitar();
    element.classList.add("contentjs");
    element.classList.remove("none")
}

function desabilitar() {
    const content = document.querySelector(".contentjs")
    if (content !== null) {
        content.classList.remove("contentjs")
        content.classList.add("none")
    }
}