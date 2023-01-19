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
    "transform:rotate(50deg); transition:0.5s; margin-bottom:-7px;  transition-timing-function: ease-in-out;");
    document.querySelector(".-mid").style.display="none";
    document.querySelector(".-bot").setAttribute("style",
    "transform:rotate(-50deg); transition:0.5s;  margin-bottom:0px; transition-timing-function: ease-in-out; ");
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
            tp.style.transitionTimingFunction="ease-in-out";
        }
        if(bt.style.transform=="rotate(-50deg)"){
            bt.style.transform="rotate(0deg)";
            bt.style.transition="0.5s";
            bt.style.transitionTimingFunction="ease-in-out";
    
        }
        if(md.style.display=="none"){
            md.style.display="block";
    
        }
        bo=true;
    }
    
}