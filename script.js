const hours1 = document.getElementById("hours");
const minutes1 = document.getElementById("minutes");
const seconds1 = document.getElementById("seconds");
const amp = document.getElementById("amps");

function updateclock()
{
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var amps = "PM"
    hours.innerText =h;
    minutes.innerText=m;
    seconds.innerText=s;

    if(h>12){
        amp.innerText=amps;
    }
    setTimeout(()=>{
        updateclock()
    }, 1000);
}
updateclock();
