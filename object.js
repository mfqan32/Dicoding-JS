const evenNumber = new Array()
for (i = 1; i <= 93; i++) {
  if (i % 2 == 0) {
    evenNumber.push(i)
  }
}

const capital = {
    "Jakarta": "Indonesia",
    "London": "England",
    "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);