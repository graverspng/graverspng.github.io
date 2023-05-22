const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");
toggleTheme.addEventListener("change", toggleThemeHandler);
function toggleThemeHandler() {
    if (toggleTheme.checked) {

        html.dataset.theme = "dark";
        localStorage.setItem('theme' , 'dark');
    } else {
        html.dataset.theme = "light";
        localStorage.setItem("theme", "light");
    }
}

const theme = localStorage.getItem("theme");

if(theme == 'light' || !theme){
    html.dataset.theme = "light";
    document.getElementById("toggle-theme").checked = true;
} else {
    html.dataset.theme = "dark";
    document.getElementById("toggle-theme").checked = true;
}

function spiest(){
    let checkbox1 = document.getElementById("Australija");
    let checkbox2 = document.getElementById("Roma");
    let checkbox3 = document.getElementById("Indonēzija");
    let checkbox4 = document.getElementById("Liepāja");


    if (checkbox1.checked ){
        document.getElementById("pirmais").style.background = "#FF0000";
    }else {
        document.getElementById("pirmais").style.background = "var(--triis)";
    }

    if (checkbox2.checked ){
        document.getElementById("otrais").style.background = "#FF0000";
    }else {
        document.getElementById("otrais").style.background = "var(--triis)";
    }

    if (checkbox3.checked ){
        document.getElementById("tresais").style.background = "#FF0000";
    }else {
        document.getElementById("tresais").style.background = "var(--triis)";
    }

    if (checkbox4.checked ){
        document.getElementById("ceturtais").style.background = "#90EE90";
    }else {
        document.getElementById("ceturtais").style.background = "var(--triis)";
    }
}

    function spiest2(){
        let checkbox11 = document.getElementById("Australija2");
        let checkbox21 = document.getElementById("Roma2");
        let checkbox31 = document.getElementById("Indonēzija2");
        let checkbox41 = document.getElementById("Liepāja2");
    
        if (checkbox11.checked ){
            document.getElementById("pirmais2").style.background = "#FF0000";
        }else {
            document.getElementById("pirmais2").style.background = "var(--triis)";
        }

        if (checkbox21.checked ){
            document.getElementById("otrais2").style.background = "#90EE90";
        }else {
            document.getElementById("otrais2").style.background = "var(--triis)";
        }

        if (checkbox31.checked ){
            document.getElementById("tresais2").style.background = "#FF0000";
        }else {
            document.getElementById("tresais2").style.background = "var(--triis)";
        }

        if (checkbox41.checked ){
            document.getElementById("ceturtais2").style.background = "#FF0000";
        }else {
            document.getElementById("ceturtais2").style.background = "var(--triis)";
        }
    }


    function spiest3(){
        let checkbox12 = document.getElementById("Australija3");
        let checkbox22 = document.getElementById("Roma3");
        let checkbox32 = document.getElementById("Indonēzija3");
        let checkbox42 = document.getElementById("Liepāja3");


        if (checkbox12.checked ){
            document.getElementById("pirmais3").style.background = "#FF0000";
        }else {
            document.getElementById("pirmais3").style.background = "var(--triis)";
        }

        if (checkbox22.checked ){
            document.getElementById("otrais3").style.background = "#FF0000";
        }else {
            document.getElementById("otrais3").style.background = "var(--triis)";
        }

        if (checkbox32.checked ){
            document.getElementById("tresais3").style.background = "#90EE90";
        }else {
            document.getElementById("tresais3").style.background = "var(--triis)";
        }

        if (checkbox42.checked ){
            document.getElementById("ceturtais3").style.background = "#FF0000";
        }else {
            document.getElementById("ceturtais3").style.background = "var(--triis)";
        }
    }
