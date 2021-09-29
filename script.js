 function CardChange() {
 document.getElementById("vivek").style.backgroundColor = "blue";
}

function playVideo1(){
    let iframe=document.querySelector("#video1 iframe");
    document.getElementById("video1").style.display="block";
    let url=iframe.getAttribute("src");
    url=url+"?autoplay=1";
    iframe.setAttribute("src", url);  
}

function playVideo2(){
    document.getElementById("video2").style.display="block";
    let geturl=document.querySelector("#video2 iframe");
    let url=geturl.getAttribute("src");
    url=url+"?autoplay=1";
    geturl.setAttribute("src", url);
}

function playVideo3(){
    let iframe=document.querySelector("#video3 iframe");
    document.getElementById("video3").style.display="block";
    let url=iframe.getAttribute("src");
    url=url+"?autoplay=1";
    iframe.setAttribute("src", url);
    
}

function playVideo4(){
    document.getElementById("video4").style.display="block";
    let iframe=document.querySelector("#video4 iframe");
    let url=iframe.getAttribute("src");
    url=url+"?autoplay=1";
    iframe.setAttribute("src",url);
}

function playVideo5(){
    document.getElementById("video5").style.display="block";
    let iframe=document.querySelector("#video5 iframe");
    let url=iframe.getAttribute("src");
    url=url+"?autoplay=1";
    iframe.setAttribute("src",url);
}




// Button Top
mybutton = document.getElementById("btn_up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  
  document.documentElement.scrollTop = 0; 
}
// Button Top End


// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

