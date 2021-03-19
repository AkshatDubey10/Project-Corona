var date = document.getElementsByClassName("lower-lower-left")[0];
var act = document.getElementsByClassName("activ")[0]
var cur = document.getElementsByClassName("cured")[0];
var ded = document.getElementsByClassName("dead")[0];
console.log(act);
fetch("https://api.covid19india.org/data.json")
    .then(response =>
        response.json())
    .then(data => {
        var d = data.statewise;
        var today = d[0];
        var dead = today["deaths"];
        var active = today["active"];
        date.innerText = today["lastupdatedtime"];
        act.innerText = active;
        cur.innerText = today["recovered"];
        ded.innerText = dead;
        console.log(today);
    });