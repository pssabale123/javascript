

// console.log(new Date().toLocaleTimeString());

function TimeInterval()
{
    document.getElementById("para").innerHTML ="";
    document.getElementById("para").innerHTML += new Date().toLocaleTimeString()+"<br>";
}

let interval = setInterval(TimeInterval,1000);

const btn=document.getElementById("btn");

btn.onclick=stopProcess;

function stopProcess()
{
    clearInterval(interval);
}
