function cilcked(){
    nbr();
    chg();
}
function nbr(){
    let thing="block";
    if(document.querySelector(".nav").style.display=="block"){
        thing="none";
    }
    document.querySelector(".nav").style.display=thing;

}
function chg(){ 
    // var trfrm=document.querySelector(".-top").style.transform=
    // var ddsds= document.querySelector(".-top").style.marginBottom=
    
    //     if(document.querySelector(".-top").style.transform=="rotate(50deg)"&&document.querySelector(".-top").style.marginBottom == "50px"){
           
    //         document.querySelector(".-top").style.transition="0.5s"
    //         document.querySelector(".-top").style.transitionTimingFuntion="ease-in-out"
    //     }
    //     if(document.querySelector(".-top").style.transform=="rotate(50deg)"&&document.querySelector(".-top").style.marginBottom == "50px"){
    //         document.querySelector(".-top").style.transform="rotate(0deg)"
    //         document.querySelector(".-top").style.marginBottom="0px"
    //         document.querySelector(".-top").style.transition="0.5s"
    //         document.querySelector(".-top").style.transitionTimingFuntion="ease-in-out"
    //     }
    document.querySelector(".-top").setAttribute("style",
    "transform:rotate(50deg); transition:0.5s; margin-bottom:-7px;  transition-timing-function: ease-in-out;");
    document.querySelector(".-mid").style.display="none";
    document.querySelector(".-bot").setAttribute("style",
    "transform:rotate(-50deg); transition:0.5s;  margin-bottom:0px; transition-timing-function: ease-in-out; ");


}