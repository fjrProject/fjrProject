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
        tutup_nav();
    }
});
document.querySelector(".main-home").addEventListener("click", function(){
    tutup_nav();
});
document.querySelector(".cars").addEventListener("click", function(){
    tutup_nav();
});

const rangkaian1_img = document.querySelector(".rangkaian-1 > div > div > img");
document.querySelector(".tombol-rangkaian-1").addEventListener("click", function(){
    if(rangkaian1_img.classList.contains("off")){
        rangkaian1_img.classList.replace("off", "on");
        rangkaian1_img.src = "IMG/lamp-on.png";
    }
    else if(rangkaian1_img.classList.contains("on")){
        rangkaian1_img.src = "IMG/lamp-off.png";
        rangkaian1_img.classList.replace("on", "off");
    }
})

function tutup_nav(){
    if(navigasi.classList.contains("show-navigasi")){
        navigasi.classList.replace("show-navigasi", "hide-navigasi");
        document.querySelectorAll(".burger").forEach(element => {
            element.classList.replace("bg-light", "bg-black");
        });
    }
}