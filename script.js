function process() {
    var queryParams = new URLSearchParams(window.location.search);
    var data = document.getElementById("data").value;
    if (data === "") {
        alert("prázdný input");
        return false;
    } else {
        queryParams.set("data", data);
        history.replaceState(null, null, "?"+queryParams.toString());
        var array = data.split(",");
        array = array.map(Number);
        
        var sum = array.reduce(function(a,b) {
            return a + b;
        }, 0)

        var avg = sum / array.length;
        document.getElementById("avg").innerHTML = "Průměr zadaných čísel: " + avg;

        array.forEach((number,index) => {
            document.getElementById("list").innerHTML += "Index: " + index + " Hodnota: " + number + "<br>";
        });
    }
    console.log(avg);
    console.log(array);
}
