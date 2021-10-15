let price = document.getElementById("price")
let current = document.getElementById("bar")
let h2 = document.getElementById("h2");
let cost
let period;
let type = true
let toggle = document.querySelector("#checkbox")
const pageviews={
    1:"10K",
    2:"50K",
    3:"100K",
    4:"500K",
    5:"1M"
};

current.onload = currentCost();
current.addEventListener("input", currentCost)

function changePeriod() {
    if (type === true) {
        period = "yearly"
        type = false
    }
    else {
        period = "monthly"
        type = true
    }
    currentCost()
}

toggle.addEventListener("click", changePeriod)

function currentCost() {
    if (type == true) {
        period = "monthly"
        switch (current.value) {
            case "1":
                cost = 8
               
                break;
            case "2": cost = 12;
              
                break;
            case "3": cost = 16;
             
                break;
            case "4": cost = 24;
            
                break;
            case "5": cost = 36;
               
                break;
        }
        price.innerHTML = ` $${cost}.00`
       
document.getElementById("term").innerHTML="/month"
    }
    else {
        period = "yearly"
        switch (current.value) {
            case "1":
                num = 8 * 12
                cost = num - (num * 0.25);
               
                break;
            case "2": num = 12 * 12
                cost = num - (num * 0.25);
                
                break;
            case "3": num = 16 * 12
                cost = num - (num * 0.25);
                
                break;
            case "4": num = 24 * 12
                cost = num - (num * 0.25);
              
                break;
            case "5": num = 36 * 12
                cost = num - (num * 0.25);
                
                break;
        }
        price.innerHTML = ` $${cost}.00`
      
        document.getElementById("term").innerHTML="/year"
    }

h2.innerHTML = `${pageviews[current.value]} pageviews`
}