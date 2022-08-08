

function handleClick(e) {

  let osrc=e.target.getAttribute("src");
    e.target.setAttribute("src", e.target.alt);
  
    setTimeout( takeBlur,1000,e,osrc);
}

let imgArray = document.getElementsByTagName("img");

for (let i = 0; i < imgArray.length; i++) {
  imgArray[i].onclick = handleClick;
}

function takeBlur(e,osrc) {

  e.target.setAttribute("src",osrc);

}


function changeImage()
{
     document.getElementById("img-1").setAttribute("src",imgArray[0].alt);
     document.getElementById("img-2").setAttribute("src",imgArray[1].alt);
     document.getElementById("img-3").setAttribute("src",imgArray[2].alt);
     document.getElementById("img-4").setAttribute("src",imgArray[3].alt);
     document.getElementById("img-5").setAttribute("src",imgArray[4].alt);
     document.getElementById("img-6").setAttribute("src",imgArray[5].alt);
    
}
