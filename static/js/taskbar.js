var startCounter = 0;

const openStart = () => {
    if (startCounter == 0) {
        document.getElementById("startMenu").classList.remove("none");
        document.getElementById("scrollBtn").classList.remove("none");
        document.getElementById("start-circle").classList.add("stroke");
        startCounter=1;
    }
    else{
        document.getElementById("startMenu").classList.add("none");
        document.getElementById("start-circle").classList.remove("stroke");
        startCounter=0;
    }
}

const keyPress = (e) => {
    if(e.key === "Escape") {
        document.getElementById("startMenu").classList.add("none");
        document.getElementById("start-circle").classList.remove("stroke");
        document.getElementById("scrollBtn").style.display='block';
        startCounter=0;
    }
}

document.getElementById("scroll").addEventListener("scroll",()=>{
    document.getElementById("scrollBtn").classList.add("none");
});

document.getElementById("scrollBtn").addEventListener("click",()=>{
    document.getElementById("scrollBtn").classList.add("none");
    document.getElementById("scroll").scrollLeft="100";
    setTimeout(()=>{
        document.getElementById("scroll").scrollLeft="-100";
    },400);
});

document.onkeydown = keyPress;