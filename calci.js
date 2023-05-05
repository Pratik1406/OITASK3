function convert() {
    var temp = parseFloat(document.getElementById("temp").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var result;
    if (from === "celsius" && to === "fahrenheit") {
    result = temp * 9 / 5 + 32;
    } else if (from === "celsius" && to === "kelvin") {
    result = temp + 273.15;
    } else if (from === "fahrenheit" && to === "celsius") {
    result = (temp - 32) * 5 / 9;
    } else if (from === "fahrenheit" && to === "kelvin") {
    result = (temp + 459.67) * 5 / 9;
    } else if (from === "kelvin" && to === "celsius") {
    result = temp - 273.15;
    } else if (from === "kelvin" && to === "fahrenheit") {
    result = temp * 9 / 5 - 459.67;
    } else {
    result = temp;
    }
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + to.toUpperCase();
    }