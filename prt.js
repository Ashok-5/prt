function clicked(){    
    chg();
    nbr();
}
function nbr(){
    let thing="block";
    if(document.querySelector(".nav").style.display=="block"){
        thing="none";
    }
    document.querySelector(".nav").style.display=thing;

}
let bo=true;
function chg(){ 
    if(bo){
    document.querySelector(".-top").setAttribute("style",
    "transform:rotate(50deg); transition:0.5s; margin-bottom:-7px;  transition-timing-function: cubic-bezier(30,30,30,30);");
    document.querySelector(".-mid").style.display="none";
    document.querySelector(".-bot").setAttribute("style",
    "transform:rotate(-50deg); transition:0.5s;  margin-bottom:0px; transition-timing-function: cubic-bezier(30,30,30,30); ");
    bo=false;
    }
    else{
        var tp=document.querySelector(".-top");
        var md= document.querySelector(".-mid");
        var bt= document.querySelector(".-bot");
        if(tp.style.transform=="rotate(50deg)"&&tp.style.marginBottom=="-7px"){
            tp.style.transform="rotate(0deg)";
            tp.style.marginBottom="0px";
            tp.style.transition="0.5s";
            tp.style.transitionTimingFunction="cubic-bezier(30,30,30,30)";
        }
        if(bt.style.transform=="rotate(-50deg)"){
            bt.style.transform="rotate(0deg)";
            bt.style.transition="0.5s";
            bt.style.transitionTimingFunction="cubic-bezier(30,30,30,30)";
    
        }
        if(md.style.display=="none"){
            md.style.display="block";
    
        }
        bo=true;
    }
    
}

let percent_Jav = document.getElementById("J_no");
let cnt_Jav = 0;
setInterval(() => {
  if (cnt_Jav == 40) {
    clearInterval();
  } else {
    cnt_Jav += 1;
    percent_Jav.innerHTML = cnt_Jav + "%";
  }
}, 49);
let percent_h = document.getElementById("h_no");
let cnt_h = 0;
setInterval(() => {
  if (cnt_h == 80) {
    clearInterval();
  } else {
    cnt_h += 1;
    percent_h.innerHTML = cnt_h + "%";
  }
}, 25);
let percent_c = document.getElementById("c_no");
let cnt_c = 0;
setInterval(() => {
  if (cnt_c == 70) {
    clearInterval();
  } else {
    cnt_c += 1;
    percent_c.innerHTML = cnt_c + "%";
  }
}, 28);
let percent_j = document.getElementById("j_no");
let cnt_j = 0;
setInterval(() => {
  if (cnt_j == 30) {
    clearInterval();
  } else {
    cnt_j += 1;
    percent_j.innerHTML = cnt_j + "%";
  }
}, 66);


var out=document.querySelectorAll(".tilt");
var card=document.querySelectorAll(".skls");
for(d=0;d<out.length;d++){
  out[d].addEventListener('mousemove',(e) => {
});
}

function rld(){
  location.reload();
}