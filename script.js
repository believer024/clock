function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = updateTime(hour)
    min = updateTime(min)
    sec = updateTime(sec)

    document.getElementById("root").innerHTML = hour + " : " + min + " : " + sec;

    setTimeout(currentTime, 1000)
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

currentTime();