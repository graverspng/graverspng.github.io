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

    let counter = 0;

    let checkbox1 = document.getElementById("Australija");
    let checkbox2 = document.getElementById("Roma");
    let checkbox3 = document.getElementById("Indonēzija");
    let checkbox4 = document.getElementById("Liepāja");

    

    if(checkbox1.checked == true){
        counter++;
    }


    if(checkbox3.checked == true){
        counter++;
    }
    if(checkbox4.checked == true){
        counter++;
    }

    if (checkbox1.checked == false && checkbox2.checked == false && checkbox3.checked == false && checkbox4.checked == false) {
        document.getElementById("atbilde").innerHTML = "Nav neviens ievadits!";
    }   else if (checkbox2.checked == false){
        document.getElementById("atbilde").innerHTML = "Tev ir  " + counter + " Pareizas atbildes no 3! ";
    }   else {
        document.getElementById("atbilde").innerHTML = "Nepareizi ievadits!"; 
    }
    }