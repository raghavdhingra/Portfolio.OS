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
}
