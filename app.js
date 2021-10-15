let price = document.getElementById("price");
let current = document.getElementById("bar");
let h2 = document.getElementById("h2");
let cost;
let period;
let type = true;
let toggle = document.querySelector("#checkbox");
const pageviews = {
  1: "10K",
  2: "50K",
  3: "100K",
  4: "500K",
  5: "1M",
};

const gradientStyle = {
  1: "#eaeefb",
  2: "linear-gradient(90deg, rgba(16,213,194,1) 25%, rgba(234,238,251,1) 25%)",
  3: "linear-gradient(90deg, rgba(16,213,194,1) 50%, rgba(234,238,251,1) 50%)",
  4: "linear-gradient(90deg, rgba(16,213,194,1) 75%, rgba(234,238,251,1) 75%)",
  5: "#10d5c2",
};

current.onload = currentCost();

current.addEventListener("input", currentCost);

toggle.addEventListener("click", changePeriod);

function changePeriod() {
  if (type === true) {
    period = "year";
    type = false;
  } else {
    period = "month";
    type = true;
  }
  currentCost();
}

function currentCost() {
  if (type == true) {
    period = "month";
    switch (current.value) {
      case "1":
        cost = 8;

        break;
      case "2":
        cost = 12;

        break;
      case "3":
        cost = 16;

        break;
      case "4":
        cost = 24;

        break;
      case "5":
        cost = 36;

        break;
    }
  } else {
    period = "year";
    switch (current.value) {
      case "1":
        num = 8 * 12;
        cost = num - num * 0.25;

        break;
      case "2":
        num = 12 * 12;
        cost = num - num * 0.25;

        break;
      case "3":
        num = 16 * 12;
        cost = num - num * 0.25;

        break;
      case "4":
        num = 24 * 12;
        cost = num - num * 0.25;

        break;
      case "5":
        num = 36 * 12;
        cost = num - num * 0.25;

        break;
    }
  }
  price.innerHTML = ` $${cost}.00`;

  document.getElementById("term").innerHTML ="/"+ period;
  h2.innerHTML = `${pageviews[current.value]} pageviews`;
  current.style.background = gradientStyle[current.value];
}
