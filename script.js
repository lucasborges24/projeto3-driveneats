let b = 0;
let c = 0;
let d = 0;
let plate;
let drink;
let dessert;
let total;
let nameOrder;
let address;

function borderPlate(element) {
    b = Number(0);
    desabilitarPlate(element);
    
    element.classList.toggle("contentjs-plate");
    element.classList.toggle("none")
    console.log(b)

    let a = document.querySelector(".contents .contentjs-plate")
    if (a !== null) {
        b = Number(1);
        console.log(b)
    }

    finishButton();

    

}



function desabilitarPlate(element) {
    const content = document.querySelector(".contents .contentjs-plate")
    if (content !== null && element.classList.contains("contentjs-plate") == false) {
        content.classList.remove("contentjs-plate")
        content.classList.add("none")
    }
}

function borderDrink(element) {
    c = Number(0);
    desabilitarDrink(element);

    element.classList.toggle("contentjs-drink");
    element.classList.toggle("none")
    console.log(c)

    let a = document.querySelector(".contents .contentjs-drink")
    if (a !== null) {
        console.log(a)
        c = Number(1);
    }

    finishButton();

}

function desabilitarDrink(element) {
    const content = document.querySelector(".contentjs-drink")
    if (content !== null && element.classList.contains("contentjs-drink") == false) {
        content.classList.remove("contentjs-drink")
        content.classList.add("none")
    }
}

function borderDessert(element) {
    d = Number(0);
    desabilitarDessert(element);

    console.log(d)
    element.classList.toggle("contentjs-dessert");
    element.classList.toggle("none")

    let a = document.querySelector(".contents .contentjs-dessert")
    if (a !== null) {
        console.log(a)
        d = Number(1);
    }

    finishButton();
    
}

function desabilitarDessert(element) {
    const content = document.querySelector(".contentjs-dessert")
    if (content !== null && element.classList.contains("contentjs-dessert") == false) {
        content.classList.remove("contentjs-dessert")
        content.classList.add("none")
    }
}

function finishButton() {
    if ((b + c + d >= 3) === true) {
        let finish = document.querySelector(".finish")
        finish.classList.add("green")
        finish.classList.add("transition")
        document.querySelector("footer h3").innerHTML = "Finalizar Pedido"
        document.querySelector("footer h3").classList.add("transition")
    }
    else {
        document.querySelector(".finish").classList.remove("green")
        document.querySelector("footer h3").classList.add("transition")
        document.querySelector("footer h3").innerHTML = "Selecione os 3 itens para fechar o pedido"
    }
}

function confirmOrder() {
    let confirm = document.querySelector(".finish").classList.contains("green")
    if (confirm === true) {
        document.querySelector(".body-confirm").classList.remove("show")
        document.querySelector(".confirm").classList.remove("show")

        plate = document.querySelector(".contents .contentjs-plate h3").innerHTML
        let platePrice = document.querySelector(".contents .contentjs-plate h5").innerHTML

        drink = document.querySelector(".contents .contentjs-drink h3").innerHTML
        let drinkPrice = document.querySelector(".contents .contentjs-drink h5").innerHTML

        dessert = document.querySelector(".contents .contentjs-dessert h3").innerHTML
        let dessertPrice = document.querySelector(".contents .contentjs-dessert h5").innerHTML

        document.querySelector(".order1 h4:first-child").innerHTML = plate
        document.querySelector(".order1 h4:last-child").innerHTML = platePrice

        document.querySelector(".order2 h4:first-child").innerHTML = drink
        document.querySelector(".order2 h4:last-child").innerHTML = drinkPrice

        document.querySelector(".order3 h4:first-child").innerHTML = dessert
        document.querySelector(".order3 h4:last-child").innerHTML = dessertPrice


        total = (Number(platePrice.split(" ")[1].replace(",", ".")) + Number(drinkPrice.split(" ")[1].replace(",", ".")) + Number(dessertPrice.split(" ")[1].replace(",", "."))).toFixed(2)

        console.log(total)

        document.querySelector(".order-total h4:last-child").innerHTML = `R$ ${total.toString().replace(".", ",")}`

        nameOrder = prompt('Coloque seu nome: ')
        address = prompt('Coloque seu endereço: ')
    }
}

function back() {
    document.querySelector(".body-confirm").classList.add("show")
    document.querySelector(".confirm").classList.add("show")
}

function whatsApp() {
    let totalVirgula = total.toString().replace(".", ",")



    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${plate}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${total}\n\nNome: ${nameOrder}\nEndereço: ${address}`


    let encode = encodeURIComponent(message)
    const link = `https://wa.me/+5562999267474?text=${encode}`
    console.log(encode)


    window.open(link, '_blank')
}









