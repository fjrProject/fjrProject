const burger = document.querySelector(".humberger-menu");
const navigasi = document.querySelector(".navigasi");

burger.addEventListener("click", function(){
    if(navigasi.classList.contains("hide-navigasi")){
        navigasi.classList.replace("hide-navigasi", "show-navigasi");
        document.querySelectorAll(".burger").forEach(element => {
            element.classList.replace("bg-black", "bg-light");
        });
    }
    else if(navigasi.classList.contains("show-navigasi")){
        navigasi.classList.replace("show-navigasi", "hide-navigasi");
        document.querySelectorAll(".burger").forEach(element => {
            element.classList.replace("bg-light", "bg-black");
        });
    }
});
document.querySelector(".main-home").addEventListener("click", function(){
    if(navigasi.classList.contains("show-navigasi")) navigasi.classList.replace("show-navigasi", "hide-navigasi");
});
document.querySelector(".cars").addEventListener("click", function(){
    if(navigasi.classList.contains("show-navigasi")) navigasi.classList.replace("show-navigasi", "hide-navigasi");
});