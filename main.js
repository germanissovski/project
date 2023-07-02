let buyf = false;

function buy(){
    if(!buyf){
        document.getElementById("btn").style.background = "#544E38"
        document.getElementById("btn").innerText = "в корзине"
        buyf = true
    }
    else{ document.getElementById("btn").style.background = "#A99B76"
    document.getElementById("btn").innerText = "в корзину"
    buyf = false

    }
}