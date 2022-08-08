
window.onload = ()=> {
  let count = 0;
  let button = document.getElementById("clickme");
  button.onclick = ()=> {
 
    

            let div = document.getElementById("message");
            count++;
            div.innerHTML = "You clicked me " + count + " times!";
    

    
  };
}



