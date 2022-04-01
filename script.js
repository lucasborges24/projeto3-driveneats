let b = 0;
let c = 0;
let d = 0;

function borderPlate(element) {
    
    desabilitarPlate();


    let a = document.querySelector(".content-plate").classList.contains("none")
    if (a === true) {
        console.log(a)
        b = Number(1);
    }

    if ((b+c+d >= 3) === true) {
        let finish = document.querySelector(".finish")
        finish.classList.add("green")
        document.querySelector("footer h3").innerHTML = "Finalizar Pedido"
    }
    
    element.classList.add("contentjs-plate");
    element.classList.remove("none")
    console.log(b)
    
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

    let a = document.querySelector(".content-drink").classList.contains("none")
    if (a === true) {
        console.log(a)
        c = Number(1);
    }

    if ((b+c+d >= 3) === true) {
        let finish = document.querySelector(".finish")
        finish.classList.add("green")
        document.querySelector("footer h3").innerHTML = "Finalizar Pedido"
    }

    element.classList.add("contentjs-drink");
    element.classList.remove("none")
    console.log(c)
    

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

    let a = document.querySelector(".content-dessert").classList.contains("none")
    if (a === true) {
        console.log(a)
        d = Number(1);
    }

    if ((b+c+d >= 3) === true) {
        let finish = document.querySelector(".finish")
        finish.classList.add("green")
        document.querySelector("footer h3").innerHTML = "Finalizar Pedido"
    }

    console.log(d)
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

function confirmOrder() {
    let confirm = document.querySelector(".finish").classList.contains("green")
    if (confirm === true) {
        document.querySelector(".body-confirm").classList.remove("show")
        document.querySelector(".confirm").classList.remove("show")

        let plate = document.querySelector(".contents .contentjs-plate h3").innerHTML
        let platePrice = document.querySelector(".contents .contentjs-plate h5").innerHTML

        let drink = document.querySelector(".contents .contentjs-drink h3").innerHTML
        let drinkPrice = document.querySelector(".contents .contentjs-drink h5").innerHTML

        let dessert = document.querySelector(".contents .contentjs-dessert h3").innerHTML
        let dessertPrice = document.querySelector(".contents .contentjs-dessert h5").innerHTML

        document.querySelector(".order1 h4:first-child").innerHTML = plate
        document.querySelector(".order1 h4:last-child").innerHTML = platePrice

        document.querySelector(".order2 h4:first-child").innerHTML = drink
        document.querySelector(".order2 h4:last-child").innerHTML = drinkPrice

        document.querySelector(".order3 h4:first-child").innerHTML = dessert
        document.querySelector(".order3 h4:last-child").innerHTML = dessertPrice


        let total = (Number(platePrice.split(" ")[1].replace(",",".")) + Number(drinkPrice.split(" ")[1].replace(",",".")) + Number(dessertPrice.split(" ")[1].replace(",","."))).toFixed(2)

        console.log(total)
        
        document.querySelector(".order-total h4:last-child").innerHTML = `R$ ${total.toString().replace(".",",")}`
    }
}

function back() {
    document.querySelector(".body-confirm").classList.add("show")
    document.querySelector(".confirm").classList.add("show")
}









