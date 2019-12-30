const settingOnClick = document.getElementById("setting-on-click");

const changeTheme = document.getElementById("changeTheme");
const changeFont = document.getElementById("changeFont");
const fontSize = document.getElementById("fontSize");
const translate = document.getElementById("translate");

const changeThemeBtn = document.getElementById("changeThemeBtn");
const changeFontBtn = document.getElementById("changeFontBtn");
const fontSizeBtn = document.getElementById("fontSizeBtn");
const translateBtn = document.getElementById("translateBtn");
const resetBtn = document.getElementById("resetBtn");
const suggestionBtn = document.getElementById("suggestionBtn");

const arialDefault = () => {
    document.body.style.setProperty('--fontFamily', `Arial, Helvetica, sans-serif`);
    document.getElementById("arial").classList.add("color-palette-active");
    document.getElementById("courier").classList.remove("color-palette-active");
    document.getElementById("Lucida").classList.remove("color-palette-active");
}
const darkThemeApplier = () => {
    document.getElementById("darkTheme").classList.add("color-palette-active");
    document.getElementById("lightTheme").classList.remove("color-palette-active");

    document.body.style.setProperty('--DarkThemeBackground', `#000000`);
    document.body.style.setProperty('--DarkThemeColor', `#ffffff`);
    document.body.style.setProperty('--transparent', `rgba(0,0,0,0)`);
    document.body.style.setProperty('--ThemeColor1', `rgba(255,255,255,0.1)`);
    document.body.style.setProperty('--ThemeColor2', `rgba(255,255,255,0.2)`);
    document.body.style.setProperty('--ThemeColor3', `rgba(255,255,255,0.3)`);
    document.body.style.setProperty('--ThemeColor4', `rgba(255,255,255,0.4)`);
    document.body.style.setProperty('--DThemeColor', `rgba(0,0,0,0.8)`);
}

changeThemeBtn.addEventListener("click",()=>{
    if (changeTheme.classList.contains("none")){
        settingOnClick.classList.remove("none");
        changeFont.classList.add("none");
        translate.classList.add("none");
        fontSize.classList.add("none");
        changeTheme.classList.remove("none");
    }
    else{
        settingOnClick.classList.add("shutDown");
        setTimeout(() => {
            changeTheme.classList.add("none");
            settingOnClick.classList.remove("shutDown");
            settingOnClick.classList.add("none");
        }, 1000);
    }
});

changeFontBtn.addEventListener("click",()=>{
    if (changeFont.classList.contains("none")){
        changeTheme.classList.add("none");
        fontSize.classList.add("none");
        translate.classList.add("none");
        settingOnClick.classList.remove("none");
        changeFont.classList.remove("none");
    }
    else{
        settingOnClick.classList.add("shutDown");
        setTimeout(() => {
            changeFont.classList.add("none");
            settingOnClick.classList.remove("shutDown");
            settingOnClick.classList.add("none");
        }, 1000);
    }
});

fontSizeBtn.addEventListener("click",()=>{
    if (fontSize.classList.contains("none")){
        settingOnClick.classList.remove("none");
        changeFont.classList.add("none");
        changeTheme.classList.add("none");
        translate.classList.add("none");
        fontSize.classList.remove("none");
    }
    else{
        settingOnClick.classList.add("shutDown");
        setTimeout(() => {
            fontSize.classList.add("none");
            settingOnClick.classList.remove("shutDown");
            settingOnClick.classList.add("none");
        }, 1000);
    }
});

translateBtn.addEventListener("click",()=>{
    if (translate.classList.contains("none")){
        settingOnClick.classList.remove("none");
        changeFont.classList.add("none");
        changeTheme.classList.add("none");
        fontSize.classList.add("none");
        translate.classList.remove("none");
    }
    else{
        settingOnClick.classList.add("shutDown");
        setTimeout(() => {
            translate.classList.add("none");
            settingOnClick.classList.remove("shutDown");
            settingOnClick.classList.add("none");
        }, 1000);
    }
});

resetBtn.addEventListener("click",()=>{
    settingOnClick.classList.add("shutDown");
    setTimeout(() => {
        settingOnClick.classList.remove("shutDown");
        settingOnClick.classList.add("none");
    }, 1000);
    darkThemeApplier();
    arialDefault();
    document.body.style.setProperty('--fontSize', `1em`);
    document.getElementsByClassName("goog-te-combo")[0].value = 'en';
    fontSizeValue = 1;
    alert("The Settings has been restored.");
});

suggestionBtn.addEventListener("click",()=>{});

var fontSizeValue = 1;

const decreaseFont = () => {
    if (fontSizeValue.toString().substring(0,3) === '0.7'){
        alert("You can't decrease the Font Size less than the current size.");
    }
    else{
        fontSizeValue-=0.05;
        document.body.style.setProperty('--fontSize', `${fontSizeValue}em`);
        // alert(getComputedStyle(document.body).getPropertyValue('--fontSize'));
    }
}
const resetFont = () => {
    document.body.style.setProperty('--fontSize', `1em`);
    fontSizeValue = 1;
}
const increaseFont = () => {
    if (fontSizeValue.toString().substring(0,4) === '1.25'){
        alert("You can't increase the Font Size more than the current size.");
    }
    else{
        fontSizeValue+=0.05;
        document.body.style.setProperty('--fontSize', `${fontSizeValue}em`);
        // alert(getComputedStyle(document.body).getPropertyValue('--fontSize'));
    }
}

document.getElementById("arial").addEventListener("click",()=>{
    arialDefault();
});
document.getElementById("courier").addEventListener("click",()=>{
    document.body.style.setProperty('--fontFamily', `Courier New', Courier, monospace`);
    document.getElementById("arial").classList.remove("color-palette-active");
    document.getElementById("courier").classList.add("color-palette-active");
    document.getElementById("Lucida").classList.remove("color-palette-active");
});
document.getElementById("Lucida").addEventListener("click",()=>{
    document.getElementById("arial").classList.remove("color-palette-active");
    document.getElementById("courier").classList.remove("color-palette-active");
    document.getElementById("Lucida").classList.add("color-palette-active");
    document.body.style.setProperty('--fontFamily', `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`);
});

document.getElementById("darkTheme").addEventListener("click",()=>{
    darkThemeApplier();
});
document.getElementById("lightTheme").addEventListener("click",()=>{
    document.getElementById("darkTheme").classList.remove("color-palette-active");
    document.getElementById("lightTheme").classList.add("color-palette-active");
    document.body.style.setProperty('--DarkThemeBackground', `#eeeeee`);
    document.body.style.setProperty('--DarkThemeColor', `#333333`);
    document.body.style.setProperty('--ThemeColor1', `rgba(0,0,0,0.1)`);
    document.body.style.setProperty('--ThemeColor2', `rgba(0,0,0,0.2)`);
    document.body.style.setProperty('--ThemeColor3', `rgba(0,0,0,0.3)`);
    document.body.style.setProperty('--ThemeColor4', `rgba(0,0,0,0.4)`);
    document.body.style.setProperty('--DThemeColor', `rgba(255,255,255,0.8)`);
});