const upperBar = document.getElementById("upper-bar");
const taskbar_time = document.getElementById("taskbarTime");
const taskbar_date = document.getElementById("taskbarDate");
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const short_month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const addZero = (num) => {
    if (num.toString().length === 1){
        return `0${num}`;
    }
    return `${num}`;
}

window.onload = () => {
    var date = new Date();
    var cur_date = `${addZero(date.getHours())}:${addZero(date.getMinutes())} &nbsp;&nbsp;&nbsp; ${short_month[date.getMonth()]}-${addZero(date.getDate())}, ${date.getFullYear()}`;
    upperBar.innerHTML = cur_date;
    var cur_time = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
    var cur_day = `${short_month[date.getMonth()]}-${addZero(date.getDate())}, ${date.getFullYear()}`;
    taskbar_date.innerHTML = `${cur_day}`;
    taskbar_time.innerHTML = `${cur_time}`;
    setInterval(
        ()=>{
            var date = new Date();
            var cur_date = `${addZero(date.getHours())}:${addZero(date.getMinutes())} &nbsp;&nbsp;&nbsp; ${short_month[date.getMonth()]}-${addZero(date.getDate())}, ${date.getFullYear()}`;
            upperBar.innerHTML = cur_date;
            var cur_time = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
            var cur_day = `${short_month[date.getMonth()]}-${addZero(date.getDate())}, ${date.getFullYear()}`;
            taskbar_date.innerHTML = `${cur_day}`;
            taskbar_time.innerHTML = `${cur_time}`;
        }
        ,30000
    );



    // Loader
    document.getElementsByClassName("loader-overlay")[0].classList.add("loader-overlay-animation");
    document.getElementsByClassName("svg-Loader-circle")[0].classList.add("svg-Loader-circle-animation");
    document.getElementsByClassName("PortFolio-Loader-Logo")[0].classList.add("PortFolio-Loader-Logo-animation");
    document.getElementsByClassName("PortFolio-Loader-Logo-Text")[0].classList.add("PortFolio-Loader-Logo-Text-animation");
    let percentage = 0;
    let firstInterval = setInterval(() => {
        document.getElementById("loader-loading-percentage").innerText=percentage;
        percentage!==21 ? percentage++ : clearInterval(firstInterval);
    }, 8);
    setTimeout(() => {
        secondInterval();
    }, 160);
    setTimeout(() => {
        ThirdInterval();
    }, 2910);
    const secondInterval = () => {
        let secondInt = setInterval(() => {
            document.getElementById("loader-loading-percentage").innerText=percentage;
            percentage !== 75 ? percentage+=1 : clearInterval(secondInt);
        }, 50);
    }
    const ThirdInterval = () => {
        let thirdInt = setInterval(() => {
            document.getElementById("loader-loading-percentage").innerText=percentage;
            percentage !== 100 ? percentage+=1 : clearInterval(thirdInt);
        }, 4);
    }
    setTimeout(() => {
        document.getElementsByClassName("PortFolio-Loader-Logo")[0].classList.add("PortFolio-Loader-Logo-increment");
        setTimeout(() => {
            document.getElementsByClassName("loader-percentage-container")[0].classList.add("opacity-none");
        }, 100);
        setTimeout(() => {
            document.getElementsByClassName("loader-percentage-container")[0].style.display="none";
            document.getElementsByClassName("hey-there-none")[0].classList.add("opacity-full");
        }, 600);
        setTimeout(() => {
            document.getElementsByClassName("loader-overlay")[0].style.display = "none";
        }, 2500);
    }, 3000);
    // Loader
}
