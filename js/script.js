var sizes = ["Random", "Small", "Medium", "Large"]
var sizePrice = [0, 500, 700, 1000]
var crustPrizes = [100, 200, 100, 150, 200]
var crustNames = ["Random", "Thick", "Thin", "Deep", "Stuffed"]
function spicy() {
    spicySize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    spicyCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    spicyQuantity = parseInt(prompt("Quantitiy "))
    totalCost = crustPrizes[spicyCrust] + sizePrice[spicySize] * spicyQuantity
    document.getElementById("spicyOrder").innerHTML = spicyQuantity + " Spicy " + sizes[spicySize] + "/" + crustNames[spicyCrust] + " crust" + " @" + totalCost
}
function dates() {
    datesSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    datesCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    datesQuantity = parseInt(prompt("Quantity: "))
    totalCost = crustPrizes[datesCrust] + sizePrice[datesSize] * datesQuantity
    document.getElementById("datesOrder").innerHTML = datesQuantity + " Dates " + sizes[datesSize] + "/" + crustNames[datesCrust] + " crust" + " @" + totalCost
}
function pineapple() {
    pineappleSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    pineappleCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    pineappleQuantity = parseInt(prompt("Quantity"))
    totalCost = crustPrizes[pineappleCrust] + sizePrice[pineappleSize] * pineappleQuantity
    document.getElementById("pineappleOrder").innerHTML = pineappleQuantity + " Pineapple " + sizes[pineappleSize] + "/" + crustNames[pineappleCrust] + " crust" + " @" + totalCost




}
function papperoni() {
    papperoniSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    papperoniCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    papperoniQuantity = parseInt(prompt("Quantity ?"))
    totalCost = crustPrizes[papperoniCrust] + papperoniPrice[onionSize] * papperoniQuantity
    document.getElementById("papperoniOrder").innerHTML = papperoniQuantity + " Papperoni " + sizes[papperoniSize] + "/" + crustNames[papperoniCrust] + " crust" + " @" + totalCost
}
function chicken() {
    chickenSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    chickenCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    chickenQuantity = parseInt(prompt("Quantity?"))
    totalCost = crustPrizes[chickenCrust] + sizePrice[chickenSize] * chickenQuantity
    document.getElementById("chickenOrder").innerHTML = chickenQuantity + " Chicken " + sizes[chickenSize] + "/" + crustNames[chickenCrust] + " crust" + " @" + totalCost

}
function cheese() {
    cheeseSize = parseInt(prompt("Size: " + " 1-Small(Ksh.500) 2-Medium(Ksh.700) 3-Large(Ksh.1000)"))
    cheeseCrust = parseInt(prompt("Crust: " + "1-Thick(Ksh.200) 2-Thin(KSh.100) 3-Deep(Ksh.150) 4-Stuffed(Ksh.200)"))
    cheeseQuantity = parseInt(prompt("Quantity ? "))
    totalCost = crustPrizes[cheeseCrust] + sizePrice[cheeseSize] * cheeseQuantity
    document.getElementById("cheeseOrder").innerHTML = cheeseQuantity + " Pineapple " + sizes[cheeseSize] + "/" + crustNames[cheeseCrust] + " crust" + " @" + totalCost
}