const explorerTitle = document.getElementById("explorer-title");
const explorer = document.getElementById("explorer");
const explorerContent = document.getElementById("explorer-content");
const urlBar = document.getElementById("url-bar");
const searchBtn = document.getElementById("searchBtn");

const taskbarExplorerIcon = document.getElementById("taskbar-explorer-icon");
const taskbarExplorerIconImage = document.getElementById("taskbar-explorer-icon-image");

const iframeBrowser = document.getElementById("browser-iframe");
const iframeProfile = document.getElementById("profile-iframe");
const iframeProject = document.getElementById("project-iframe");

const browserContent = document.getElementById("browser-content");
const profileContent = document.getElementById("profile-content");
const projectContent = document.getElementById("project-content");
const settingContent = document.getElementById("setting-content");
const personalContent = document.getElementById("personal-content");

var maximizeCount = 0;

if (window.innerWidth >= 800){
    document.getElementById("profile").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        profileContent.classList.remove("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");
        browserContent.classList.add("none");
        explorerTitle.innerHTML = `<a href="/portfolio-profile" target="_blank">Open profile</a>`;

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/resume.svg`;

        if (iframeProfile.src == ''){
            iframeProfile.src = `/portfolio-profile`;
        }
    });

    document.getElementById("project").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.remove("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");
        explorerTitle.innerHTML = `<a href="/projects" target="_blank">Open Projects</a>`;

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/project.svg`;

        if (iframeProject.src == ''){
            iframeProject.src = `/projects`;
        }
    });

    document.getElementById("personal").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.remove("none");
        settingContent.classList.add("none");
        explorerTitle.innerText = "Personal";

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/folder1.svg`;
    });

    document.getElementById("browser").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        explorerTitle.innerText = "Browser";
        browserContent.classList.remove("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/browser.svg`;

        if (iframeBrowser.src == ""){
            urlBar.value = "https://www.searchencrypt.com/?ptc=://mail";
            iframeBrowser.src = "https://www.searchencrypt.com/?ptc=://mail";
        }
    });

    document.getElementById("setting").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.remove("none");
        explorerTitle.innerText = "Settings";

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/setting1.svg`;
    });
}
else{
    document.getElementById("profile").addEventListener("click",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.remove("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");
        explorerTitle.innerHTML = `<a href="/portfolio-profile" target="_blank">Open profile</a>`;

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/resume.svg`;

        if (iframeProfile.src == ''){
            iframeProfile.src = `/portfolio-profile`;
        }
    });

    document.getElementById("project").addEventListener("click",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.remove("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");
        explorerTitle.innerHTML = `<a href="/projects" target="_blank">Open Projects</a>`;

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/project.svg`;

        if (iframeProject.src == ''){
            iframeProject.src = `/projects`;
        }
    });

    document.getElementById("personal").addEventListener("click",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.remove("none");
        settingContent.classList.add("none");
        explorerTitle.innerText = "Personal";

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/folder1.svg`;
    });

    document.getElementById("browser").addEventListener("click",()=>{
        explorer.classList.remove("none");
        explorerTitle.innerText = "Browser";
        browserContent.classList.remove("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/browser.svg`;
        
        if (iframeBrowser.src == ""){
            urlBar.value = "https://www.searchencrypt.com/?ptc=://mail";
            iframeBrowser.src = "https://www.searchencrypt.com/?ptc=://mail";
        }
    });

    document.getElementById("setting").addEventListener("click",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.remove("none");
        explorerTitle.innerText = "Settings";

        taskbarExplorerIcon.classList.add("lightBack");
        taskbarExplorerIcon.classList.remove("none");
        taskbarExplorerIconImage.src = `/static/assets/icons/setting1.svg`;
    });
}

const minimizeFunction = () => {
    explorer.classList.add("minimize");
    taskbarExplorerIcon.classList.remove("lightBack");
    setTimeout(()=>{
        explorer.classList.remove("minimize");
        explorer.classList.add("none");
    }
    ,500);
}

taskbarExplorerIcon.addEventListener("click",()=>{
    if (explorer.classList.contains("none")){
        taskbarExplorerIcon.classList.add("lightBack");
        explorer.classList.remove("none");
    }
    else{
        minimizeFunction();
    }
});

document.getElementById("minimize").addEventListener("click",()=>{
    minimizeFunction();
});

document.getElementById("close-explorer").addEventListener("click",()=>{
    taskbarExplorerIcon.classList.remove("lightBack");
    taskbarExplorerIcon.classList.add("none");
    explorerTitle.innerHTML = '';
    browserContent.classList.add("none");
    explorer.classList.add("none");
});

document.getElementById("maximize").addEventListener("click",()=>{
    if (maximizeCount == 0){
        explorer.classList.add("maximize");
        explorerHeight();
        maximizeCount = 1;
    }
    else{
        explorer.classList.remove("maximize");
        explorerHeight();
        maximizeCount = 0;
    }
});

const explorerHeight = () => {
    var height = document.getElementById("explorer").offsetHeight;
    document.getElementById("explorer-content").style.height = `${height - 37}px`;
}

const searchFun = () => {
    const searchUrl = "https://www.searchencrypt.com/search?eq=";
    var urlVal = urlBar.value;
    if (urlVal.substring(0,7) == 'http://' || urlVal.substring(0,8) == 'https://'){
        iframeBrowser.src=`${urlVal}`;
        setTimeout(() => {
            urlBar.value = iframeBrowser.src;
        }, 500);
    }
    else {
        iframeBrowser.src=`${searchUrl}${urlVal}&ptc=://mail`;
        setTimeout(() => {
            urlBar.value = iframeBrowser.src;
        }, 500);
    }
}

urlBar.onkeydown = (e) => {
    if (e.which == 13){
        searchFun();
    }
}

searchBtn.addEventListener("click",()=>{searchFun();});

window.onresize = explorerHeight;
document.onclick = explorerHeight;
explorerHeight();